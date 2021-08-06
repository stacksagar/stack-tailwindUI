import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { MainContext } from 'context/mainContext';
import { useContext } from 'react';
import { MainContextTypes } from 'src/types/createContextTypes';

export default function LeftBarHideIcon() {
  const { state, dispatch } = useContext<MainContextTypes>(MainContext);
  // const { sidebarShow } = state;
  return (
    <div
      onClick={() => dispatch({ type: 'hide_sidebar', payload: false })}
      className={`w-7 h-7 p-1 rounded-full bg-white hover:bg-gray-200 text-gray-700 cursor-pointer lg:hidden block `}
    >
      <ChevronLeftIcon className="w-full h-full" />
    </div>
  );
}
