import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';

const progressUI: componentTypes[] = [];
progressUI.forEach((item) => {
  item.category = 'Progress';
});
export default function Progress() {
  return (
    <ShowDesigns title="Stack-Tailwind - Progress" components={progressUI} />
  );
}
