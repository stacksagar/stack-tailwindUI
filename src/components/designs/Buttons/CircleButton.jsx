import { useState } from 'react';

export default function CircleButton(props, { text }) {
  const [focus, setFocus] = useState(false);
  return (
    <button
      onClick={() => {
        setFocus(true);
        setTimeout(() => {
          setFocus(false);
        }, 333);
      }}
      className={
        `relative w-10 sm:w-12 h-10 sm:h-12 rounded-full outline-none bg-gray-600 focus:ring-4 flex items-center justify-center ` +
        props.className
      }
    >
      <small className="sm:text-sm">{text || 'Play'}</small>
      {focus && (
        <span
          style={{
            animationDuration: '1s !important',
          }}
          className={`absolute w-8 sm:w-10 h-8 sm:h-10 inset-0 m-auto rounded-full bg-opacity-30 bg-white animate-ping`}
        />
      )}
    </button>
  );
}
