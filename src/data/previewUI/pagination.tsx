import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';

const paginationUI: componentTypes[] = [];
paginationUI.forEach((item) => {
  item.category = 'Pagination';
});
export default function Pagination() {
  return (
    <ShowDesigns
      title="Stack-Tailwind - Pagination"
      components={paginationUI}
    />
  );
}
