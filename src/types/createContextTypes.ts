export interface othersStateTypes {
  sidebarShow: boolean;
  favorites: object[];
  message: string;
}

// Main Context API Types
export interface MainStateTypes {
  sidebarShow?: boolean;
  public?: any;
  p?: any;
}
export interface MainActionTypes {
  type: string;
  payload?: any;
}
export type MainDispatchTypes = ({ type, payload }: MainActionTypes) => void;

export interface MainContextTypes {
  state?: MainStateTypes;
  dispatch?: MainDispatchTypes;
}
