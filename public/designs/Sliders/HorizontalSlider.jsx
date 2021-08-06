import { useRef } from 'react';
/* If you want Scroll Design then add this CSS In your CSS File 
otherwise you can skip and delete this comment from here_👇_!

  .scrollHandle::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .scrollHandle::-webkit-scrollbar-track {
    background: transparent;
  }

  .scrollHandle::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 20px;
  }
  .scrollHandle:hover::-webkit-scrollbar-thumb {
    background: #555555 !important; 
  }
 
  .scrollHandle {
    transition: all 0.4s !important;
    scroll-behavior: smooth !important;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
  }

  .scrollHandle:hover {
    scrollbar-color: #555555 transparent;
  }
*/

export default function HorizontalSlider({ sliderData }) {
  const slidersImages = sliderData ||
    ['😍', '😜', '😎', '🙃', '👌', '💖',
    '😢', '😘', '😀',  '🤍',  '👍' ];

  const sliderValue = useRef();
  const clickHandler = (action) => {
    if (action == '+') {
      return (sliderValue.current.scrollLeft +=
        sliderValue.current.clientWidth + 20);
    }
    return (sliderValue.current.scrollLeft -=
      sliderValue.current.clientWidth + 20);
  };

  return (
    <div className={` max-w-4xl bg-gray-800 p-5 space-y-2 group relative`}>
      {/* Slider Header Text */}
      <div className="flex space-x-10 items-center">
        <p className="text-white">Best Sellers</p>
        <a className="text-white hover:underline cursor-pointer text-sm">
          Shop now
        </a>
      </div>

      <div
        style={{ transition: 'all 1s' }}
        ref={sliderValue}
        className="scrollHandle w-full bg-gray-800 flex overflow-x-scroll overflow-y-hidden py-2"
      >
        <button
          onClick={() => clickHandler('-')}
          className="z-30 absolute top-20 left-5 w-12 h-28 flex items-center justify-center px-6 py-10 bg-black bg-opacity-70 font-serif font-bold text-4xl opacity-0 group-hover:opacity-50"
        >
          &lt;
        </button>

        {slidersImages?.map((icon, i) => (
          <div
            key={i}
            style={{ minWidth: '220px', minHeight: '150px' }}
            className={`${
              i == 0 ? 'ml-0' : 'ml-2'
            } flex justify-center items-center bg-gray-900 rounded`}
          >
            {/*Put your photos or text.👇🏻*/}

            <b className="text-8xl">{icon}</b>

            {/*Put your photos or text.👆*/}
          </div>
        ))}

        <button
          onClick={() => clickHandler('+')}
          className="z-30 absolute top-20 right-5 w-12 h-28 flex items-center justify-center px-5 py-8 ml-5 bg-black bg-opacity-70 font-serif font-bold text-4xl opacity-0 group-hover:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
