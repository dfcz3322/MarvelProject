import React from 'react';
import axios from 'axios';
import { RouteChildrenProps } from 'react-router';
import { Hero } from '../components/hero/hero';
import { SearchBar } from '../components/searchBar/searchBar';
import { SearchLogo } from '../components/searchLogo/searchLogo';
import { ICharacter } from '../intarface/interface';

interface ISearchState {
    characters: ICharacter[];
    searchQuery: string;
}


export class Search extends React.Component<RouteChildrenProps, ISearchState> {
    constructor(props: RouteChildrenProps) {
        super(props);
        const searchParam = new URLSearchParams(this.props.location.search).get("search");
        this.state = {characters: [], searchQuery: searchParam ?? ""};
      }

      getComics() {
        axios.get("http://gateway.marvel.com/v1/public/characters", {
            params: {
                apikey: "cffc6e60c4ebf25fdb0c2a3a87cfdc6f",
                ...(this.state.searchQuery.length && {nameStartsWith: this.state.searchQuery})
            }
        }).then((response) => {
            console.log(response);
            this.setState({characters: response.data.data.results});
        });
      }
      
    componentDidMount(){
        this.getComics();
    }
    onSearch = (event: React.MouseEvent<HTMLElement>) => {
        this.props.history.push({
            pathname: "/",
            search: `?search=${this.state.searchQuery}`
        });
        this.getComics();
    }
    
    onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({searchQuery: event.target.value});
    }


    render() {
        return (
            <>
                <SearchLogo></SearchLogo>
                <SearchBar onSearch={this.onSearch} onQueryChange={this.onQueryChange}></SearchBar>
                {
                    this.state.characters.map((character: any) => {
                        return <Hero key={character.id} character={character}></Hero>
                    })
                }
            </>
        )
    }
}