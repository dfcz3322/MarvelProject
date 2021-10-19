import { SET_CHARACTERS, SET_HEROES_ERROR, SET_IS_LOADING, SET_SEARCH_QUERY } from '../actions/search';
import { IMarvelEntityResponse } from '../interface/interface';

export interface ISearchReduxState {
  characters: IMarvelEntityResponse[];
  searchQuery: string;
  hasError: boolean;
  isLoading: boolean;
}
type SearchActionPayload = IMarvelEntityResponse[] | string | boolean;

const initialSearch: ISearchReduxState = {
  characters: [],
  searchQuery: '',
  hasError: false,
  isLoading: false,
};

export const search = (
  state: ISearchReduxState = initialSearch,
  action: { type: string; payload: SearchActionPayload }
): ISearchReduxState => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.payload as IMarvelEntityResponse[], hasError: false };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload as string };
    case SET_HEROES_ERROR:
      return { ...state, characters: [], hasError: true };
    case SET_IS_LOADING:
      return {...state, isLoading: action.payload as boolean };
    default:
      return state;
  }
};
