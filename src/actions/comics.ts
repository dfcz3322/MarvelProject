import { IMarvelEntityResponse } from "../interface/interface";
 export const SET_COMICS = 'COMICS/SET_COMICS';

export const setComics = (comics: IMarvelEntityResponse[]): {type: string, payload: IMarvelEntityResponse[]} => {
    return {
        type: SET_COMICS,
        payload: comics
    }
};


