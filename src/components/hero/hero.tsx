import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import "./hero.css";
import { ICharacter } from '../../intarface/interface';
import { MarvelButton } from '../marvelButton/marvelButton';

interface IHeroProps {
  character: ICharacter;
}

export class Hero extends React.Component<IHeroProps> {
    render() {
      return (
        <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
              <img src={`${this.props.character.thumbnail.path}/standard_medium.${this.props.character.thumbnail.extension}`}></img>
              <p>{this.props.character.name}</p>
              <p>Any useful information hero</p>
              <Link to="/comics/:id">
                <MarvelButton>Read more</MarvelButton>
              </Link>
          </Grid>
      )
    }
}    