import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { Hero } from '../components/hero/hero';
import { SearchBar } from '../components/searchBar/searchBar';
import { SearchLogo } from '../components/searchLogo/searchLogo';
import { IMarvelEntityResponse } from '../interface/interface';
import { LoadingOverlay } from '../components/loadingOverlay/loadingOverlay';
import { connect } from 'react-redux';
import { IRootStore } from '../reducer';
import { Dispatch } from 'redux';
import { getHeroes, setCharacters, setSearchQuery } from '../actions/search';

interface ISearchState {
  isLoading: boolean;
}

interface ISearchProps extends RouteChildrenProps {
  characters: IMarvelEntityResponse[];
  searchQuery: string;
  setCharacters: (characters: IMarvelEntityResponse[]) => void;
  setSearchQuery: (searchQuery: string) => void;
  getHeroes: (searchQuery: string) => void;
  hasError: boolean;
  isLoading: boolean;
}

class Search extends React.Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = { isLoading: false, searchQuery: "" };
  }

  componentDidMount(): void {
    const searchParam = new URLSearchParams(this.props.location.search).get('search');
    if (searchParam?.length) {
      this.props.setSearchQuery(searchParam);
    }
    this.props.getHeroes(searchParam as string);
  }
  onSearch = (query: string): void => {
    this.props.history.push({
      pathname: '/',
      search: `?search=${query}`,
    });
    this.props.getHeroes(query);
  };

  onQueryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.setSearchQuery(event.target.value);
  };

  render(): JSX.Element {
    return (
      <>
        {this.props.isLoading ? <LoadingOverlay /> : null}

  render(): JSX.Element {
    return (
      <>
        {this.state.isLoading ? <LoadingOverlay /> : null}

        <SearchLogo></SearchLogo>
        <SearchBar
          onSearch={() => this.onSearch(this.state.searchQuery)}
          onQueryChange={this.onQueryChange}
          currentQuery={this.state.searchQuery}
        ></SearchBar>
        {this.props.characters.length ? this.props.characters.map((character) => {
          return <Hero key={character.id} character={character}></Hero>;
        }) : <p className="error-message">HERO COULD NOT BE FOUND</p>}
        
      </>
    );
  }
}

const mapStateToProps = (store: IRootStore) => {
  return {
    characters: store.search.characters,
    searchQuery: store.search.searchQuery,
    hasError: store.search.hasError,
    isLoading: store.search.isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getHeroes: (searchQuery: string) => dispatch(getHeroes(searchQuery)),
    setCharacters: (characters: IMarvelEntityResponse[]) => dispatch(setCharacters(characters)),
    setSearchQuery: (searchQuery: string) => dispatch(setSearchQuery(searchQuery)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
