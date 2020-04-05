import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import CartContainer from './redux/containers/CartContainer'; 
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

import './App.css';

class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route path="/" component= { Home } exact />
                        <Route path="/about" component= { About } />
                        <Route path="/products" component= { Products } exact />
                        <Route path="/cart" component= { CartContainer } exact />
                        <Route path="/login" component= { LoginForm } />
                        <Route path="/signup" component = { SignupForm } />
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
