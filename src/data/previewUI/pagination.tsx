import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';

const paginationUI: componentTypes[] = [];
export default function Pagination() {
  return (
    <ShowDesigns
      title="Stack-Tailwind - Pagination"
      components={paginationUI}
    />
  );
}
