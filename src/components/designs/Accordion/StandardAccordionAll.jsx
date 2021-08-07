import { useState } from 'react';

export default function StandardAccordionAll() {
  const allTexts = {
    Low: 'about something of Low Quality',
    Medius: 'about something of Medium Quality',
    High: 'about something of High Quality',
    Advance: 'about something of Advance Quality',
  };

  const lastIndex = Object.entries(allTexts).length - 1;
  const [openIndexes, setOpenIndexes] = useState([0]);
  const clickHandler = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes((prevAll) => prevAll.filter((prev) => prev !== index));
    } else {
      setOpenIndexes((prevAll) => {
        return [...prevAll, index];
      });
    }
  };

  return (
    <div className="w-full">
      {Object.entries(allTexts).map(([key, value], i) => (
        <div
          key={key}
          className={`relative overflow-hidden transition-none ${
            openIndexes.includes(i) && 'my-5 ring rounded'
          } ${i != lastIndex && !openIndexes.includes(i) && 'mb-0.5'}`}
        >
          <div
            onClick={() => clickHandler(i)}
            className={`p-3 bg-gray-800 cursor-pointer ${
              openIndexes.includes(i)
                ? 'text-green-200 text-2xl'
                : 'text-gray-300'
            } transition-none `}
          >
            <span className="span w-4 h-4 inline-flex pb-0.5 mr-3 items-center justify-center bg-green-700 font-bold text-white rounded-full">
              {openIndexes.includes(i) ? '-' : '+'}
            </span>
            <span
              className={`${
                openIndexes.includes(i) && 'border-b-2 border-gray-500'
              }`}            >
              {key}
            </span>
          </div>
          <div
            style={{ transition: '0.11s !important' }}
            className={`bg-gray-800 px-10 transform origin-top  ${
              openIndexes.includes(i) ? 'h-auto py-5' : 'h-0'
            }`}
          >
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}
