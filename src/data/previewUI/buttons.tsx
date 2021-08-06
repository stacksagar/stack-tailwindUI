import ShowDesigns from '../../components/ShowDesigns';
import componentTypes from 'src/types/componentTypes';
import Light from 'public/designs/Buttons/Light';
import LightOutline from 'public/designs/Buttons/LightOutline';
import LightOutlineEffect from 'public/designs/Buttons/LightOutlineEffect';
import GradientLight from 'public/designs/Buttons/GradientLight';
import GradientLightOutLine from 'public/designs/Buttons/GradientLightOutline';
import SmartButton from 'public/designs/Buttons/SmartButton';

const buttonsUI: componentTypes[] = [
  {
    title: 'Smart Button',
    Component: SmartButton
  },
  {
    title: 'Gradient Light',
    Component: GradientLight,
  },
  {
    title: 'Gradient Light Outline',
    Component: GradientLightOutLine,
  },
  { title: 'Light', Component: Light },
  { title: 'Light Outline', Component: LightOutline },
  {
    title: 'Light Outline & Effect',
    Component: LightOutlineEffect,
  },
];

export default function Buttons() {
  return (
    <ShowDesigns title="Stack-Tailwind - Buttons" components={buttonsUI} />
  );
}
