// ::By default it width=w-96 you can change it easily from root <div>

import { useRef, useState } from 'react';

export default function InputLabelEffect({ name = 'Address', type = 'text' }) {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef();
  return (
    <div className="relative sm:w-96">
      <label
        style={{ transitionDuration: '0.1s !important' }}
        className={`absolute flex items-start ${
          inputRef.current?.value || focus
            ? '-top-2 text-xs text-gray-500'
            : 'top-2'
        } left-0 w-1 h-1`}
        htmlFor={name + '4'}
      >
        {name}
        {focus && (
          <div className="p-0.5 bg-green-400 rounded-full ring-2 ml-2 mt-1 animate-pulse" />
        )}
      </label>
      <input
        id={name + '4'}
        ref={inputRef}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`box-border w-full py-1 outline-none bg-gray-900 border-b-2 ${
          inputRef.current?.value || focus
            ? 'border-yellow-500'
            : 'border-white'
        }`}
        type={type}
      />
    </div>
  );
}
