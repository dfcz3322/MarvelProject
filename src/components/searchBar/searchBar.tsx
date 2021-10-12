import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import './searchBar.css';
import { MarvelButton } from '../marvelButton/marvelButton';

interface ISearchBarProps {
  onSearch: (event: React.MouseEvent<HTMLElement>) => void;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  currentQuery: string;
}

export class SearchBar extends React.Component<ISearchBarProps> {
  render(): JSX.Element {
    return (
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="searchBar--body">
        <TextField
          onChange={this.props.onQueryChange}
          className="search-input"
          id="filled-textarea"
          label="FIND YOUR SUPERHERO"
          placeholder="Placeholder"
          variant="filled"
          value={this.props.currentQuery}
        />
        <Button className="search-sortBy" variant="contained">
          Sort by
        </Button>
        <div className="searchBar-marvelButton">
          <MarvelButton onClick={this.props.onSearch}>Search</MarvelButton>
        </div>
      </Grid>
    );
  }
}
