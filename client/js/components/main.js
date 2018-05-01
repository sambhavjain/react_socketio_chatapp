import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from 'components/login/login';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => { return <Login {...props}/>}} />
        </Switch>
      </div>
    )
  }
}
