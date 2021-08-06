import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import UppercaseFirstLatter from 'src/utils/UppercaseFirstLatter';
import ChevronDown from 'src/svgs/ChevronDown';
import ChevronUp from 'src/svgs/ChevronUp';
import AllDesignsCategories from 'src/data/others/AllDesignsCategories';
import { MainContext } from 'context/mainContext';
import { MainContextTypes } from 'src/types/createContextTypes';
import LeftHideIcon from 'src/components/LeftHideIcon';
import { useRef } from 'react'; 

export default function LeftBar() {
  const { state } = useContext<MainContextTypes>(MainContext);
  const leftbarReff: any = useRef();
  const { sidebarShow } = state;

  return (
    <div
      ref={leftbarReff}
      className={`z-50 ${
        sidebarShow ? ' translate-x-0 ' : ' lg:translate-x-0 -translate-x-full '
      } transform bgSidebar leftBar text-white min-h-screen max-h-screen sidebarScroll overflow-y-scroll lg:sticky fixed top-0 left-0`}
    >
      <LeftBarHeader />
      <div className="py-4 2xl:py-12 flexjcic flex-col w-full">
        {Object.entries(AllDesignsCategories).map(([key, arr], index) => (
          <ComponentsBar key={key} name={key} index={index} designs={arr} />
        ))}
      </div>
    </div>
  );
}

function ComponentsBar({
  name,
  designs,
  index,
}: {
  name: string;
  designs?: object[] | any;
  index: any;
}) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const getQuery: string | any = router.query?.designs;
  const uppercaseQuery = UppercaseFirstLatter(getQuery);
  useEffect(() => {
    setShow(designs.includes(uppercaseQuery));
  }, []);

  return (
    <div
      style={{ padding: '1.5px' }}
      className={`mb-5 rounded ${show ? '' : ' from-yellow-400 to-pink-400 '} ${
        (index + 1) % 2 == 0 ? ' bg-gradient-to-r' : ' bg-gradient-to-l'
      }
      `}
    >
      <div className={`relative rounded bg-gray-900 ${show && 'ring-2'}`}>
        <button
          onClick={() => setShow((prev) => !prev)}
          className={`flex text-gray-200 justify-between items-center w-48 p-2 hover:bg-gray-700 ${
            show ? 'bg-gray-700' : 'bg-gray-900 rounded'
          }`}
        >
          {name}
          {show ? (
            <ChevronUp className="text-gray-300" />
          ) : (
            <ChevronDown className="text-gray-300" />
          )}
        </button>

        <div
          style={{ transition: 'all 0.07s' }}
          className={`p-2 pt-1 rounded-sm flex flex-col justify-center items-end transform ${
            show ? '' : 'scale-y-0 origin-top absolute inset-x-0'
          }`}
        >
          {designs.map((design, i) => (
            <button
              key={i}
              style={{ padding: '2px 0px' }}
              className={`relative mt-1 w-full rounded-sm outline-none ${
                router.query.designs == design.toLowerCase()
                  ? ' bg-gray-100 text-black ring transform scale-110 mt-2 mb-1'
                  : ' bg-gray-800 text-white '
              } `}
              onClick={() => router.push(`/designs/${design.toLowerCase()}`)}
            >
              {design}  
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LeftBarHeader() {
  return (
    <div className="bgSidebar z-50 w-full h-14 flex items-center lg:justify-center justify-between text-sm lg:text-lg px-2 sticky top-0 left-0">
      <p className=" border-b-2 ">
        <b className="italic"> All </b>
        <span className="prime"> Components</span>
      </p>
      <LeftHideIcon />
    </div>
  );
}
