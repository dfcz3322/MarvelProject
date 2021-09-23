import React from "react";
import { RouteChildrenProps } from "react-router";
import { Hero } from "../components/hero/hero";
import { SearchBar } from "../components/searchBar/searchBar";
import { SearchLogo } from "../components/searchLogo/searchLogo";
import { IMarvelEntityResponse } from "../interface/interface";
import { LoadingOverlay } from "../components/loadingOverlay/loadingOverlay";
import { handleRequest } from "../api/requestHandler";

interface ISearchState {
    characters: IMarvelEntityResponse[];
    searchQuery: string;
    isLoading: boolean;
}

export class Search extends React.Component<RouteChildrenProps, ISearchState> {
    constructor(props: RouteChildrenProps) {
        super(props);
        const searchParam = new URLSearchParams(this.props.location.search).get("search");
        this.state = { characters: [], searchQuery: searchParam ?? "", isLoading: false };
    }

    getHero(): void {
        this.setState({ isLoading: true });
        handleRequest(`characters`, this.state.searchQuery)
            .then((response) => {
                console.log(response);
                this.setState({ characters: response.data.data.results });
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    componentDidMount():void {
        this.getHero();
    }
    onSearch = (query: string): void => {
        this.props.history.push({
            pathname: "/",
            search: `?search=${query}`,
        });
        this.getHero();
    };

    onQueryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ searchQuery: event.target.value });
    };

    render(): JSX.Element {
        return (
            <>
                {this.state.isLoading ? <LoadingOverlay></LoadingOverlay> : null}

                <SearchLogo></SearchLogo>
                <SearchBar
                    onSearch={() => this.onSearch(this.state.searchQuery)}
                    onQueryChange={this.onQueryChange}
                    currentQuery={this.state.searchQuery}
                ></SearchBar>
                {this.state.characters.map((character: any) => {
                    return <Hero key={character.id} character={character}></Hero>;
                })}
            </>
        );
    }
}
