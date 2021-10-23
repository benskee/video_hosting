import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import CodeTutorial from './components/codeTutorial/CodeTutorial';
import Home from './views/Home';
import Chart from './views/Chart';
import Animation from './views/Animation';
import Upload from './views/Upload';
import ProjectList from './views/ProjectList';

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
              <Route exact path="/upload" render={() => <Upload />} />
              <Route exact path="/projects" render={() => <ProjectList />} />
              <Route exact path="/projects/code/:id" render={() => <CodeTutorial />} />
          </Switch>
        </main>
      </div>
    );
  }
}