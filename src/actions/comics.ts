import { IMarvelEntityResponse } from "../interface/interface";

export const setComics = (comics: IMarvelEntityResponse[]): {type: string, payload: IMarvelEntityResponse[]} => {
    return {
        type: 'comics/setComics',
        payload: comics
    }
};

export const getComics = (id: string): {type: string, payload: string} => {
    return {
        type: 'comics/getComics',
        payload: id
    }
};

export const setComicsError = (): { type: string } => {
    return {
        type: 'comics/setComicsError'
    }
};

