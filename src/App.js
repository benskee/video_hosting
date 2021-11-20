import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import CodeProject from './components/codeTutorial/CodeProject';
import AnimationProject from './components/animation/AnimationProject';
import Logout from './components/user/Logout';
import auth from './services/authService'
import CodeTutorial from './views/CodeTutorial';
import Home from './views/Home';
import Chart from './views/Chart';
import Animation from './views/Animation';
import Upload from './views/Upload';
import EditProject from './views/EditProject';
import ProjectList from './views/ProjectList';
import Login from './views/Login';
import Register from './views/Register';
import "./App.css"

export default class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <header>
          <Header user={this.state.user}/>
        </header>
        <main className="container">
          <Switch>
              <Route path="/code/:id" render={props => <CodeProject  {...props}/>} />
              <Route path="/animation/:id" render={props => <AnimationProject  {...props}/>} />
              <Route exact path="/code" render={() => <CodeTutorial />} />
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/chart" render={() => <Chart />} />
              <Route exact path="/animation" render={() => <Animation />} />
              <Route exact path="/upload" render={props => <Upload user={this.state.user} {...props}/>} />
              <Route exact path="/edit/:id" render={props => <EditProject user={this.state.user} {...props}/>} />
              <Route exact path="/projects" render={() => <ProjectList user={this.state.user}/>} />
              <Route exact path="/login" render={props => <Login {...props}/>} />
              <Route exact path="/logout" render={() => <Logout />} />
              <Route exact path="/register" render={props => <Register {...props}/>} />
          </Switch>
        </main>
      </div>
    );
  }
}