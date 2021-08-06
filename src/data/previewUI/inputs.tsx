import ShowDesigns from '../../components/ShowDesigns';
import componentTypes from 'src/types/componentTypes';
import InputWithCurrency from 'public/designs/Inputs/InputWithCurrency';
import InputWithDollerIcon from 'public/designs/Inputs/InputWithDollerIcon';
import InputLabel from 'public/designs/Inputs/InputLabel';
import InputLabelIcon from 'public/designs/Inputs/InputLabelIcon';
import InputLabel2 from 'public/designs/Inputs/InputLabel2';
import InputLabelEffect from 'public/designs/Inputs/InputLabelEffect';
import UploadPhoto from 'public/designs/Inputs/UploadPhoto';

const inputsUI: componentTypes[] = [
  {
    title: 'Upload Photo',
    Component: UploadPhoto,
  },
  {
    title: 'Input & Label Effect',
    Component: InputLabelEffect,
  },
  {
    title: 'With Multiple Currency Change',
    Component: InputWithCurrency,
  },
  {
    title: 'With Doller Icon',
    Component: InputWithDollerIcon,
  },
  {
    title: 'Input With Label',
    Component: InputLabel,
  },
  {
    title: 'Input With Label - 2',
    Component: InputLabel2,
  },
  {
    title: 'Input & Label with ICON & Text',
    Component: InputLabelIcon,
  },
];

export default function Inputs() {
  return <ShowDesigns title="Stack-Tailwind - Inputs" components={inputsUI} />;
}
