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
    case 'comics/setComics':
      return { ...state, comics: action.payload as IMarvelEntityResponse[], hasError: false };
    case 'comics/setComicsError':
      return { ...state, comics: [], hasError: true };
      case 'SET_IS_LOADING':
      return {...state, isLoading: action.payload as boolean };
    default:
      return state;
  }
};
