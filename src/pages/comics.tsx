import React from 'react';
import axios from 'axios';
import { RouteChildrenProps } from 'react-router-dom';
import { IComics } from '../intarface/interface';
import { ComicsItem } from '../components/comicsComics/comicsItem'
import { ComicsLogo } from '../components/comicsLogo/comicsLogo';
import "./comics.css"
import { LoadingOverlay } from '../components/loadingOverlay/loadingOverlay';

interface IComicsState {
    comics: IComics[];
    isLoading: boolean;
}

export class Comics extends React.Component<RouteChildrenProps, IComicsState> {
    constructor(props: RouteChildrenProps) {
        super(props);
        this.state = {comics: [], isLoading: false};
        
      }

    getComics(): void {
        this.setState({isLoading: true});
        axios.get(`http://gateway.marvel.com/v1/public/characters/${(this.props.match?.params as any).id}/comics`, {
            params: {
                apikey: "cffc6e60c4ebf25fdb0c2a3a87cfdc6f",
                limit: "5"
            }
        }).then((response) => {
            console.log(response);
            this.setState({comics: response.data.data.results});
        }).finally(() => {
            this.setState({isLoading: false});
        });
      }

      componentDidMount(){
        this.getComics();
    }
    render() {
        return (
            <div>
                {this.state.isLoading
            ? <LoadingOverlay></LoadingOverlay>
            : null
            }
            <div className="comics-container">
            <ComicsLogo></ComicsLogo>
            </div>
           
            {
                    this.state.comics.map((comics: any) => {
                        return <ComicsItem key={comics.id} comics={comics}></ComicsItem>
                    })
                }
               
            </div>
        )
    }
}