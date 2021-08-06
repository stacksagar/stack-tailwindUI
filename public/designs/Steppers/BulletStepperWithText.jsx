export default function BulletStepperWithText({
  // this is 👇 initial Value, You have to provide all as a props!
  // stepNames is optional but it's should be for good looking
  // allSteps and currentStep is must required!
  allSteps = 5,
  currentStep = 3,
  stepNames = ['Info', 'Details', 'Review', 'Verify', 'Complete'],
}) {
  const flexAllCenter = 'flex items-center justify-center';

  return (
    <section>
      {Array(allSteps)
        .fill('')
        .map((_, i) => {
          const step = i + 1;
          return (
            <div key={i} className="flex items-start justify-start">
              <div className={`w-4 flex-col ${flexAllCenter} mr-3`}>
                <div
                  className={`${step == currentStep && 'transform scale-125'} ${
                    step <= currentStep
                      ? 'bg-gradient-to-r from-yellow-400 to-pink-500'
                      : 'bg-gray-700'
                  } w-full h-4 rounded-full mr-2 mx-auto`}
                >
                  <div
                    className={`w-full h-full bg-gray-800 rounded-full ${flexAllCenter}`}
                  >
                    {step < currentStep && (
                      <div
                        className={`text-xs w-full h-full bg-yellow-600 rounded-full ${flexAllCenter}`}
                      >
                        <small>✓</small>
                      </div>
                    )}

                    {step == currentStep && (
                      <div style={{padding:'2px'}} className="bg-yellow-500 rounded-full ring" />
                    )}

                    {step > currentStep && (
                      <div className="w-1 h-1 p-1 rounded-full bg-white bg-opacity-20" />
                    )}
                  </div>
                </div>
                {step != allSteps && (
                  <div
                    className={`w-1 h-8 ${
                      step >= currentStep
                        ? `${
                            step >= currentStep
                              ? 'bg-gray-700'
                              : 'bg-gradient-to-t from-yellow-500 to-pink-500'
                          }`
                        : 'bg-yellow-600'
                    } `}
                  />
                )}
              </div>
              {stepNames?.length ? (
                <p
                  className={`-mt-1 ${
                    step < currentStep && 'text-yellow-400'
                  } ${step == currentStep ? 'text-white' : 'text-gray-400'}`}
                >
                  {stepNames[step - 1]}
                </p>
              ) : null}
            </div>
          );
        })}
    </section>
  );
}
