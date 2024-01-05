import React, { useState } from 'react'
import Design from '../../Design'
const Header = () => {    

    const [num,setNum]=useState(0)
    const inc=()=>{
        setNum(num+1)
    }
    const dec=()=>{
        setNum(num-1)
    }
  return (
    <>
        <Design/>
        <h1 style={{color:'white',backgroundColor:'black',width:'40px',padding:'200px',margin:'10px 26px 0px 500px'}}>{num}</h1>
        <button style={{color:'white',backgroundColor:'black',width:'40px',padding:'50px',margin:'10px 26px 0px 500px',fontSize:'x-large',cursor:'pointer'}} onClick={inc}>+</button>
        <button style={{color:'white',backgroundColor:'black',width:'40px',padding:'50px',margin:'10px 26px 0px 210px',fontSize:'x-large',cursor:'pointer'}} onClick={dec}>-</button>
    </>
  )
}

export default Header