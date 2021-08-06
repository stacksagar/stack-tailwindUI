import ShowDesigns from '../../components/ShowDesigns';
import componentTypes from 'src/types/componentTypes';
import TailwindComponent from 'public/designs/Accordion/StandardAccordion';

const othersUI: componentTypes[] = [];

export default function Others() {
  return <ShowDesigns title="Stack-Tailwind - Inputs" components={othersUI} />;
}
