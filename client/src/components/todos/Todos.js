import React, {useState, useEffect} from 'react'
import axios from 'axios';

export const Todos = () => {

  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTodos();
    //eslint-disable-next-line
  }, []);

  const getTodos = async () => {
    setLoading(true);
    const res = await axios.get('/api/todos');
    const data = await res.json();

    setTodos(data);
    setLoading(false)
  }

   if(loading) {
     return <h4>Loading...</h4>
   }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Todos</h4>
      </li>
      {!loading && todos.length === 0 ? (
      <p className="center">No todos to show...</p>
      ) : (
        todos.map(todo => <li>{todos.message}</li> )
      )}
    </ul>
  );
};

export default Todos;