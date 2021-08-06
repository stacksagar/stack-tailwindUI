// ::By default it width=w-96 you can change it easily from root <div>

import { useState } from 'react';

export default function InputLabel2({ name = 'Address', type = 'text' }) {
  const [focus, setFocus] = useState(false);
  return (
    <div className="sm:w-96 relative">
      <label
        style={{ top: `${focus ? '-8px' : '-5px'}` }}
        className="absolute px-2 pb-1 left-1 text-xs z-10"
        htmlFor={name + '2'}
      >
        {name}
      </label>
      <div
        style={{ top: `${focus ? '0px' : '3px'}` }}
        className="z-0 absolute px-2 h-1 left-1 text-xs bg-gray-800 text-transparent"
      >
        {name}
      </div>
      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="bg-gray-800 box-border w-full pl-3 py-2 mt-1 rounded outline-none ring-1 focus:ring"
        id={name + '2'}
        type={type}
        placeholder={`Your ${name}...`}
      />
    </div>
  );
}
