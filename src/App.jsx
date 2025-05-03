import { useState } from 'react'
import Counter from './components/Counter'
import Todos from './components/Todos'
import MealsAPI from './components/MealsAPI'
import Calculator from './components/Calculator'
import ToggleBackgroundColor from './components/ToggleBackgroundColor'
import HiddenSearchBar from './components/HiddenSearchBar'
import Testimonials from './components/Testimonials'
import Accordion from './components/Accordion'
import { accordionData } from "./utils/content"
import FormValidation from './components/FormValidation'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*  
          <Counter />  // Project 1 - Counter 
          <Todos />    //  Project-2 - Todos
          <MealsAPI /> // Project-3 - Meals API
          <Calculator /> // Project - 4 Calculator 
          <ToggleBackgroundColor /> // Project - 5 ToogleBackgroundColor
          <HiddenSearchBar />   // Project - 6 Hidden Search Feature
          <Testimonials /> // project - 7 Testimonials Card
       
          //Project -8 Accordian Card
          <div>
      <div className='accordion'>
        {accordionData.map(({title, content}) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
     </div>

     //Project 9 

      */}
      
     <FormValidation />
    </>
  )
}

export default App

