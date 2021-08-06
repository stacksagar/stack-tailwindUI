import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';
// UI
import CircleStepperWithText from 'public/designs/Steppers/CircleStepperWithText';
import PanelsStepper from 'public/designs/Steppers/PanelsStepper';
import VerticalCircleStepper from 'public/designs/Steppers/VerticalCircleStepper';
import CircleStepper from 'public/designs/Steppers/CircleStepper';
import SquareStepper from 'public/designs/Steppers/SquareStepper';
import StandardStepper from 'public/designs/Steppers/StandardStepper';
import BulletStepper from 'public/designs/Steppers/BulletStepper';
import BulletStepperWithText from 'public/designs/Steppers/BulletStepperWithText';
import PanelsStepperLight from 'public/designs/Steppers/PanelsStepperLight';
import CircleStepperLight from 'public/designs/Steppers/CircleStepperLight';
import StandardStepperLight from 'public/designs/Steppers/StandardStepperLight';
import VerticalCircleStepperLight from 'public/designs/Steppers/VerticalCircleStepperLight';
import BulletStepperLight from 'public/designs/Steppers/BulletStepperLight';
import BulletStepperWithTextLight from 'public/designs/Steppers/BulletStepperWithTextLight';

const steppersUI: componentTypes[] = [
  {
    title: 'Standard Stepper',
    Component: StandardStepper,
  },
  {
    title: 'Panels Stepper',
    Component: PanelsStepper,
  },
  {
    title: 'Circle Stepper',
    Component: CircleStepper,
  },

  {
    title: 'Vertical Circle Stepper',
    Component: VerticalCircleStepper,
  },
  {
    title: 'Bullet Stepper',
    Component: BulletStepper,
  },
  {
    title: 'Bullet Stepper With Text',
    Component: BulletStepperWithText,
  },

  {
    title: 'Standard Stepper Light',
    Component: StandardStepperLight,
    parentLight: true,
  },
  {
    title: 'Panels Stepper Light',
    Component: PanelsStepperLight,
    parentLight: true,
  },
  {
    title: 'Circle Stepper Light',
    Component: CircleStepperLight,
    parentLight: true,
  },
  {
    title: 'Vertical Circle Light',
    Component: VerticalCircleStepperLight,
    parentLight: true,
  },
  {
    title: 'Bullet Stepper Light',
    Component: BulletStepperLight,
    parentLight: true,
  },
  {
    title: 'Bullet With Text Light',
    Component: BulletStepperWithTextLight,
    parentLight: true,
  },

  {
    title: 'Square Stepper',
    Component: SquareStepper,
  },
  {
    title: 'Circle Stepper With Text',
    Component: CircleStepperWithText,
  },
]; 
export default function Steppers() {
  return (
    <ShowDesigns title="Stack-TailwindUI - Steppers" components={steppersUI} />
  );
}
