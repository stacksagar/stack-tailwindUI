export default function PanelsStepper({
  // this is 👇 initial Value, You have to provide all as a props!
  // stepNames is optional but it's should be for good looking
  // allSteps and currentStep is must required!
  allSteps = 5,
  currentStep = 3,
  stepNames = ['Info', 'Details', 'Review', 'Verify', 'Complete'],
}) {
  const getColorValue = (action) => {
    if (currentStep == action.step) {
      return action.value + '-yellow-400 animate-pulse ';
    }
    if (action.step % 2 == 0) {
      return `${action.value}-green-700`;
    } else {
      return `${action.value}-green-600`;
    }
  };

  const getColor = (step, value) => {
    return getColorValue({ step, value });
  };

  return (
    <section className="w-full">
      <div className="rounded-full w-full flex justify-between overflow-hidden bg-gray-800">
        {Array(allSteps)
          .fill('')
          .map((_, i) => {
            const step = i + 1;
            return (
              <div
                key={i}
                style={{
                  borderBottomWidth: `1.6px`,
                  borderTopWidth: `1.6px`,
                  borderRightWidth: `${step == allSteps && '1.6px'}`,
                  borderLeftWidth: `${step == 1 && '1.6px'}`,
                }}
                className={`${i == 0 && 'rounded-l-full'} ${
                  step == allSteps && 'rounded-r-full'
                } ${
                  step <= currentStep
                    ? getColor(step, 'border')
                    : 'border-gray-700'
                } relative py-5 w-full ${
                  step < currentStep && getColor(step, 'bg')
                }`}
              >
                <span className="flex text-xs lg:text-sm items-center justify-center text-white fonr-semibold absolute inset-0 m-auto z-30">
                  <small
                    className={`sm:text-sm ${
                      allSteps > 3 && 'hidden md:block'
                    }`}
                  >
                    {stepNames[i] || 'Info'}
                  </small>
                  {step < currentStep && (
                    <b className="ml-1 bg-white text-gray-900 fond-bold w-5 h-5 rounded-full flex items-center justify-center text-xs">
                      &#10003;
                    </b>
                  )}
                  {step == currentStep &&
                    Array(3)
                      .fill('')
                      .map((_, i) => (
                        <div
                          key={i}
                          style={{
                            animationDuration: `${
                              i == 0 ? '1s' : `${i == 1 ? '3s' : '5s'}`
                            } !important`,
                          }}
                          className={`${
                            i == 0
                              ? 'bg-yellow-400'
                              : `${i == 1 ? 'bg-yellow-500' : 'bg-pink-400'}`
                          } ml-0.5 w-1 h-1 -mb-2 rounded-full animate-bounce ${
                            i == 0
                              ? 'delay-200'
                              : `${i == 1 ? 'delay-500' : 'delay-1000'}`
                          } `}
                        />
                      ))}
                </span>

                {step !== allSteps && (
                  <div
                    className={`${
                      step < currentStep
                        ? getColor(step, 'bg')
                        : 'bg-transparent '
                    } ${
                      step <= currentStep
                        ? getColor(step, 'border')
                        : 'border-gray-700'
                    } w-12 h-12 p-5 absolute -right-3 inset-y-0 m-auto transform rotate-45 rounded-sm bg-transparent border-r-2 border-t-2 z-20`}
                  />
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
}
