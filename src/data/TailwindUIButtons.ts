import componentTypes from 'types/componentTypes';
import Dark from 'tailwind-ui/Buttons/Dark';
import DarkOutline from 'tailwind-ui/Buttons/DarkOutline';
import Light from 'tailwind-ui/Buttons/Light';
import LightOutline from 'tailwind-ui/Buttons/LightOutline';
import LightOutlineEffect from 'tailwind-ui/Buttons/LightOutlineEffect';
import DarkOutlineEffect from 'tailwind-ui/Buttons/DarkOutlineEffect';

const TailwindUIButtons: componentTypes[] = [
  { title: 'Light', Component: Light },
  { title: 'Light Outline', Component: LightOutline },
  { title: 'Light Outline & Effect', Component: LightOutlineEffect },
  { title: 'Dark', Component: Dark, parentLight: true },
  { title: 'Dark Outline', Component: DarkOutline, parentLight: true },
  {
    title: 'Dark Outline & Effect',
    Component: DarkOutlineEffect,
    parentLight: true,
  },
];

export default TailwindUIButtons;
