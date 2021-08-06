//::You can remove background color & padding from main root <section> or <div>

import { Fragment } from "react";

export default function SquareStepper({
  // this is 👇 initial Value, You have to provide all as a props!
  // stepNames is optional but it's should be for good looking
  // allSteps and currentStep is must required!
  allSteps = 5,
  currentStep = 3,
  stepNames = ['Info', 'Details', 'Verify', 'Review', 'Complete'],
}) {
  const flexAllCenter = 'flex items-center justify-center';
  const gradient = 'bg-gradient-to-r from-yellow-400 to-pink-500';

  return (
    <section className="p-9 bg-gray-800 rounded flex items-center justify-between">
      {Array(allSteps)
        .fill('')
        .map((_, i) => {
          const step = i + 1;
          return (
            <Fragment key={i}>
              <div
                className={`w-7 h-7 rounded-sm ${
                  step == currentStep && 'transform scale-125'
                } ${
                  step == currentStep && ` p-0.5 ${gradient} animate-pulse`
                } ${step >= currentStep && 'p-0.5 bg-white bg-opacity-20'} `}
              >
                <div
                  className={`w-full h-full rounded-sm ${flexAllCenter} ${
                    step >= currentStep ? 'bg-gray-800' : 'bg-yellow-600'
                  }`}
                >
                  {step == currentStep && (
                    <div className={`${gradient} w-2 h-2 rounded-full`} />
                  )}

                  {step < currentStep && (
                    <b className=" text-base font-bold text-white"> ✓ </b>
                  )}

                  {step > currentStep && (
                    <div
                      className={`bg-white bg-opacity-20 p-1 rounded-full`}
                    />
                  )}
                </div>
              </div>

              {step != allSteps && (
                <div
                  style={{ height: '2px' }}
                  className={`w-12 xl:w-20 2xl:w-24 ${
                    step < currentStep
                      ? 'bg-yellow-400'
                      : 'bg-white bg-opacity-20'
                  }`}
                />
              )}
            </Fragment>
          );
        })}
    </section>
  );
}
