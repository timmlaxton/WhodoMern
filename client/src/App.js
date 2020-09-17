import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SearchBar from './components/layout/SearchBar';
import NavBar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Todos from './components/todos/Todos';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
    return (
      <Fragment>
      <NavBar/>
      <Landing/>
    </Fragment>
    )
};


export default App;
