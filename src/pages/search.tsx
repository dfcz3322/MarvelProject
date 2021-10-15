import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { Hero } from '../components/hero/hero';
import { SearchBar } from '../components/searchBar/searchBar';
import { SearchLogo } from '../components/searchLogo/searchLogo';
import { IMarvelEntityResponse } from '../interface/interface';
import { LoadingOverlay } from '../components/loadingOverlay/loadingOverlay';
import { handleRequest } from '../api/requestHandler';
import { connect } from 'react-redux';
import { IRootStore } from '../reducer';
import { Dispatch } from 'redux';
import { setCharacters } from '../actions/search';

interface ISearchState {
  isLoading: boolean;
  searchQuery: string;
}

interface ISearchProps extends RouteChildrenProps {
  characters: IMarvelEntityResponse[];
  setCharacters: (characters: IMarvelEntityResponse[]) => void;
}

class Search extends React.Component<ISearchProps, ISearchState> {
  constructor(props: ISearchProps) {
    super(props);
    this.state = { isLoading: false, searchQuery: "" };
  }

  getHero(searchParam = ''): void {
    this.setState({ isLoading: true });
    handleRequest('characters', searchParam)
      .then((response) => {
        this.props.setCharacters(response);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  componentDidMount(): void {
    const searchParam = new URLSearchParams(this.props.location.search).get('search');
    if (searchParam?.length) {
      this.setState({searchQuery: searchParam});
    }
    this.getHero(searchParam as string);
  }
  onSearch = (query: string): void => {
    this.props.history.push({
      pathname: '/',
      ...(query.length && {search: `?search=${query}`}),
    });
    this.getHero(query);
  };

  onQueryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({searchQuery: event.target.value});
  };

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
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCharacters: (characters: IMarvelEntityResponse[]) => dispatch(setCharacters(characters)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
