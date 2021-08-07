import { useState } from 'react';

export default function StandardAccordion() {
  const allTexts = {
    Low: 'about something of Low Quality',
    Medius: 'about something of Medium Quality',
    High: 'about something of High Quality',
    Advance: 'about something of Advance Quality',
  };

  const lastIndex = Object.entries(allTexts).length - 1;
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full">
      {Object.entries(allTexts).map(([key, value], i) => (
        <div key={key} className="relative overflow-hidden">
          <div
            onClick={() => {
              if (i == index) {
                setIndex(null);
                return;
              }
              setIndex(i);
            }}
            className={`p-3 bg-gray-800  cursor-pointer border-2 border-gray-500 ${
              i !== 0 && 'border-t-0'
            } ${i == index && `border-b-0`} ${
              i == index ? 'text-white' : 'text-gray-300'
            } transition-none `}
          >
            <div
              className={`${
                i == index ? '-rotate-90' : 'rotate-90'
              } transform  inline-block mr-3`}
            >
              {'>'}
            </div>

            {key}
          </div>
          <div
            style={{ transition: '0.11s !important' }}
            className={`bg-gray-900 px-10 transform origin-top border-l-2 border-r-2 border-gray-500 ${
              index == i ? 'h-auto py-5' : 'h-0'
            } ${i==index && i == lastIndex && 'border-b-2'}`}
          >
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}
