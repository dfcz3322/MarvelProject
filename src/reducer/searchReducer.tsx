import { IMarvelEntityResponse } from "../interface/interface";

export interface ISearchReduxState {
    characters: IMarvelEntityResponse[];
    searchQuery: string;
    hasError: boolean;
}

const initialSearch: ISearchReduxState = {
    characters: [],
    searchQuery: "",
    hasError: false
};


export const search = (state: ISearchReduxState = initialSearch, action: { type: string, payload: unknown }): ISearchReduxState => {
    switch(action.type) {
        case 'search/setCharacters':
            return {...state, characters: action.payload as IMarvelEntityResponse[], hasError: false }
        case 'search/setSearchQuery':
            return {...state, searchQuery: action.payload as string }
        case 'search/setHeroesError':
            return {...state,characters: [], hasError: true}
        default: 
            return state;
    }
}