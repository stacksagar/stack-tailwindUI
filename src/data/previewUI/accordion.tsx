import StandardAccordion from 'public/designs/Accordion/StandardAccordion';
import StandardAccordionAll from 'public/designs/Accordion/StandardAccordionAll';
import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';

const accordionUI: componentTypes[] = [
  { title: 'Standard Accordion (1 Open)', Component: StandardAccordion },
  { title: 'Standard Accordion (All Open)', Component: StandardAccordionAll },
];
export default function Acordion() {
  return (
    <ShowDesigns title="Stack-Tailwind - Accordion" components={accordionUI} />
  );
}
