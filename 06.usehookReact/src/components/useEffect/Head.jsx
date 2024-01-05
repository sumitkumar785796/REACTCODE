import React, { useEffect, useState } from 'react'

const Head = () => {
    const [count,setCount]=useState(0)
    const inc = ()=>{
        setCount(count+1)
    }
    const dec = ()=>{
        setCount(count-1)
    }
    useEffect(()=>{
        console.log('count mount')
        return ()=>{
            console.log('unmount')
        }
    },[])
    useEffect(()=>{
        console.log('count updated',count)
        return ()=>{
            console.log('count unmount',count)
        }
    },[count])
  return (
    <>
        <div className="container">

        <button onClick={inc}>+</button>
        <h1>{count}</h1>
        <button onClick={dec}>-</button>
        </div>
    </>
  )
}

export default Head