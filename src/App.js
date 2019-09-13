import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Users from './components/Users';
import Projects from './components/Projects';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>

          <hr />
          <div className="main-route-place">
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/users" component={Users} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
