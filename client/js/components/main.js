import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from 'components/login/login';
import Home from 'components/home';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => { return <Home {...props}/>}} />
        </Switch>
      </div>
    )
  }
}
