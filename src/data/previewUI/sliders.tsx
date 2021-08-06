import HorizontalSlider from 'public/designs/Sliders/HorizontalSlider';
import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';

const slidersUI: componentTypes[] = [
  {
    title: 'Horizontal Product Slider',
    Component: HorizontalSlider,
  },
];
export default function Sliders() {
  return <ShowDesigns title="Stack-Tailwind - Inputs" components={slidersUI} />;
}
