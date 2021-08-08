import GradientLight from 'src/components/designs/Buttons/GradientLight';
import GradientLightOutLine from 'src/components/designs/Buttons/GradientLightOutline';
import ReactIcon from 'src/svgs/ReactIcon';
import Wave from 'src/svgs/Wave';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import HowToUseSingle from 'src/components/HowToUseSingle';
import Link from 'next/link';
import CricleShow from 'src/components/CricleShow';
import HomeScrollIcons from 'src/components/HomeScrollIcons';

function HomepageDesignsPhotos() {
  return (
    <div
      className="w-96 h-96 relative mr-16 p-1 bg-gradient-to-r from-yellow-500 to-pink-500 bg-opacity-50 rounded-full overflow-hidden"
      id="boxAniWrapper"
    >
      <h1 className="font-bold w-72 h-12 text-2xl absolute inset-0 m-auto flexjcic text-pink-400 bg-black bg-opacity-75 rounded-full pl-5">
        Example Designs
        <small className="text-blue-400 px-2 py-0 rounded bg-gray-900 ring transform scale-50 origin-left ml-1 mt-1">
          99+
        </small>
      </h1>
      <div className="bg-black rounded-full overflow-hidden" id="boxAni"></div>
    </div>
  );
}

export default function Homepage() {
  const homeSectionRef = useRef<any>();
  const mainRef = useRef<any>();
  const [go, setGo] = useState(0);

  const handleHowToUse = () => {
    mainRef.current.scrollTop = document.documentElement.clientHeight - 100;
    setGo(document.documentElement.clientHeight - 100);
  };

  useEffect(() => {
    mainRef.current.onscroll = () => {
      setGo(mainRef.current.scrollTop);
    };
  }, []);

  return (
    <main
      style={{
        height: 'calc( 100vh - 58px ) !important',
        background: '#101010',
      }}
      ref={mainRef}
      className="fixed 2xl:top-32 w-full px-0 md:px-5 lg:px-20 scrollTransparent overflow-y-auto inset-0 z-30 2xl:max-w-screen-2xl 2xl:mx-auto"
    >
      <div
        style={{ width: '350%' }}
        className="fixed left-0 bottom-0 overflow-x-hidden"
      >
        <Wave className="w-full h-20 pt-1" />
      </div>
      <HomeScrollIcons mainRef={mainRef} />

      <section
        ref={homeSectionRef}
        className="h-screen 2xl:h-auto flex justify-between items-center"
      >
        <div className="flex flex-col space-y-9">
          <div className="rounded-sm ">
            <h3 className="text-3xl">
              Get Beautifull Amazing UI &
              <span className="italic ml-2 inline-block">Components</span>
            </h3>
            <p className="text-lg prime text-gray-400">
              Designed with React+TailwindCSS💖
            </p>
          </div>
          <div className="text-xs text-gray-300 rounded-sm flex">
            <span className="italic">
              Specially for
              <span className="text-purple-300 mx-1">React.js & Next.js</span>
            </span>
            <ReactIcon className="animate-spin circleDuration" />
            <span className="italic">Developer's</span>
          </div>
          <p className="text-gray-300 text-lg w-96 rounded-sm text-left tracking-wider ">
            Are you like to make website with TailwindCSS, build faster,
            beautiful, and more accessible React/Next applications. You can use
            our UI_designs for free.
          </p>
          <div className="flex space-x-3">
            <a onClick={handleHowToUse}>
              <GradientLight text="How to use ?" />
            </a>
            <a onClick={handleHowToUse}>
              <GradientLightOutLine text="Get Started" />
            </a>
          </div>
        </div>
        <HomepageDesignsPhotos />
      </section>

      <section
        id="howToUse"
        className="m-5 p-9 mt-32 text-center bg-gray-900 rounded"
      >
        <h2 className="mb-32 text-white italic text-3xl border-b-2 inline-block border-gray-400">
          How To Use Component ?
        </h2>
        <div>
          <div className="mb-12">
            <CricleShow text="1" /> First Go To Design Page From Here
            <Link href="/designs">
              <a className="underline ml-2 text-blue-400">Designs & UI</a>
            </Link>
          </div>
          <HowToUseSingle
            number="2"
            title="Select Category"
            src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/stack-tailwindui%2FhowToUse%2Fcategory.png?alt=media&token=428b9d87-4634-4046-9d06-381a71350c42"
          />
          <HowToUseSingle
            title="Choose any from Category"
            number="3"
            src="https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/stack-tailwindui%2FhowToUse%2Ftype.png?alt=media&token=8d771e5b-baca-42f2-b245-c61762c8488c"
            arrow={'fromLeft'}
          />

          <div className="mb-12">
            <p>
              See Preview & click <b>Code</b> button 👇
            </p>
            <div className="transform scale-75 origin-top w-full h-96 relative">
              <div className="w-3/5 h-32 absolute inset-0 m-auto z-0"></div>
              <Image
                layout="fill"
                objectFit="contain"
                className="z-10 w-full h-auto"
                src={`https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/stack-tailwindui%2FhowToUse%2Fpreview.png?alt=media&token=3fdd3d38-e759-4da7-bd5c-46c616da057d`}
                alt=""
              />
            </div>
          </div>

          <div>
            <p>
              See JSX Code & click <b>Copy</b> button 👇 that's it.
            </p>
            <div className="transform scale-75 origin-top w-full h-96 relative">
              <Image
                objectFit="contain"
                layout="fill"
                className="w-full h-auto"
                src={`https://firebasestorage.googleapis.com/v0/b/stacksagar-storage.appspot.com/o/stack-tailwindui%2FhowToUse%2Fcode.png?alt=media&token=7eac2f97-1a2f-453c-89c4-5a442a2e3f93`}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
