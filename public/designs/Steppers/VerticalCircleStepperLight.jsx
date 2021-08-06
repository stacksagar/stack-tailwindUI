export default function VerticalCircleStepperLight({
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
              <div className={`w-8 flex-col ${flexAllCenter} mr-3`}>
                <div
                  className={` ${
                    step == currentStep
                      ? 'transform scale-110 bg-blue-500'
                      : 'bg-black bg-opacity-20'
                  } ${
                    step >= currentStep && 'p-0.5'
                  } w-full h-8 rounded-full mr-2 mx-auto`}
                >
                  <div
                    className={`w-full h-full bg-white rounded-full ${flexAllCenter}`}
                  >
                    {step < currentStep && (
                      <div
                        className={`w-full h-full bg-blue-500 rounded-full ${flexAllCenter}`}
                      >
                        ✓
                      </div>
                    )}

                    {step == currentStep && (
                      <div className="p-1 ring-2 animate-pulse bg-blue-500 rounded-full" />
                    )}

                    {step > currentStep && (
                      <div className="p-1 rounded-full bg-black bg-opacity-20" />
                    )}
                  </div>
                </div>
                {step != allSteps && (
                  <div
                    className={`w-1 h-8 ${
                      step < currentStep ? 'bg-blue-500' : 'bg-black bg-opacity-20'
                    }`}
                  />
                )}
              </div>
              {stepNames?.length ? (
                <p
                  className={`p-0.5 ${
                    step <= currentStep ? 'text-blue-400' : 'text-gray-400 '
                  } ${step == currentStep && 'underline animate-pulse'}`}
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
