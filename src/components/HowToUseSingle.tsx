import Image from 'next/image';
import CricleShow from './CricleShow';

export default function HowToUseSingle({
  arrow,
  title,
  src,
  number,
}: {
  arrow?: string;
  src: any;
  title?: string;
  number?: any;
}) {
  return (
    <div
      className={`mb-12 flex items-center justify-evenly ${
        arrow == 'fromLeft' && 'flex-row-reverse '
      }`}
    >
      <div className=" w-2/4 h-96 relative">
        <Image
          objectFit="contain"
          layout="fill"
          className="w-full h-auto"
          src={src}
          alt=""
        />
      </div>
      <div
        className={`flex items-center justify-center ${
          arrow == 'fromLeft' && 'flex-row-reverse '
        }`}
      >
        <div className="relative w-32 h-0.5 bg-white mx-2">
          <div
            className={`${
              arrow == 'fromLeft'
                ? 'right-1 border-r-2 border-t-2'
                : 'left-1 border-l-2 border-b-2'
            } absolute rotate-45 inset-y-0 m-auto w-7 h-7  bg-transparent transform `}
          />
        </div>
        <p
          className={`mx-3 flex items-center ${
            arrow !== 'fromLeft' && 'flex-row-reverse '
          }`}
        >
          <CricleShow text={number} /> {title}
        </p>
      </div>
    </div>
  );
}
