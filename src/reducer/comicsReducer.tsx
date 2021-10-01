import { IMarvelEntityResponse } from "../interface/interface";

export interface IComicsReduxState {
    comics: IMarvelEntityResponse[];
}

const initialComics: IComicsReduxState = {
    comics: []
};

export const comics = (state: IComicsReduxState = initialComics, action: { type: string, payload: unknown }): IComicsReduxState => {
    switch(action.type) {
        case 'comics/setComics':
            return {...state, comics: action.payload as IMarvelEntityResponse[] }
        default: 
            return state;
    }
}