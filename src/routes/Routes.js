import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import CustomSwitch from './CustomSwitch';
import LoginPage from '../pages/LoginPage';
import EnterpriseFeed from '../pages/EnterpriseFeed';
import NotFound from '../pages/NotFound';
import Theme from '../static/theme/Theme';
import { ThemeProvider } from '@material-ui/core';

export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CustomSwitch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/enterprise/feed' component={EnterpriseFeed} />
          <Route exact path='/error-404' component={NotFound} />
          <Redirect from='*' to='/error-404' />
        </CustomSwitch>
      </BrowserRouter>
    </ThemeProvider>
  );
}