import React from 'react';

const steps = {
  step1:
    'Make beautifull amazing UI & components in folder path `public/designs`',
  step2:
    'Go to `src/data/previewUI` and check this category Parent element Has or Not if Has then just import UI from `public/designs` if NOT then create Parent Element of this category.',
  step3:
    'Go to `src/data/others/` First check [AllDesignsCategories.ts] file then check [AllDesigns.ts] file if not exist then import.',
};

export default function howToSetUpUI() {
  return (
    <div className="p-10 min-h-screen text-gray-300 ">
      {Object.entries(steps).map(([key, val], i) => (
        <Step key={key} step={i + 1} text={val} />
      ))}
    </div>
  );
}

function Step({
  step,
  title,
  text,
  ...props
}: {
  step: number | string;
  text: string;
  title?: string;
}) {
  return (
    <div
      {...props}
      className={`${
        text.split(' ').length > 50 ? 'flexjcis' : 'flexjsic'
      } w-full bg-gray-900 p-5 mb-10 rounded shadow`}
    >
      <div
        style={{ maxWidth: '130px' }}
        className="h-12 p-6 px-0 flexjbic relative"
      >
        <div className="w-20 h-12 p-3 border border-gray-400 z-20 border-r-0"></div>
        <div className="w-8 h-8 p-4 border border-gray-400 z-10 border-l-0 border-b-0 transform rotate-45 -ml-4"></div>
        <div className="w-full h-full absolute m-auto z-50 flexjcic">
          {title || 'Step'}
        </div>
      </div>

      <div className="w-14 h-14 p-7 rounded-full bg-gray-800 flexjcic ring mx-5">
        {step}
      </div>

      <p className="w-full leading-10 border-l-2 border-gray-500 pl-3">
        {text}
      </p>
    </div>
  );
}