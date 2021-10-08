import { IMarvelEntityResponse } from "../interface/interface";

export const setComics = (comics: IMarvelEntityResponse[]): {type: string, payload: IMarvelEntityResponse[]} => {
    return {
        type: 'comics/setComics',
        payload: comics
    }
};


