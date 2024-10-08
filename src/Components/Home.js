import React, { useContext, useState } from "react";
import './home.css'
import UserContext from "../Context/UserContext";

function Home({user}) {
  const dashboardcontent = useContext(UserContext)
  console.log(dashboardcontent)
  const [count,setCount]=useState(0) //number,string,array,object,null,boolean-- initialstate 1001,1002,1003
  const [show,setShow]= useState(false)
  const [name,setName]= useState('')
  const [isSubmit,setIsSubmit]= useState(false)
  const [nameList,setNameList]= useState([])


  const onSubmit = ()=>{
    setNameList([...nameList,name]) //[ramesh,suresh,hari]
    setName('')
  }


  return (
    <div className="home">
      <div className="App text-center">
        user ---{user}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        itaque commodi odit placeat nulla
      </div>
      <div className="text-center mt-5">
        {/* disabled ={true/false} */}
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => setCount(count - 1)}
          disabled={count <= 0}
        >
          -
        </button>
        <span>{count}</span>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => setCount(count + 1)}
          disabled={count >= 10}
        >
          +
        </button>
      </div>
      <div className="mt-5">
        <div>
          <button className={`btn btn-sm ${show?'btn-outline-danger':'btn-outline-primary'}`} onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
        </div>
        {show ? (
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non
            atque ipsam soluta porro sit quisquam neque maiores pariatur numquam
            minima eius ullam vitae quibusdam quaerat obcaecati culpa
            consequatur, harum fuga voluptas, doloribus blanditiis corrupti.
            Fuga iure perspiciatis sequi a debitis iusto dolorem obcaecati
            possimus?
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mt-5">
        <input value={name} onChange={(event)=>setName(event.target.value)}/>
        <button onClick={()=>onSubmit()}>Submit</button>
      </div>
      <div>
        {
          nameList.map((list)=>{
            return <li>{list}</li>
          })
        }
      </div>
    </div>
  );
}

export default Home;
