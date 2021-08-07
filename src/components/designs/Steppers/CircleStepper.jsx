import { Fragment } from "react";

export default function CircleStepper({
  // this is 👇 initial Value, You have to provide all as a props!
  // allSteps and currentStep is must required & stepNames is optinal!
  allSteps = 5,
  currentStep = 3,
  stepNames = [], // ['Info', 'Details', 'Verify', 'Review', 'Complete'],
}) {
  const flexAllCenter = 'flex items-center justify-center';
  const gradient = 'bg-gradient-to-r from-yellow-400 to-pink-500';

  return (
    <section className="rounded flex items-center justify-between">
      {Array(allSteps)
        .fill('')
        .map((_, i) => {
          const step = i + 1;
          return (
            <Fragment key={i}>
              <div
                className={`w-8 h-8 rounded-full ${
                  step == currentStep && `p-0.5 ${gradient} transform scale-125`
                } ${step >= currentStep && 'p-0.5 bg-white bg-opacity-20'} `}
              >
                <div
                  className={`w-full h-full rounded-full ${flexAllCenter} ${
                    step >= currentStep ? 'bg-gray-800' : 'bg-yellow-600'
                  }`}
                >
                  {step == currentStep && (
                    <div
                      className={`bg-yellow-500 p-0.5 ring-4 rounded-full animate-pulse`}
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
                {stepNames.length ? <small>{stepNames[i]}</small> : null}
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
