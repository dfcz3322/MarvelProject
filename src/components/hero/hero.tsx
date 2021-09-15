import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { History as RouterHistory } from "history";

interface IHeroProps {
    history: RouterHistory;
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
              <img></img>
              <p>Any useful information hero</p>
              <Button onClick={() => this.props.history.push("/test")} variant="contained">Default</Button>
          </Grid>
      )
    }
}    