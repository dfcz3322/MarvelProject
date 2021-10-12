import { IMarvelEntityResponse } from "../interface/interface";
interface ISetCharacters {
    type: string,
    payload: IMarvelEntityResponse[]
}
interface ISetSearchQuery {
    type: string,
    payload: string
}
interface IGetHeroes {
    type: string,
    payload: string
}
export const setCharacters = (characters: IMarvelEntityResponse[]): ISetCharacters => {
    return {
        type: 'search/setCharacters',
        payload: characters
    }
};

export const getHeroes = (searchQuery: string): IGetHeroes => {
    return {
        type: 'search/getHeroes',
        payload: searchQuery
    }
};

export const setHeroesError = (): { type: string } => {
    return {
        type: 'search/setHeroesError'
    }
};


export const setSearchQuery = (searchQuery: string): ISetSearchQuery => {
    return {
        type: 'search/setSearchQuery',
        payload: searchQuery
    }
};
