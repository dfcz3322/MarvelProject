import React from 'react';
import './comicsItem.css';
import Grid from '@material-ui/core/Grid';
import { IMarvelEntityResponse } from '../../interface/interface';

interface IComicsProps {
  comics: IMarvelEntityResponse;
}

export class ComicsItem extends React.Component<IComicsProps> {
  render(): JSX.Element {
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
            src={`${this.props.comics.thumbnail.path}/standard_xlarge.${this.props.comics.thumbnail.extension}`}
            className="hero--img"
          ></img>
          <p className="hero--text">
            {this.props.comics.name} - {this.props.comics.description}
          </p>
        </Grid>
      </div>
    );
  }
}
