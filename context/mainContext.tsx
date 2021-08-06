import React from 'react';
import { createContext, useReducer } from 'react';
import { MainActionTypes, MainStateTypes } from 'src/types/createContextTypes';

// Initial State
const mainState: MainStateTypes = {
  sidebarShow: true,
};

const mainReducer = (state: MainStateTypes, action: MainActionTypes) => {
  switch (action.type) {
    case 'hide_sidebar':
      return { ...state, sidebarShow: false };

    case 'open_sidebar':
      return { ...state, sidebarShow: true };

    default:
      return state;
  }
};

const MainContext = createContext<object>(mainReducer);

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer<any>(mainReducer, mainState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };