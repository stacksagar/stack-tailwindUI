import ShowDesigns from '../../components/ShowDesigns';
import componentTypes from 'src/types/componentTypes';
import InputWithCurrency from 'src/components/designs/Inputs/InputWithCurrency';
import InputWithDollerIcon from 'src/components/designs/Inputs/InputWithDollerIcon';
import InputLabel from 'src/components/designs/Inputs/InputLabel';
import InputLabelIcon from 'src/components/designs/Inputs/InputLabelIcon';
import InputLabel2 from 'src/components/designs/Inputs/InputLabel2';
import InputLabelEffect from 'src/components/designs/Inputs/InputLabelEffect';
import UploadPhoto from 'src/components/designs/Inputs/UploadPhoto';

const inputsUI: componentTypes[] = [
  {
    title: 'Upload Photo',
    Component: UploadPhoto,
    filename: 'UploadPhoto.jsx',
  },
  {
    title: 'Input & Label Effect',
    Component: InputLabelEffect,
    filename: 'InputLabelEffect.jsx',
  },
  {
    title: 'With Multiple Currency Change',
    Component: InputWithCurrency,
    filename: 'InputWithCurrency.jsx',
  },
  {
    title: 'With Doller Icon',
    Component: InputWithDollerIcon,
    filename: 'InputWithDollerIcon.jsx',
  },
  {
    title: 'Input With Label',
    Component: InputLabel,
    filename: 'InputLabel.jsx',
  },
  {
    title: 'Input With Label - 2',
    Component: InputLabel2,
    filename: 'InputLabel2.jsx',
  },
  {
    title: 'Input & Label with ICON & Text',
    Component: InputLabelIcon,
    filename: 'InputLabelIcon.jsx',
  },
];
inputsUI.forEach((item) => {
  item.category = 'Inputs';
});
export default function Inputs() {
  return <ShowDesigns title="Stack-Tailwind - Inputs" components={inputsUI} />;
}
