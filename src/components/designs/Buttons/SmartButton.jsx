import { useState } from 'react';

export default function SmartButton({ text }) {
  const [focus, setFocus] = useState(false);
  return (
    <button
      onClick={() => {
        setFocus(true);
        setTimeout(() => {
          setFocus(false);
        }, 333);
      }}
      className="relative overflow-hidden px-6 py-2 rounded bg-gray-600 focus:ring-4"
    >
      <span>{text || 'Button'}</span>
      {focus && (
        <span
          style={{
            animationDuration: '1s !important',
          }}
          className={`absolute w-16 h-10 inset-0 m-auto rounded-l-2xl rounded-r-2xl bg-opacity-30 bg-white animate-ping`}
        />
      )}
    </button>
  );
}
