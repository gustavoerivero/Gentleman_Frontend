import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CustomSwitch from './CustomSwitch';
import LoginPage from '../pages/LoginPage';
import EnterpriseFeed from '../pages/EnterpriseFeed';
import Theme from '../static/theme/Theme';
import RegisterPage from '../pages/RegisterPage';
import { ThemeProvider } from '@material-ui/core';


export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CustomSwitch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/register-page/:value' component={ RegisterPage } />
          <Route exact path='/enterprise/feed' component={EnterpriseFeed} />
        </CustomSwitch>
      </BrowserRouter>
    </ThemeProvider>
  );
}