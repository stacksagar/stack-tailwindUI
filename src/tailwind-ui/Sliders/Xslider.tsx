import { useEffect, useRef } from 'react';

export default function Xslider() {
  const sliderValue: any = useRef();

  const clickHandler = (action) => {
    if (action == '+') {
      return (sliderValue.current.scrollLeft +=
        sliderValue.current.clientWidth + 20);
    }
    return (sliderValue.current.scrollLeft -=
      sliderValue.current.clientWidth + 20);
  };

  return (
    <div className={`w-full bg-gray-100 p-5 space-y-2`}>
      <div className="flex space-x-10 items-center">
        <p className="text-gray-900">Best Sellers</p>
        <a className="text-gray-900 hover:underline cursor-pointer text-sm">
          Shop now
        </a>
      </div>

    <div
     style={{transition:'all 1s'}}
        ref={sliderValue}
        className="w-full bg-white flex space-x-2 overflow-x-scroll overflow-y-hidden space-x-3 py-2"
      >
        <button
          onClick={() => clickHandler('-')}
          className="sticky inset-y-0 left-0 my-auto px-6 py-10 bg-gray-200 text-gray-700 font-bold text-3xl"
        >
          &lt;
        </button>

        {Array(12)
          .fill('')
          .map((_, i) => (
            <div
              key={i}
              style={{ minWidth: '220px', minHeight: '150px' }}
              className="flex justify-center items-center bg-gray-500 ring"
            >
              Item
            </div>
          ))}

        <button
          onClick={() => clickHandler('+')}
          className="sticky inset-y-0 right-0 my-auto px-5 py-8 ml-5 bg-gray-200 text-gray-700 font-bold text-3xl"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
 