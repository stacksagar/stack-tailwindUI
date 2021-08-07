import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';
// UI
import CircleStepperWithText from 'src/components/designs/Steppers/CircleStepperWithText';
import PanelsStepper from 'src/components/designs/Steppers/PanelsStepper';
import VerticalCircleStepper from 'src/components/designs/Steppers/VerticalCircleStepper';
import CircleStepper from 'src/components/designs/Steppers/CircleStepper';
import SquareStepper from 'src/components/designs/Steppers/SquareStepper';
import StandardStepper from 'src/components/designs/Steppers/StandardStepper';
import BulletStepper from 'src/components/designs/Steppers/BulletStepper';
import BulletStepperWithText from 'src/components/designs/Steppers/BulletStepperWithText';
import PanelsStepperLight from 'src/components/designs/Steppers/PanelsStepperLight';
import CircleStepperLight from 'src/components/designs/Steppers/CircleStepperLight';
import StandardStepperLight from 'src/components/designs/Steppers/StandardStepperLight';
import VerticalCircleStepperLight from 'src/components/designs/Steppers/VerticalCircleStepperLight';
import BulletStepperLight from 'src/components/designs/Steppers/BulletStepperLight';
import BulletStepperWithTextLight from 'src/components/designs/Steppers/BulletStepperWithTextLight';

const steppersUI: componentTypes[] = [
  {
    title: 'Standard Stepper',
    Component: StandardStepper,
    filename: 'StandardStepper.jsx',
  },
  {
    title: 'Panels Stepper',
    Component: PanelsStepper,
    filename: 'PanelsStepper.jsx',
  },
  {
    title: 'Circle Stepper',
    Component: CircleStepper,
    filename: 'CircleStepper.jsx',
  },

  {
    title: 'Vertical Circle Stepper',
    Component: VerticalCircleStepper,
    filename: 'VerticalCircleStepper.jsx',
  },
  {
    title: 'Bullet Stepper',
    Component: BulletStepper,
    filename: 'BulletStepper.jsx',
  },
  {
    title: 'Bullet Stepper With Text',
    Component: BulletStepperWithText,
    filename: 'BulletStepperWithText.jsx',
  },

  {
    title: 'Standard Stepper Light',
    Component: StandardStepperLight,
    filename: 'StandardStepperLight.jsx',
    parentLight: true,
  },
  {
    title: 'Panels Stepper Light',
    Component: PanelsStepperLight,
    filename: 'PanelsStepperLight.jsx',
    parentLight: true,
  },
  {
    title: 'Circle Stepper Light',
    Component: CircleStepperLight,
    filename: 'CircleStepperLight.jsx',
    parentLight: true,
  },
  {
    title: 'Vertical Circle Light',
    Component: VerticalCircleStepperLight,
    filename: 'VerticalCircleStepperLight.jsx',
    parentLight: true,
  },
  {
    title: 'Bullet Stepper Light',
    Component: BulletStepperLight,
    filename: 'BulletStepperLight.jsx',
    parentLight: true,
  },
  {
    title: 'Bullet With Text Light',
    Component: BulletStepperWithTextLight,
    filename: 'BulletStepperWithTextLight.jsx',
    parentLight: true,
  },

  {
    title: 'Square Stepper',
    Component: SquareStepper,
    filename: 'SquareStepper.jsx',
  },
  {
    title: 'Circle Stepper With Text',
    Component: CircleStepperWithText,
    filename: 'CircleStepperWithText.jsx',
  },
];
steppersUI.forEach((item) => {
  item.category = 'Steppers';
});
export default function Steppers() {
  return (
    <ShowDesigns title="Stack-TailwindUI - Steppers" components={steppersUI} />
  );
}
