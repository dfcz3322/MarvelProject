import React from 'react';
import axios from 'axios';
import { RouteChildrenProps } from 'react-router';
import { Hero } from '../components/hero/hero';
import { SearchBar } from '../components/searchBar/searchBar';
import { SearchLogo } from '../components/searchLogo/searchLogo';
import { ICharacter } from '../intarface/interface';
import { LoadingOverlay } from '../components/loadingOverlay/loadingOverlay';

interface ISearchState {
    characters: ICharacter[];
    searchQuery: string;
    isLoading: boolean;
}


export class Search extends React.Component<RouteChildrenProps, ISearchState> {

    constructor(props: RouteChildrenProps) {
        super(props);
        const searchParam = new URLSearchParams(this.props.location.search).get("search");
        this.state = {characters: [], searchQuery: searchParam ?? "", isLoading: false};
      }

      getHero(): void {
        this.setState({isLoading: true});
        axios.get("http://gateway.marvel.com/v1/public/characters", {
            params: {
                apikey: "cffc6e60c4ebf25fdb0c2a3a87cfdc6f",
                ...(this.state.searchQuery.length && {nameStartsWith: this.state.searchQuery}),
                limit: "5"
            }
        }).then((response) => {
            console.log(response);
            this.setState({characters: response.data.data.results});
        }).finally(() => {
            this.setState({isLoading: false});
        });
      }
      
    componentDidMount(){
        this.getHero();
    }
    onSearch = (query: string) => {
        this.props.history.push({
            pathname: "/",
            search: `?search=${query}`
        });
        this.getHero();
    }
    
    onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({searchQuery: event.target.value});
    }

    render() {
        return (
            <>
            {this.state.isLoading
            ? <LoadingOverlay></LoadingOverlay>
            : null
            }
           
                <SearchLogo></SearchLogo>
                <SearchBar onSearch={() => this.onSearch(this.state.searchQuery)} onQueryChange={this.onQueryChange} currentQuery={this.state.searchQuery}></SearchBar>
                {
                    this.state.characters.map((character: any) => {
                        return <Hero key={character.id} character={character}></Hero>
                    })
                }
            </>
        )
    }
}