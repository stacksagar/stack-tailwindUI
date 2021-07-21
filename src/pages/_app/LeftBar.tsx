import Link from 'next/link';
import RemoveIcon from 'svgs/RemoveIcon';
import ChevronDown from 'svgs/ChevronDown';
import ChevronUp from 'svgs/ChevronUp';
import { useEffect, useState } from 'react';
import AllDesignsName from 'data/AllDesignsName';
import { useRouter } from 'next/router';
import UppercaseFirstLatter from 'utils/UppercaseFirstLatter';

export default function LeftBar({
  showLeftBar,
  toggleLeftBar,
}: {
  showLeftBar?: any;
  toggleLeftBar?: any;
}) {
  return (
    <div
      style={{ width: '300px' }}
      className={`z-50 text-white bg-gray-800 h-screen overflow-y-scroll lg:translate-x-0 lg:sticky absolute transform ${
        showLeftBar ? '-translate-x-0' : '-translate-x-full'
      }`}
    >
      <LeftBarHeader toggleLeftBar={toggleLeftBar} />

      <div className="py-4 pr-1 flex items-center justify-start flex-col w-full">
        {Object.entries(AllDesignsName).map(([key, arr]) => (
          <ComponentsBar key={key} name={key} designs={arr} />
        ))}
      </div>
    </div>
  );
}

function ComponentsBar({
  name,
  designs,
}: {
  name: string;
  designs?: object[] | any;
}) {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const getQuery: string | any = router.query?.designs
  const uppercaseQuery = UppercaseFirstLatter(getQuery)

  useEffect(() => {
    setShow(designs.includes(uppercaseQuery))
  }, []);

  return (
    <div className={`relative mb-2 rounded ${show && 'ring'}`}>
      <button
        onClick={() => setShow((prev) => !prev)}
        className={`flex justify-between items-center w-40 p-2 rounded hover:bg-gray-700 ${
          show ? 'bg-gray-700 ring' : 'bg-gray-900'
        }`}
      >
        {name}
        {show ? <ChevronUp /> : <ChevronDown />}
      </button>

      <div
        style={{ transition: 'all 0.07s' }}
        className={`rounded-sm flex flex-col justify-center items-end p-2 transform ${
          show ? '' : 'scale-y-0 origin-top absolute inset-x-0'
        }`}
      >
        {designs.map((design, i) => (
          <button
            key={i}
            style={{ padding: '2px 0px' }}
            className={`mt-1 w-full rounded-sm hover:bg-gray-300 hover:text-gray-800 ${
              router.query.designs == design.toLowerCase()
                ? 'ring bg-gray-200 text-gray-800 transform scale-110 mt-2 mb-1'
                : 'bg-yellow-700 text-white'
            } `}
            onClick={() => router.push(`/designs/${design.toLowerCase()}`)}
          >
            {design}
          </button>
        ))}
      </div>
    </div>
  );
}

function LeftBarHeader({ toggleLeftBar }) {
  return (
    <div
      style={{ background: '#222222' }}
      className="z-50 w-full h-14 flex items-center justify-center sticky top-0 left-0"
    >
      <Link href="/"> Tailwind - Designs </Link>
      <button
        onClick={toggleLeftBar}
        className="absolute top-1 right-1 lg:hidden"
      >
        <RemoveIcon fill="red" className="text-red-200" />
      </button>
    </div>
  );
}
