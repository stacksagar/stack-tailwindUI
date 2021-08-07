//::You can remove background color & padding from main root <section> or <div>

import { Fragment } from "react";

export default function CircleStepperLight({
  // this is 👇 initial Value, You have to provide all as a props!
  // allSteps and currentStep is must required & stepNames is optinal!
  allSteps = 5,
  currentStep = 3,
  stepNames = [], // ['Info', 'Details', 'Verify', 'Review', 'Complete'],
}) {
  const flexAllCenter = 'flex items-center justify-center';

  return (
    <section className="rounded flex items-center justify-between">
      {Array(allSteps)
        .fill('')
        .map((_, i) => {
          const step = i + 1;
          return (
            <Fragment key={i}>
              <div
                className={`w-8 h-8 rounded-full p-0.5 ${
                  step <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-full h-full rounded-full ${flexAllCenter} ${
                    step >= currentStep ? 'bg-gray-200' : 'bg-blue-500'
                  }`}
                >
                  {step == currentStep && (
                    <div
                      className={`bg-blue-500 p-0.5 ring-4 rounded-full animate-pulse`}
                    />
                  )}

                  {step < currentStep && (
                    <b className=" text-base font-bold text-white"> ✓ </b>
                  )}

                  {step > currentStep && (
                    <div
                      className={`bg-black bg-opacity-20 p-1 rounded-full`}
                    />
                  )}
                </div>
                {stepNames.length ? <small>{stepNames[i]}</small> : null}
              </div>

              {step != allSteps && (
                <div
                  style={{ height: '2px' }}
                  className={`w-12 xl:w-20 2xl:w-24 ${
                    step < currentStep ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              )}
            </Fragment>
          );
        })}
    </section>
  );
}
