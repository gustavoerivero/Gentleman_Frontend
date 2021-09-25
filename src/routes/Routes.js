import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CustomSwitch from './CustomSwitch';
import LoginPage from '../pages/LoginPage';
import Theme from '../static/theme/Theme';
import { ThemeProvider } from '@material-ui/core';

export default function Routes() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CustomSwitch>
          <Route exact path='/' component={LoginPage} />
        </CustomSwitch>
      </BrowserRouter>
    </ThemeProvider>
  );
}