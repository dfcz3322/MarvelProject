import { IMarvelEntityResponse } from '../interface/interface';


export const SET_COMICS = 'COMICS/SET_COMICS';
export const GET_COMICS = 'GET_COMICS';
export const SET_COMICS_ERROR = 'SET_COMICS_ERROR';
export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setComics = (comics: IMarvelEntityResponse[]): { type: string; payload: IMarvelEntityResponse[] } => {
  return {
    type: SET_COMICS,
    payload: comics,
  };
};

export const getComics = (id: string): { type: string; payload: string } => {
  return {
    type: GET_COMICS,
    payload: id,
  };
};

export const setComicsError = (): { type: string } => {
  return {
    type: SET_COMICS_ERROR,
  };
};

export const setIsLoading = (isLoading: boolean): { type: string; payload: boolean } => {
    return {
        type: SET_IS_LOADING,
        payload: isLoading,
    }
}
