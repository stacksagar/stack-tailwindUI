import StandardAccordion from 'src/components/designs/Accordion/StandardAccordion';
import StandardAccordionAll from 'src/components/designs/Accordion/StandardAccordionAll';
import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';

const accordionUI: componentTypes[] = [
  {
    title: 'Standard Accordion (1 Open)',
    Component: StandardAccordion,
    filename: 'StandardAccordion.jsx',
  },
  {
    title: 'Standard Accordion (All Open)',
    Component: StandardAccordionAll,
    filename: 'StandardAccordionAll.jsx',
  },
];

accordionUI.forEach((item) => {
  item.category = 'Accordion';
});

export default function Acordion() {
  return (
    <ShowDesigns title="Stack-Tailwind - Accordion" components={accordionUI} />
  );
}
