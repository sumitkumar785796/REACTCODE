import React, { useState } from 'react'
import Design from './Design';
const ExampleOne = () => {
const array = useState(0);
const count=array[0];
const setCount=array[1];
const increment = ()=>{
    setCount(count + 1)
}
console.log(array)
  return (
    <>
    <Design/>
    {array}
    <button onClick={increment}>increment</button>
    </>
  )
}

export default ExampleOne