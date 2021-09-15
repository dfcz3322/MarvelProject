import React from 'react';
import axios from 'axios';
import { RouteChildrenProps } from 'react-router';
import { Hero } from '../components/hero/hero';

export class Search extends React.Component<RouteChildrenProps> {
    componentDidMount(){
        axios.get("http://gateway.marvel.com/v1/public/comics", {
            params: {
                apikey: "cffc6e60c4ebf25fdb0c2a3a87cfdc6f"
            }
        }).then((response) => {
            console.log(response)
        }) 
    }
    render() {
        return (
            <Hero history={this.props.history}></Hero>
        )
    }
}