import { IMarvelEntityResponse } from '../interface/interface';
export const SET_COMICS = 'COMICS/SET_COMICS';

export const setComics = (comics: IMarvelEntityResponse[]): { type: string; payload: IMarvelEntityResponse[] } => {
  return {
    type: SET_COMICS,
    payload: comics,
  };
};

export const getComics = (id: string): { type: string; payload: string } => {
  return {
    type: 'comics/getComics',
    payload: id,
  };
};

export const setComicsError = (): { type: string } => {
  return {
    type: 'comics/setComicsError',
  };
};

export const setIsLoading = (isLoading: boolean): { type: string; payload: boolean } => {
    return {
        type: 'SET_IS_LOADING',
        payload: isLoading,
    }
}
