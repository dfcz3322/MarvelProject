import { GET_CHARACTERS_SUCCESS, GET_CHARACTERS_ERROR, SET_IS_LOADING } from '../actions/search';
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
    case GET_CHARACTERS_SUCCESS:
      return { ...state, characters: action.payload as IMarvelEntityResponse[], hasError: false };
    case GET_CHARACTERS_ERROR:
      return { ...state, characters: [], hasError: true };
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload as boolean };
    default:
      return state;
  }
};
