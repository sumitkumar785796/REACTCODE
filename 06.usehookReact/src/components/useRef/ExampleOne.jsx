import React, { useRef } from 'react'

const ExampleOne = () => {
    const inputRef = useRef(null)
    const handleSubmit = () =>{
        const value=inputRef.current.value;
        inputRef.current.style.backgroundColor = 'red'
        inputRef.current.focus()
        console.log(value)
    }
  return (
    <>
        <input 
            ref={inputRef}
            type="text" 
        />
        <button onClick={handleSubmit}>focus</button>
    </>
  )
}

export default ExampleOne