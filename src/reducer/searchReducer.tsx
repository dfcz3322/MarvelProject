import { IMarvelEntityResponse } from "../interface/interface";

export interface ISearchReduxState {
    characters: IMarvelEntityResponse[];
    searchQuery: string;
}

const initialSearch: ISearchReduxState = {
    characters: [],
    searchQuery: ""
};


export const search = (state: ISearchReduxState = initialSearch, action: { type: string, payload: unknown }): ISearchReduxState => {
    switch(action.type) {
        case 'search/setCharacters':
            return {...state, characters: action.payload as IMarvelEntityResponse[] }
        case 'search/setSearchQuery':
            return {...state, searchQuery: action.payload as string }
        default: 
            return state;
    }
}