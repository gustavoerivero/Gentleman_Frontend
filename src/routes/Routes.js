import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CustomSwitch from './CustomSwitch';
import LoginPage from '../pages/LoginPage';
import EnterpriseFeed from '../pages/EnterpriseFeed';
import ProfilePage from '../pages/ProfilePage';
import Theme from '../static/theme/Theme';
import { ThemeProvider } from '@material-ui/core';

export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CustomSwitch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/enterprise/feed' component={EnterpriseFeed} />
          <Route exact path= '/Profile' component={ProfilePage}/>
        </CustomSwitch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
