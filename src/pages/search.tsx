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
import { getCharacters, getCharactersSuccess } from '../actions/search';

interface ISearchState {
    searchQuery: string;
}
interface ISearchProps extends RouteChildrenProps {
  characters: IMarvelEntityResponse[];
  setCharacters: (characters: IMarvelEntityResponse[]) => void;
  getHeroes: (searchQuery: string) => void;
  hasError: boolean;
  isLoading: boolean;
}

class Search extends React.Component<ISearchProps, ISearchState> {
    constructor(props: ISearchProps) {
        super(props);
        this.state = { searchQuery: ""};
    }

  componentDidMount(): void {
    const searchParam = new URLSearchParams(this.props.location.search).get('search');
    if (searchParam?.length) {
      this.setState({searchQuery: searchParam});
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
    this.setState({searchQuery: event.target.value});
  };
  
  render(): JSX.Element {
    return (
      <>
        {this.props.isLoading ? <LoadingOverlay /> : null}

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
    hasError: store.search.hasError,
    isLoading: store.search.isLoading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getHeroes: (searchQuery: string) => dispatch(getCharacters(searchQuery)),
    setCharacters: (characters: IMarvelEntityResponse[]) => dispatch(getCharactersSuccess(characters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
