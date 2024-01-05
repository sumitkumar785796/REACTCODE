import React, { useContext } from 'react'
import { MyContext } from '../useContext/ExampleOne'

const NavBar = (props) => {
    const user=useContext(MyContext);
    const {name,email}=user
  return (
    <>
        <h1>{name}</h1>
        <p>{email}</p>
    </>
  )
}

export default NavBar