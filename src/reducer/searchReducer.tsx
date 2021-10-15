import { SET_CHARACTERS } from '../actions/search';
import { IMarvelEntityResponse } from '../interface/interface';

export interface ISearchReduxState {
  characters: IMarvelEntityResponse[];
}
type SearchActionPayload = IMarvelEntityResponse[] | string;

const initialSearch: ISearchReduxState = {
  characters: [],
};

export const search = (
  state: ISearchReduxState = initialSearch,
  action: { type: string; payload: SearchActionPayload }
): ISearchReduxState => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, characters: action.payload as IMarvelEntityResponse[] };
    default:
      return state;
  }
};
