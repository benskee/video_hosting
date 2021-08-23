import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CodeTutorial from './views/CodeTutorial';
import Home from './views/Home';
import Chart from './views/Chart';
import Animation from './views/Animation';
import Header from './components/layout/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main className="container">
          <Switch>
              <Route exact path="/code" render={() => <CodeTutorial />} />
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/chart" render={() => <Chart />} />
              <Route exact path="/animation" render={() => <Animation />} />
          </Switch>
        </main>
      </div>
    );
  }
}