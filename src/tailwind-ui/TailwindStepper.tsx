import React, { useState, useEffect, useRef } from 'react';

export default function TailwindStepper({ allSteps, currentStep, stepNames }) {
  const [stepperSteps, setStep] = useState([]);
  const stepsStateRef = useRef();
  
  const steps = Array(allSteps)
    .fill('')
    .map((_, i) => {
      return i + 1;
    });

  useEffect(() => {
    const stepsState = steps.map((_, index) => {
      const stepObj: any = {};
      stepObj.description = stepNames[index];
      stepObj.completed = false;
      stepObj.highlighted = index === 0 ? true : false;
      stepObj.selected = index === 0 ? true : false;
      return stepObj;
    });

    stepsStateRef.current = stepsState;
    const currentSteps = updateStep(currentStep - 1, stepsState);
    setStep(currentSteps);
  }, []);

  useEffect(() => {
    const currentSteps = updateStep(currentStep - 1, stepsStateRef.current);
    setStep(currentSteps);
  }, [currentStep]);

  function updateStep(stepNumber, steps) {
    const newSteps = [...steps];
    let stepCounter = 0;

    while (stepCounter < newSteps.length) {
      //current step
      if (stepCounter === stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: true,
          selected: true,
          completed: false,
        };
        stepCounter++;
      }
      // Past step
      else if (stepCounter < stepNumber) {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: true,
          completed: true,
        };
        stepCounter++;
      }

      // Future steps
      else {
        newSteps[stepCounter] = {
          ...newSteps[stepCounter],
          highlighted: false,
          selected: false,
          completed: false,
        };
        stepCounter++;
      }
    }
    return newSteps;
  }

  const stepsDisplay = stepperSteps.map((step, index) => {
    return (
      <div
        key={index}
        className={`
          ${
            index !== stepperSteps.length - 1
              ? 'w-full flex items-center'
              : 'flex items-center'
          }
        `}
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${
              step.selected ? 'bg-red-600 text-blue-200 font-bold' : ''
            } ${step.completed && 'bg-green-500'}`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute -bottom-5 text-center w-32 md:text-sm text-xs font-medium uppercase ${
              step.highlighted ? 'text-white' : 'text-gray-400'
            } ${ step.completed && 'text-green-500' }`}
          >
            {step.description}
          </div>
        </div>

        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 "></div>
      </div>
    );
  });

  return (
    <div className="sm:mx-auto mx-8 mb-12 flex justify-between items-center md:w-4/5 sm:w-full">
      {stepsDisplay}
    </div>
  );
}
