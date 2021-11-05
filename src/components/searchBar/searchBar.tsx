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

export function SearchBar (props: ISearchBarProps): JSX.Element {
    return (
      <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="searchBar--body">
        <TextField
          onChange={props.onQueryChange}
          className="search-input"
          id="filled-textarea"
          label="FIND YOUR SUPERHERO"
          placeholder="Placeholder"
          variant="filled"
          value={props.currentQuery}
        />
        <Button className="search-sortBy" variant="contained">
          Sort by
        </Button>
        <div className="searchBar-marvelButton">
          <MarvelButton onClick={props.onSearch}>Search</MarvelButton>
        </div>
      </Grid>
    );
  }
