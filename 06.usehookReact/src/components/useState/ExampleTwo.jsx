import React, { useState } from 'react'
import Design from './Design';

const ExampleTwo = () => {
    const [count , setCount]=useState(0)
    const increment = ()=>{
        setCount(count+1);
    }
  return (
    <>
       <Design/>
        {count}
        <button onClick={increment}>Increment</button>
    </>
  )
}

export default ExampleTwo