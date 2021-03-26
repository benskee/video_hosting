import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main className="container">
          <Switch>
              <Route exact path="/" render={() => <Home />} />
          </Switch>
        </main>
      </div>
    );
  }
}