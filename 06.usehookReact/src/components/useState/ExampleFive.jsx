import React, { useState } from 'react'
import Design from './Design'

const ExampleFive = () => {
  const [details,setDetails]=useState({name:"",age:0})
  const handleNameChange = (e) => {
    setDetails({ ...details, name: e.target.value });
  };

  const handleAgeChange = (e) => {
    // Convert the input value to a number
    setDetails({ ...details, age: parseInt(e.target.value, 10) || 0 });
  };

  return (
    <>
      <Design />  
      <input 
        type="text" 
        onChange={handleNameChange}
      />
      <input 
        type="text" 
        onChange={handleAgeChange}
      />
      <br />
      {details.name}
      <br />
      {details.age}
    </>
  )
}

export default ExampleFive