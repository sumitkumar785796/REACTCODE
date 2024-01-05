import React, { useState } from 'react'

const ChangeColor = () => {
    const [color,setColor]=useState('')
    const myStyle={
        color:'white',
        backgroundColor:'black',
        textAlign:'center',
        padding:0, 
        margin:0
    }
  return <>
  <h1 style={myStyle}>Change Color</h1>
  <input 
    style={{width:'150px'}}
    type="text" 
    onChange={(e)=>setColor(e.target.value)}
  />
  <br /><br />
  <div style={{width:'150px',height:'150px',backgroundColor:color}}></div>
  </>
}

export default ChangeColor