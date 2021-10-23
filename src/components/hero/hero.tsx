import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import './hero.css';
import { IMarvelEntityResponse } from '../../interface/interface';
import { MarvelButton } from '../marvelButton/marvelButton';

interface IHeroProps {
  character: IMarvelEntityResponse;
}

export function Hero (props: IHeroProps): JSX.Element {
    return (
      <div className="hero--body">
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          flex-wrap="nowrap"
          wrap="nowrap"
        >
          <img
            src={`${props.character.thumbnail.path}/standard_xlarge.${props.character.thumbnail.extension}`}
            className="hero--img"
          ></img>
          <p className="hero--text">
            {props.character.name} - {props.character.description}
          </p>
          <Link to={`/comics/${props.character.id}`}>
            <MarvelButton>Read more</MarvelButton>
          </Link>
        </Grid>
      </div>
    );
  }