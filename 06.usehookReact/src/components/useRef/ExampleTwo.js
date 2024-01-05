import React, { useRef } from 'react'

const ExampleTwo = () => {
    const count = useRef(0)
    const inc = ()=>{
        count.current++
        console.log(count.current)
    }
  return (
    <>
        <p>{count.current}</p>
        <button onClick={inc}>Increment</button>
    </>
  )
}

export default ExampleTwo