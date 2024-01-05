import { createContext } from "react"

const MyContext=createContext(null)
const ExampleOne = (props) => {
    const {children}=props
    const user={
        name:'sk',
        email:'sk@g.c'
    }
  return (
    <>
        <MyContext.Provider value={user}>{children}</MyContext.Provider>
    </>
  )
}

export { MyContext, ExampleOne }