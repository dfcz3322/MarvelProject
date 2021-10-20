import { Action, IMarvelEntityResponse } from '../interface/interface';

export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';
export const SET_IS_LOADING = 'SET_IS_LOADING'


export const getCharactersSuccess = (characters: IMarvelEntityResponse[]): Action<string, IMarvelEntityResponse[]> => {
  return {
    type: GET_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const getCharacters = (searchQuery: string): Action<string, string> => {
  return {
    type: GET_CHARACTERS,
    payload: searchQuery,
  };
};

export const getCharactersError = (): Action<string> => {
  return {
    type: GET_CHARACTERS_ERROR,
  };
};

export const setIsLoading = (isLoading: boolean): Action<string, boolean> => {
  return {
      type: SET_IS_LOADING,
      payload: isLoading,
  }
}
