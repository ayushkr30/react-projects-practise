import { useState } from 'react'
import Counter from './components/Counter'
import Todos from './components/Todos'
import MealsAPI from './components/MealsAPI'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*  <Counter />  // Project 1 - Counter 
          <Todos />    //  Project-2 - Todos
      */}
      <MealsAPI />
    </>
  )
}

export default App

