export default function BulletStepperLight({
  // this is 👇 initial Value, You have to provide all as a props!
  // allSteps and currentStep is must required
  allSteps = 5,
  currentStep = 3,
}) {
  return (
    <section className="flex items-center justify-between">
      <div className="flex space-x-2 items-center justify-center">
        <p className="italic text-gray-900 tracking-tighter mr-5">
          Step 3 of 5
        </p>
        {Array(allSteps)
          .fill('')
          .map((_, i) => {
            const step = i + 1;
            return (
              <div
                key={i}
                className={`bg-gray-500 border-2 p-1 ${
                  step == currentStep
                    ? 'bg-blue-500 p-0.5 ring-4 animate-pulse'
                    : 'bg-gray-500'
                } border-blue-400 rounded-full`}
              />
            );
          })}
      </div>
    </section>
  );
}
