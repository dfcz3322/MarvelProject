import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Search } from "./pages/search";
import { Comics } from "./pages/comics";
import { NotFound } from "./pages/notFound/notFound";

function App(): JSX.Element {
    return (
        <Router>
            <Link to="/comics"></Link>
            <Switch>
                <Route path="/comics/:id" component={Comics}></Route>
                <Route exact path="/" component={Search}></Route>
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
