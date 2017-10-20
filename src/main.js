import React from 'react';
import { render } from 'react-dom';
import './styles.scss';
import data from './data.json';
import markdown from './markdown.md';
import { Whoops404 } from './components/Whoops404';
import { App } from './components/App';
import { HashRouter, Switch, Route } from 'react-router-dom';

window.React = React;

render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} /> 
      <Route exact path="/reactjs" component={App} /> 
      <Route exact path="/webpack" component={App} /> 
      <Route exact path="/bootstrap" component={App} /> 
      <Route component={Whoops404} />
    </Switch>
  </HashRouter>
  , document.getElementById('react-container')
);
