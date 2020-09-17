import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const Todos = () => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
 
  // useEffect(() => {
  //   axios.get('/')
  //   .then((res) => {
  //     console.log(res)
  //     setTodos(res.data)
  //     setLoading(false)
      
  //   })
  // }, [])
  
  // if (loading) {
  //   return <h4>Loading...</h4>
  // }
 
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Todos</h4>
      </li>
      {!loading && todos.length === 0 ? (
        <p className='center'>No todos to show...</p>
      ) : (
        todos.map((todos) => <li>{todos.message}</li>)
      )}
    </ul>
  )
}

export default Todos;