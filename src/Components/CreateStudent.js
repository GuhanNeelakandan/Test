import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validateMobile = (number) => {
    const pattern = /^[6789]\d{9}$/;
    return pattern.test(number);
  };

export const locationOptions = [
    { value: 'chennai', label: 'Chennai' },
    { value: 'Avadi', label: 'Avadi' },
    { value: 'Thiruporur', label: 'Thiruporur' }
  ]

 export const skillOptions =[
    {label:'Drawing',value:'drawing'},
    {label:'Music',value:'Music'},
    {label:'Cricket',value:'Cricket'},
    {label:'Reading',value:'Reading'},
  ]

  //skill:[",",""] ---> filter & some methods --boolean (true/false)

function CreateStudent() {
    const navigate = useNavigate()
  const [newStudent, setNewStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    rollno: "",
    location: "",//avadi
    skill:[]
  });
  const [studentList,setStudentList]= useState([])
  console.log(studentList);

  const handleChange = (event, name) => {
    //event,'firstname'
    setNewStudent({ ...newStudent, [name]: event.target.value });
  };

  const handleSelectChange =(value,name)=>{
    setNewStudent({...newStudent,[name]:value})
  }

  const onSubmit =async()=>{
    if(newStudent.firstName===''){
        return toast.error('Please enter First Name')
    }
    if(newStudent.firstName.length<3){
        return toast.error('First Name should be more than 3 characters')
    }
    if(newStudent.lastName===''){
        return toast.error('Please enter Last Name')
    }
    if(newStudent.lastName.length<3){
        return toast.error('Last Name should be more than 3 characters')
    }
    if(newStudent.email===""){
        return toast.error('Please enter Email')
    }
    if(!validateEmail(newStudent.email)){
        return toast.error('Invalid Email')
    }
    if(newStudent.mobile===""){
        return toast.error('Please enter Mobile Number')
    }
    if(!validateMobile(newStudent.mobile)){
        return toast.error('Invalid Mobile Number')
    }
    if(newStudent.location===""){
        return toast.error('Please enter Location')
    }
    if(newStudent.rollno===""){
        return toast.error('Please enter rollno')
    }

    await axios.post('https://66f4d00577b5e889709a8bdb.mockapi.io/student',newStudent).then((res)=>{
        console.log(res)
        toast.success('Student Created Successfully')
        navigate('/student')
    }).catch((err)=>{
        console.log(err)
    })


    setStudentList([...studentList,newStudent])
    setNewStudent({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        rollno: "",
        location: "",
      })
  }

  console.log(newStudent)

  const handleDelete=(index)=>{
   console.log(index)
   studentList.splice(index,1)
   setStudentList([...studentList])
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">First Name</label>
              <input
                value={newStudent.firstName}
                type="text"
                class="form-control"
                onChange={(event) => {
                  handleChange(event, "firstName");
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Last Name</label>
              <input
                type="text"
                value={newStudent.lastName}
                class="form-control"
                onChange={(event) => {
                  handleChange(event, "lastName");
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                value={newStudent.email}
                class="form-control"
                onChange={(event) => {
                  handleChange(event, "email");
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Mobile</label>
              <input
                type="number"
                value={newStudent.mobile}
                class="form-control"
                onChange={(event) => {
                  handleChange(event, "mobile");
                }}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Location</label>
              <Select
                value={locationOptions.filter(
                  (op) => op.value === newStudent.location
                )}
                options={locationOptions}
                onChange={(e) => handleSelectChange(e.value, "location")}
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">Skill</label>
              <Select
              isMulti
              isSearchable
              value={skillOptions.filter((op)=>{
                return newStudent?.skill?.some((li)=>li===op.value)
              })}
              options={skillOptions}
              onChange={(e)=>setNewStudent({...newStudent,skill:e.map((op)=>op.value)})} //[drawing,cricket,music]
              />
            </div>
          </div>
          <div className="col-6">
            <div class="mb-3">
              <label class="form-label">RollNo</label>
              <input
                type="text"
                value={newStudent.rollno}
                class="form-control"
                onChange={(event) => {
                  handleChange(event, "rollno");
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Location</th>
              <th scope="col">skill</th>
              <th scope="col">RollNo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((list, indx) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{list.firstName}</td>
                  <td>{list.lastName}</td>
                  <td>{list.email}</td>
                  <td>{list.mobile}</td>
                  <td>{list.location}</td>
                  <td>{list.skill.join(',')}</td>
                  <td>{list.rollno}</td>
                  <td>
                    <span
                      className="text-danger"
                      onClick={() => handleDelete(indx)}
                    >
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CreateStudent;
