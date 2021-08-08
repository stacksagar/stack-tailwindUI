import ShowDesigns from '../../components/ShowDesigns';
import componentTypes from 'src/types/componentTypes';
import Light from 'src/components/designs/Buttons/Light';
import LightOutline from 'src/components/designs/Buttons/LightOutline';
import LightOutlineEffect from 'src/components/designs/Buttons/LightOutlineEffect';
import GradientLight from 'src/components/designs/Buttons/GradientLight';
import GradientLightOutLine from 'src/components/designs/Buttons/GradientLightOutline';
import SmartButton from 'src/components/designs/Buttons/SmartButton';
import CircleButton from 'src/components/designs/Buttons/CircleButton';

const buttonsUI: componentTypes[] = [
  {
    title: 'Smart Button',
    Component: SmartButton,
    filename: 'SmartButton.jsx',
  },  {
    title: 'Circle Button',
    Component: CircleButton,
    filename: 'CircleButton.jsx',
  },
  {
    title: 'Gradient Light',
    Component: GradientLight,
    filename: 'GradientLight.jsx',
  },
  {
    title: 'Gradient Light Outline',
    Component: GradientLightOutLine,
    filename: 'GradientLightOutline.jsx',
  },
  { title: 'Light', Component: Light, filename: 'Light.jsx' },
  {
    title: 'Light Outline',
    Component: LightOutline,
    filename: 'LightOutline.jsx',
  },
  {
    title: 'Light Outline & Effect',
    Component: LightOutlineEffect,
    filename: 'LightOutlineEffect.jsx',
  },
];
buttonsUI.forEach((item) => {
  item.category = 'Buttons';
});
export default function Buttons() {
  return (
    <ShowDesigns title="Stack-Tailwind - Buttons" components={buttonsUI} />
  );
}
