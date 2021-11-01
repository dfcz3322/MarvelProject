import React, { useState, useEffect } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Hero } from '../components/hero/hero';
import { SearchBar } from '../components/searchBar/searchBar';
import { SearchLogo } from '../components/searchLogo/searchLogo';
import { IMarvelEntityResponse } from '../interface/interface';
import { LoadingOverlay } from '../components/loadingOverlay/loadingOverlay';
import { connect, useDispatch } from 'react-redux';
import { IRootStore } from '../reducer';
import { Dispatch } from 'redux';
import { getCharacters, getCharactersSuccess, GET_CHARACTERS } from '../actions/search';
import { useAppSelector } from '../hooks';

interface ISearchProps extends RouteChildrenProps {
  characters: IMarvelEntityResponse[];
  setCharacters: (characters: IMarvelEntityResponse[]) => void;
  getHeroes: (searchQuery: string) => void;
  hasError: boolean;
  isLoading: boolean;
}

function Search(props: ISearchProps) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const characters = useAppSelector((store) => store.search.characters);
  const hasError = useAppSelector((store) => store.search.hasError);
  const isLoading = useAppSelector((store) => store.search.isLoading);

  useEffect(() => {
    const searchParam = new URLSearchParams(props.location.search).get('search');
    if (searchParam?.length) {
      setSearchQuery(searchParam);
    }
    dispatch(getCharacters(searchQuery));
  }, []);

  const onSearch = (query: string): void => {
    props.history.push({
      pathname: '/',
      search: `?search=${query}`,
    });
    dispatch(getCharacters(searchQuery));
  };

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };
  const errorMessage = "HERO COULD NOT BE FOUND";

  return (
    <>
      {isLoading ? <LoadingOverlay /> : null}

      <SearchLogo/>
      <SearchBar
        onSearch={() => onSearch(searchQuery)}
        onQueryChange={onQueryChange}
        currentQuery={searchQuery}
      ></SearchBar>
      {characters.length ? (
        characters.map((character) => {
          return <Hero key={character.id} character={character}></Hero>;
        })
      ) : hasError ? (
        <p className="error-message">{errorMessage}</p>
      ) : null}
    </>
  );
}

export default Search;
