import { Action, IMarvelEntityResponse } from '../interface/interface';

export const GET_COMICS_SUCCESS = 'GET_COMICS_SUCCESS';
export const GET_COMICS = 'GET_COMICS';
export const GET_COMICS_ERROR = 'GET_COMICS_ERROR';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setComics = (comics: IMarvelEntityResponse[]): Action<string, IMarvelEntityResponse[]> => {
  return {
    type: GET_COMICS_SUCCESS,
    payload: comics,
  };
};

export const getComics = (id: string): Action<string, string> => {
  return {
    type: GET_COMICS,
    payload: id,
  };
};

export const setComicsError = (): Action<string> => {
  return {
    type: GET_COMICS_ERROR,
  };
};

export const setIsLoading = (): Action<string> => {
  return {
    type: SET_IS_LOADING,
  };
};
