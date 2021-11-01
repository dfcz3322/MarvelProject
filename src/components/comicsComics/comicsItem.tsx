import React from 'react';
import './comicsItem.css';
import Grid from '@material-ui/core/Grid';
import { IMarvelEntityResponse } from '../../interface/interface';

interface IComicsProps {
  comics: IMarvelEntityResponse;
}

export function ComicsItem (props: IComicsProps): JSX.Element {
  const {comics} = props;
    return (
      <div className="comicsBody">
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          flex-wrap="nowrap"
          wrap="nowrap"
        >
          <img
            src={`${comics.thumbnail.path}/standard_xlarge.${comics.thumbnail.extension}`}
            className="hero--img"
          ></img>
          <p className="hero--text">
            {comics.name} - {comics.description}
          </p>
        </Grid>
      </div>
    );
  }
