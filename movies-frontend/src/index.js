import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MasterContainer from './containers/MasterContainer';
import MoviesView from './views/MoviesView';
import DetailsView from './views/DetailsView'

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <MasterContainer>
      <Switch>
        <Route exact path="/movies/:id" component={DetailsView} />
        <Route exact path="/movies/" component={MoviesView} />
        {/* <Route path="/login-page" component={LoginPage} /> */}
        <Route path="/" component={MoviesView} />
      </Switch>
    </MasterContainer>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
