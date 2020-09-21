import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import SearchBar from './components/layout/SearchBar';

import { Provider } from 'react-redux';
import store from './store'
import NavBar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
//import Todos from './components/todos/Todos';

// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

const App = () => (
  // useEffect(() => {
  //   // Init Materialize JS
  //   M.AutoInit();
  // });
      <Provider store={store}> 
      <Router> 
      <Fragment>
      <NavBar/>
      <Route exact path='/' component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
        </section>
    </Fragment>
    </Router> 
    </Provider>
);


export default App;
