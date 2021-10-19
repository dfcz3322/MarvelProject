import { SET_COMICS, SET_COMICS_ERROR, SET_IS_LOADING } from '../actions/comics';
import { IMarvelEntityResponse } from '../interface/interface';

export interface IComicsReduxState {
  comics: IMarvelEntityResponse[];
  hasError: boolean;
  isLoading: boolean;
}

const initialComics: IComicsReduxState = {
  comics: [],
  hasError: false,
  isLoading: false,
};

export const comics = (
  state: IComicsReduxState = initialComics,
  action: { type: string; payload: unknown }
): IComicsReduxState => {
  switch (action.type) {
    case SET_COMICS:
      return { ...state, comics: action.payload as IMarvelEntityResponse[], hasError: false };
    case SET_COMICS_ERROR:
      return { ...state, comics: [], hasError: true };
      case SET_IS_LOADING:
      return {...state, isLoading: action.payload as boolean };
    default:
      return state;
  }
};
