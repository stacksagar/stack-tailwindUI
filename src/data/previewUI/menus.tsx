import componentTypes from 'src/types/componentTypes';
import ShowDesigns from '../../components/ShowDesigns';

const menusUI: componentTypes[] = [];
menusUI.forEach((item) => {
  item.category = 'Menus';
});
export default function Menus() {
  return <ShowDesigns title="Stack-Tailwind - Menus" components={menusUI} />;
}
