import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Products from "./components/Products";
import Product from "./components/Product";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/products' component={Products} />
            <Route path='/products/:id' component={Product} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
