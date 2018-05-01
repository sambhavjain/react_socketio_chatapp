import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import Root from 'components/Root'
import { AppContainer } from 'react-hot-loader';

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);
