import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter";

function Dashboard({user,contextData,setContextData}) {
  const dispatch= useDispatch()
  const counter = useSelector((state)=>state.counter.value)
    const dashboardContent = [
        {
            name:"Earnings Monthly",
            cost :"$40000",
            color:'primary'
        },
        {
            name:"Earnings Annually",
            cost :"$215000",
            color:'success'
        },
        {
            name:"Task",
            cost :"50%",
            color:'info'
        },
        {
            name:"Pending Request",
            cost :"18",
            color:'warning'
        },
        {
            name:"Pending Request",
            cost :"18",
            color:'warning'
        },
        {
            name:"Pending Request",
            cost :"18",
            color:'warning'
        }
    ]

    useEffect(()=>{
      setContextData({...contextData,dashboardData:dashboardContent})
    },[])
  return (
    <div className="container">
      user---{user}
      <div>
      <button className='btn btn-sm btn-outline-danger mx-3' onClick={()=>dispatch(decrement())}>-</button>
      {counter}
      <button className='btn btn-sm btn-outline-primary mx-3'onClick={()=>dispatch(increment())}>+</button>
    </div>
      <div className="row">
        {
            // JSX -- Javascript syntax Expression --- we can write a Javascript inside the HTML
            dashboardContent.map((list)=>{
                return <div className="col-3">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body">
                    {/* template Literals -- we can write a javascript inside the string value `${}`*/}
                    <h5 class={`card-title text-${list.color}`}>{list.name}</h5> 
                    <h6 class="card-subtitle mb-2 text-body-secondary">{list.cost}</h6>
                  </div>
                </div>
              </div>
            })
        }
        
      </div>
    </div>
  );
}

export default Dashboard;
