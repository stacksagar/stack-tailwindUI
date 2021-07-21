import InputWithCurrency from 'tailwind-ui/Inputs/InputWithCurrency';
import InputWithoutCurrency from 'tailwind-ui/Inputs/InputWithoutCurrency';
import componentTypes from 'types/componentTypes';

const TailwindUIInputs: componentTypes[] = [
  { title: 'Input With Single Icon', Component: InputWithoutCurrency },
  { title: 'Input With Multile Icon Selector', Component: InputWithCurrency },
];

export default TailwindUIInputs;