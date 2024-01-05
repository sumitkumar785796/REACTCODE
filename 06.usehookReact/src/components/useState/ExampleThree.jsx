import React, { useState } from 'react'
import Design from './Design';

const ExampleThree = () => {
    const [count , setCount]=useState(0)
    const increment = (n) => {
        setCount(count+n);
    }
  return (
    <>
       <Design/>
        {count}
        <button onClick={()=>increment(3)}>Increment</button>
    </>
  )
}

export default ExampleThree