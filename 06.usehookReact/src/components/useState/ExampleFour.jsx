import React, { useState } from 'react'
import Design from './Design'
const ExampleFour = () => {
    const [name,setName]=useState('')
  return (
    <>
        <Design />
        <input 
            type="text" 
            onChange={e=>setName(e.target.value)}
        />
        {name}
    </>
  )
}

export default ExampleFour