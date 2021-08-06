//::You can remove background color & padding from main root <section> or <div>

import { Fragment } from 'react';

export default function CircleStepper({
  // this is 👇 initial Value, You have to provide all as a props!
  // stepNames is optional
  // allSteps and currentStep is must required!
  allSteps = 5,
  currentStep = 3,
  stepNames = ['Info', 'Details', 'Review', 'Verify', 'Complete'],
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
              {i != 0 && (
                <div
                  style={{ height: '2px' }}
                  className={`w-5 ${
                    step <= currentStep
                      ? 'bg-yellow-400'
                      : 'bg-white bg-opacity-20'
                  }`}
                />
              )}
              <div className="relative">
                {stepNames.length ? (
                  <small
                    className={`mb-1 inline-block ${
                      step < currentStep && 'text-yellow-300'
                    } ${
                      step == currentStep
                        ? 'text-white animate-pulse'
                        : 'text-gray-400'
                    }`}
                  >
                    {stepNames[i]}
                  </small>
                ) : (
                  <small>{step}</small>
                )}
              </div>
              <div
                style={{ height: '2px' }}
                className={`w-5 ${
                  step <= currentStep
                    ? 'bg-yellow-400'
                    : 'bg-white bg-opacity-20'
                }`}
              />

              <div
                className={`w-8 h-8 rounded-full ${
                  step == currentStep && `transform scale-125 p-0.5 ${gradient}`
                } ${step >= currentStep && 'p-0.5 bg-white bg-opacity-20'} `}
              >
                <div
                  className={`w-full h-full rounded-full ${flexAllCenter} ${
                    step >= currentStep ? 'bg-gray-800' : 'bg-yellow-600'
                  }`}
                >
                  {step == currentStep && (
                    <div
                      className={`${gradient} w-2 h-2 rounded-full animate-pulse`}
                    />
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
            </Fragment>
          );
        })}
    </section>
  );
}
