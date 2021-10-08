import { IMarvelEntityResponse } from "../interface/interface";
interface ISetCharacters {
    type: string,
    payload: IMarvelEntityResponse[]
}
interface ISetSearchQuery {
    type: string,
    payload: string
}
export const setCharacters = (characters: IMarvelEntityResponse[]): ISetCharacters => {
    return {
        type: 'search/setCharacters',
        payload: characters
    }
};

export const setSearchQuery = (searchQuery: string): ISetSearchQuery => {
    return {
        type: 'search/setCharacters',
        payload: searchQuery
    }
};
