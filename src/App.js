import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './helpers/Sidebar';
import { Container, Content } from './helpers/Styled';

import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise7,
  Exercise8,
  Exercise9
} from './exercices';

export const App = () => (
  <BrowserRouter>
    <Sidebar />
    <Content>
      <Switch>
        <Route path="/exercise-1" component={Exercise1} />
        <Route path="/exercise-2" component={Exercise2} />
        <Route path="/exercise-3" component={Exercise3} />
        <Route path="/exercise-4" component={Exercise4} />
        <Route path="/exercise-5" component={Exercise5} />
        <Route path="/exercise-6" component={Exercise6} />
        <Route path="/exercise-7" component={Exercise7} />
        <Route path="/exercise-8" component={Exercise8} />
        <Route path="/exercise-9" component={Exercise9} />
        <Route render={() => <Container>Please pick an exercise</Container>} />
      </Switch>
    </Content>
  </BrowserRouter>
);
