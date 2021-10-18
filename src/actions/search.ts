import { IMarvelEntityResponse } from '../interface/interface';
interface ISetCharacters {
  type: string;
  payload: IMarvelEntityResponse[];
}
export const SET_CHARACTERS = 'SET_CHARACTERS';

export const setCharacters = (characters: IMarvelEntityResponse[]): ISetCharacters => {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  };
};
