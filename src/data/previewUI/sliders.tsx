import HorizontalSlider from 'src/components/designs/Sliders/HorizontalSlider';
import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';

const slidersUI: componentTypes[] = [
  {
    title: 'Horizontal Product Slider',
    Component: HorizontalSlider,
    filename: 'HorizontalSlider.jsx',
  },
];
slidersUI.forEach((item) => {
  item.category = 'Sliders';
});
export default function Sliders() {
  return <ShowDesigns title="Stack-Tailwind - Inputs" components={slidersUI} />;
}
