import { SET_COMICS } from "../actions/comics";
import { IMarvelEntityResponse } from "../interface/interface";

export interface IComicsReduxState {
    comics: IMarvelEntityResponse[];
}

const initialComics: IComicsReduxState = {
    comics: []
};

export const comics = (state: IComicsReduxState = initialComics, action: { type: string, payload: IMarvelEntityResponse[] }): IComicsReduxState => {
    switch(action.type) {
        case SET_COMICS:
            return {...state, comics: action.payload }
        default: 
            return state;
    }
}