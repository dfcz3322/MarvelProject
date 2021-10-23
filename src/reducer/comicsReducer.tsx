import { GET_COMICS_SUCCESS, GET_COMICS_ERROR, SET_IS_LOADING } from '../actions/comics';
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
    case GET_COMICS_SUCCESS:
      return { ...state, comics: action.payload as IMarvelEntityResponse[], hasError: false, isLoading: false };
    case GET_COMICS_ERROR:
      return { ...state, comics: [], hasError: true, isLoading: false };
    case SET_IS_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
