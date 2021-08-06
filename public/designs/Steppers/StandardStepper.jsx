export default function StandardStepper({
  // this is 👇 initial Value, You have to provide all as a props!
  // everthing you have to provide as a props
  allSteps = 5,
  currentStep = 3,
  stepNames = ['Info', 'Details', 'Verify', 'Review', 'Complete'],
}) {
  return (
    <section className="w-full rounded flex items-center justify-between space-x-2">
      {Array(allSteps)
        .fill('')
        .map((_, i) => {
          const step = i + 1;
          return (
            <div key={i} className="w-full">
              <div
                className={`w-full h-1 ${
                  step < currentStep
                    ? 'bg-yellow-500'
                    : `${
                        step == currentStep
                          ? 'bg-yellow-500 animate-pulse '
                          : 'bg-white bg-opacity-20'
                      }`
                } relative`}
              >
                {step < currentStep && (
                  <div className="w-5 h-5 bg-yellow-600 text-white absolute inset-y-0 m-auto right-0 rounded-full flex items-center justify-center text-xs">
                    ✓
                  </div>
                )}

                {step == currentStep && (
                  <div className="w-2 h-2 bg-yellow-500 ring-4 absolute inset-y-0 m-auto right-0 rounded-full" />
                )}
              </div>
              <div
                className={`${
                  step <= currentStep
                    ? `${
                        step == currentStep
                          ? 'text-yellow-500 animate-pulse'
                          : 'text-green-500'
                      }`
                    : 'text-gray-500'
                } flex items-center`}
              >
                <span>{stepNames[i]}</span>
              </div>
            </div>
          );
        })}
    </section>
  );
}
