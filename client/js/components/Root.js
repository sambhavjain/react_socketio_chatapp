import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Main from './main';

// Import store and history 
import store, { history } from 'store';

export default class Root extends Component{
  
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route render={(props) => { return <Main store={store} history={history} />}}  />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>  
    )
  }
}
