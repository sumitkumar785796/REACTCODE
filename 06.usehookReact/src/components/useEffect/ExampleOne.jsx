import React from 'react'
import Design from './Design'
import { useEffect, useState } from "react";
import Field from "./Field";
const ExampleOne = () => {
    const[state,setState]=useState(10)
    const[data,setData]=useState()
    useEffect(()=>{
      async function dataFetch(){
          try{
              const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
              const res = await get.json();
              setData(res)
              console.log(res)
          }catch(err){
              console.log(err)
          }
      }
      document.title=`(${state}) data`
      dataFetch()
    },[state])
    // without dependance use the auto refresh the page
    return (
      <>
      <Design />
        <button onClick={()=>setState(state+1)}>First State({state})</button>
        <div className="container">  
          <table className="table table-dark table-striped">
              <thead>
                  <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Email</th>
                  </tr>
              </thead>
              <tbody>
              {
                data && data.map((element)=>{
                    return(
                      <Field
                        key={element.id}
                        id={element.id}
                        firstName={element.firstName} 
                        lastName={element.lastName}
                        email={element.email}    
                      />
                    )
                })
              }
              </tbody>
              </table>
    </div>
      </>
    );  
}

export default ExampleOne