import GradientLight from 'public/designs/Buttons/GradientLight';
import GradientLightOutLine from 'public/designs/Buttons/GradientLightOutline';
import ReactIcon from 'src/svgs/ReactIcon';
import Wave from 'src/svgs/Wave';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useEffect } from 'react';

const imagesPath = [
  '/photos/email-subscribe.png',
  '/photos/help-us-do-more.png',
  '/photos/reviews.png',
  '/photos/how-can-we-help.png',
  '/photos/your-plan.png',
  '/photos/reviews-2.png',
];

function SingleImage({ path, i }) {
  return (
    <div
      className={`w-full flex ${i !== 0 && ' -mt-20 '} ${
        i % 2 == 0
          ? 'justify-end 2xl:justify-center 2xl:-ml-56'
          : 'justify-start 2xl:justify-center '
      }`}
    >
      <Image
        src={path}
        className={`rounded object-cover object-center`}
        width="400"
        height="350"
      />
    </div>
  );
}

function HomepageDesignsPhotos() {
  const scrollRef = useRef<any>();
  const [scrollTop, setScrollTop] = useState<any>(0);
  const [isMount, setIsMount] = useState<any>(false);
  let isIncrement = true;

  const handleScrollTop = () => {
    if (!isMount)
      setTimeout(() => {
        setInterval(() => {
          setScrollTop((prev) => {
            if (isIncrement && prev + 500 < scrollRef.current.scrollHeight) {
              return prev + 5;
            } else {
              isIncrement = false;
              if (!isIncrement && prev > 2) {
                return prev - 5;
              }
              isIncrement = true;
              return 0;
            }
          });
        },50);
      }, 500);
  };

  useEffect(() => {
    scrollRef.current.scrollTop = scrollTop;
  }, [scrollTop]);

  useEffect(() => {
    handleScrollTop();
    return () => {
      setIsMount(true);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full flex items-end justify-end max-h-screen overflow-hidden sticky top-0 right-0 rounded px-5"
    >
      <div className="p-7 w-3/5 h-screen">
        {imagesPath.map((path, i) => (
          <SingleImage key={i} path={path} i={i} />
        ))}
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <div className="Homepage w-full min-h-screen relative">
      <div
        style={{ width: '350%' }}
        className="z-10 fixed left-0 top-0 h-full flex items-end overflow-hidden"
      >
        <Wave className="w-full h-full pt-1" />
      </div>

      <HomepageDesignsPhotos />

      <main className="absolute inset-0 z-30 p-10 2xl:max-w-screen-2xl 2xl:mx-auto">
        <section className="min-h-screen  flexjsis flex-col space-y-5">
          <div className="p-5 rounded-sm bg-black bg-opacity-5">
            <h3 className="text-3xl">Get Beautifull Amazing UI & Components</h3>
            <p className="text-lg prime text-gray-400">
              Designed with TailwindCSS💖
            </p>
          </div>
          <div className="text-xs text-gray-300 p-5 rounded-sm bg-black bg-opacity-5 flexjcic">
            <span className="prime">
              Specially for
              <span className="text-purple-300 mx-1">React.js & Next.js</span>
            </span>
            <ReactIcon className="animate-spin circleDuration" />
            <span className="prime">Developer's</span>
          </div>
          <p className="text-sm text-gray-200 w-96 p-5 rounded-sm bg-black bg-opacity-5">
            Are you like to make website with fast, then this UI Designs for you
          </p>
          <div className="flex space-x-3">
            <GradientLightOutLine text="Preview UI" />
            <GradientLight text="Get Started" />
          </div>
        </section>

        <section>
          <div>
            <p id="first" className="min-h-screen">
              1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              aspernatur?
            </p>
            <p id="second" className="min-h-screen">
              2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              aspernatur?
            </p>
            <p id="third" className="min-h-screen">
              3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              aspernatur?
            </p>
            <p id="fourth" className="min-h-screen">
              3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              aspernatur?
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
