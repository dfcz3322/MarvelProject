import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Search } from './pages/search';
import { Comics } from './pages/comics';
import { NotFound } from './pages/notFound/notFound';


function App() {

  return (
    <Router>
      <Link to="/comics">Comics</Link>
      <Switch>
        <Route path="/comics" component={Comics}></Route>
        <Route exact path="/" component={Search}></Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}





export default App;
