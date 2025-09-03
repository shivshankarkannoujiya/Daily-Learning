import React from 'react'
import "./app.css"
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <>
      <h1>Learn about reduxToolKit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App