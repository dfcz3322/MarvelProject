import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { IMarvelEntityResponse } from "../interface/interface";
import { ComicsItem } from "../components/comicsComics/comicsItem";
import { ComicsLogo } from "../components/comicsLogo/comicsLogo";
import "./comics.css";
import { LoadingOverlay } from "../components/loadingOverlay/loadingOverlay";
import { handleRequest } from "../api/requestHandler";

interface IComicsState {
    comics: IMarvelEntityResponse[];
    isLoading: boolean;
}

interface MatchParams {
    id: string;
}
export class Comics extends React.Component<RouteComponentProps<MatchParams>, IComicsState> {
    constructor(props: RouteComponentProps<MatchParams>) {
        super(props);
        this.state = { comics: [], isLoading: false };
    }

    getComics(): void {
        this.setState({ isLoading: true });
        handleRequest(`characters/${this.props.match?.params.id}/comics`)
            .then((response) => {
                console.log(response);
                this.setState({ comics: response});
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    componentDidMount(): void {
        this.getComics();
    }
    render(): JSX.Element {
        return (
            <div>
                {this.state.isLoading ? <LoadingOverlay></LoadingOverlay> : null}
                <div className="comics-container">
                    <ComicsLogo></ComicsLogo>
                </div>

                {this.state.comics.map((comics: IMarvelEntityResponse) => {
                    return <ComicsItem key={comics.id} comics={comics}></ComicsItem>;
                })}
            </div>
        );
    }
}
