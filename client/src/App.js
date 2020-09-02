import React, {Fragment, useEffect} from 'react';
import SearchBar from './components/layout/SearchBar';
import Todos from './components/todos/Todos';




import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
    return <Fragment>
      <SearchBar/>
      <div className='container'>
      <Todos />
      </div>
    </Fragment>
};


export default App;
