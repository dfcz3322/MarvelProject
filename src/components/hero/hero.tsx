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
  const {thumbnail, name, description, id} = props.character;
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
            src={`${thumbnail.path}/standard_xlarge.${thumbnail.extension}`}
            className="hero--img"
          ></img>
          <p className="hero--text">
            {name} - {description}
          </p>
          <Link to={`/comics/${id}`}>
            <MarvelButton>Read more</MarvelButton>
          </Link>
        </Grid>
      </div>
    );
  }