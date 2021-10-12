import { SET_CHARACTERS, SET_SEARCH_QUERY } from '../actions/search';
import { IMarvelEntityResponse } from '../interface/interface';

export interface ISearchReduxState {
  characters: IMarvelEntityResponse[];
  searchQuery: string;
}
type SearchActionPayload = IMarvelEntityResponse[] | string;

const initialSearch: ISearchReduxState = {
  characters: [],
  searchQuery: '',
};

export const search = (
  state: ISearchReduxState = initialSearch,
  action: { type: string; payload: SearchActionPayload }
): ISearchReduxState => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.payload as IMarvelEntityResponse[] };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload as string };
    default:
      return state;
  }
};
