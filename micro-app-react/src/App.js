import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";

function App() {
  return (
    <BrowserRouter basename={BASE_NAME}>
      <div className="App">
        <header className="App-header">
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </header>
        <Switch>
          <Route exact path="/" render={() => <Home />}></Route>
          <Route exact path="/about" render={() => <About />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
