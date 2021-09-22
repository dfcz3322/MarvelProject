import React from 'react';
import "./comicsItem.css";
import Grid from '@material-ui/core/Grid';
import { IComics } from '../../intarface/interface';

interface IComicsProps {
  comics: IComics;
}


export class ComicsItem extends React.Component<IComicsProps> {
  render() {
    return (
      <div className="comicsBody">
<Grid
container
direction="row"
justifyContent="space-around"
alignItems="center"
flex-wrap = "nowrap"
wrap="nowrap"
>
      <img src={`${this.props.comics.thumbnail.path}/standard_xlarge.${this.props.comics.thumbnail.extension}`} className="hero--img"></img>
      <p className="hero--text">{this.props.comics.name} - {this.props.comics.description}</p>
  </Grid>
  </div>
    )
    }
  } 