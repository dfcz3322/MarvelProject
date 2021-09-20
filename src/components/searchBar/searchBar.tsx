import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import "./searchBar.css"
import { MarvelButton } from '../marvelButton/marvelButton';

interface ISearchBarProps {
  onSearch: (event: React.MouseEvent<HTMLElement>) => void;
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class SearchBar extends React.Component<ISearchBarProps> {
    render() {
      return (
        <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
            <TextField onChange={this.props.onQueryChange} className="search-input"
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
            />
             <Button className="search-sortBy" variant="contained">Sort by</Button>
             <MarvelButton onClick={this.props.onSearch}>Search</MarvelButton>
        </Grid>
      )
    }
 }