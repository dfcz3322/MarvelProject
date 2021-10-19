import { IMarvelEntityResponse } from '../interface/interface';
interface ISetCharacters {
  type: string;
  payload: IMarvelEntityResponse[];
}
interface ISetSearchQuery {
  type: string;
  payload: string;
}

interface IGetHeroes {
  type: string;
  payload: string;
}

export const SET_CHARACTERS = 'SET_CHARACTERS';
export const GET_HEROES = 'GET_HEROES';
export const SET_HEROES_ERROR = 'SET_HEROES_ERROR';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_IS_LOADING = 'SET_IS_LOADING'


export const setCharacters = (characters: IMarvelEntityResponse[]): ISetCharacters => {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  };
};

export const getHeroes = (searchQuery: string): IGetHeroes => {
  return {
    type: GET_HEROES,
    payload: searchQuery,
  };
};

export const setHeroesError = (): { type: string } => {
  return {
    type: SET_HEROES_ERROR,
  };
};

export const setSearchQuery = (searchQuery: string): ISetSearchQuery => {
  return {
    type: SET_SEARCH_QUERY,
    payload: searchQuery,
  };
};

export const setIsLoading = (isLoading: boolean): { type: string; payload: boolean } => {
  return {
      type: SET_IS_LOADING,
      payload: isLoading,
  }
}
