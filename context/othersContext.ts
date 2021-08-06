import { createContext } from 'react';
import { othersStateTypes } from '../src/types/createContextTypes';

export const othersState: othersStateTypes = {
  sidebarShow: false,
  favorites: [],
  message: 'initial message',
};

export const othersContext = createContext(othersState);