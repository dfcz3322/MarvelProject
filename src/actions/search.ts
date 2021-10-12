import { IMarvelEntityResponse } from "../interface/interface";
interface ISetCharacters {
    type: string,
    payload: IMarvelEntityResponse[]
}
interface ISetSearchQuery {
    type: string,
    payload: string
}

export const SET_CHARACTERS = 'SEARCH/SET_CHARACTERS';
export const SET_SEARCH_QUERY = 'SEARCH/SET_SEARCH-QUERY';

export const setCharacters = (characters: IMarvelEntityResponse[]): ISetCharacters => {
    return {
        type: SET_CHARACTERS,
        payload: characters
    }
};

export const setSearchQuery = (searchQuery: string): ISetSearchQuery => {
    return {
        type: SET_SEARCH_QUERY,
        payload: searchQuery
    }
};
