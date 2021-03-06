import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Apartments from "./components/pages/Apartments";
function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' exact component={About}/>
            <Route path='/apartments' exact component={Apartments}/>
        </Switch>
    </Router>
  );
}

export default App;
