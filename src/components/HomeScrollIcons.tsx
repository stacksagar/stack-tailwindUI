import { useEffect, useState } from 'react';
import SmartButtonIt from 'src/components/for_it/SmartButtonIt';
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  PauseIcon,
  PlayIcon,
} from '@heroicons/react/solid';
import { useRef } from 'react';

export default function HomeScrollIcons({
  mainRef, 
}: {
  mainRef?: any;  
}) {
  const [scrollTop, setScrollTop] = useState<any>(0);
  const [isMount, setIsMount] = useState<any>(false);
  let isIncrement = true;
  let scrollInterval: any = useRef();

  const scrollIncrement = () => {
    mainRef.current.scrollTop += 250;
  };
  const scrollDecrement = () => {
    mainRef.current.scrollTop -= 250;
  };
  const topToBottom = (value) => {
    mainRef.current.scrollTop = value;
  };

  const handleScrollTop = () => {
    if (!isMount)
      scrollInterval.current = setInterval(() => {
        setScrollTop((prev) => {
          if (prev + 500 < mainRef.current.scrollHeight) {
            return mainRef.current.scrollTop + 10;
          } else {
            return 0;
          }
        });
      }, 100);
  };

  useEffect(() => {
    mainRef.current.scrollTop = scrollTop;
  }, [scrollTop]);

  const playPause = () => {
    if (!isMount) {
      handleScrollTop();
    } else {
      clearInterval(scrollInterval.current);
    }
    setIsMount((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      setIsMount((prev) => !prev);
    };
  }, []);
  return (
    <div className="z-40 fixed right-4 inset-y-0 m-auto h-32 flex items-center space-x-2">
      <div>
        <SmartButtonIt onClick={() => topToBottom(0)} className="mb-2">
          <ArrowSmUpIcon className="w-5" />
        </SmartButtonIt>
        <SmartButtonIt
          onClick={() => topToBottom(mainRef?.current?.scrollHeight)}
        >
          <ArrowSmDownIcon className="w-5" />
        </SmartButtonIt>
      </div>
      <div>
        <SmartButtonIt
          onClick={scrollDecrement}
          className="transform rotate-90"
          text="<"
        />
        <SmartButtonIt onClick={playPause} ringNone={true} className="my-3">
          {isMount ? (
            <PauseIcon className="w-full" />
          ) : (
            <PlayIcon className="w-full" />
          )}
        </SmartButtonIt>
        <SmartButtonIt
          onClick={scrollIncrement}
          className="transform rotate-90"
          text=">"
        />
      </div>
    </div>
  );
}
 