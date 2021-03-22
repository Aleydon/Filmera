import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Container } from '../styles/styled';
import HomePage from '../components/home';
import HeaderComponent from '../components/header';
import NotFound from '../components/error';
import FilmView from '../components/film';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/films/:id" component={FilmView} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default Routes;
