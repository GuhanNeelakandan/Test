import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { locationOptions, skillOptions } from "./CreateStudent";
import UserContext from "../Context/UserContext";

function Student() {
    const dashboardData =useContext(UserContext)
    console.log(dashboardData.dashboardData)
  const [studentList, setStudentList] = useState([]);
  const navigate = useNavigate();
  const [isEditModal, setIsEditModal] = useState(false);
  const [editData,setEditData]=useState({})

  const fetchStudentList = async () => {
    await axios
      .get("https://66f4d00577b5e889709a8bdb.mockapi.io/student")
      .then((res) => {
        setStudentList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //IIFE---> Immediately Invovke function expression ----> useEffect

  useEffect(() => {
    //self invovking -- side effect component
    fetchStudentList(); // one or 2 time
  }, []);

  const addStudent = () => {
    navigate("/create/student");
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`https://66f4d00577b5e889709a8bdb.mockapi.io/student/${id}`)
      .then((res) => {
        toast.success("Student Removed Successfully");
        fetchStudentList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (data) => {
    setEditData(data)
    setIsEditModal(true);
  };

  const onClose = () => {
    setIsEditModal(false);
  };

  const handleChange = (event, name) => {
    //event,'firstname'
    setEditData({ ...editData, [name]: event.target.value });
  };

  const handleSelectChange =(value,name)=>{
    setEditData({...editData,[name]:value})
  }


  const onEditSubmit =async()=>{
   await axios.put(`https://66f4d00577b5e889709a8bdb.mockapi.io/student/${editData.id}`,editData).then((res)=>{
        toast.success("Student Updated Successfully");
        setIsEditModal(false);
        setEditData({})
        fetchStudentList()
    }).catch((err)=>{
        console.log(err)
    })
  }

  const onView =(id)=>{
    console.log(id)
    navigate(`/student/${id}`,{state:{studentList:studentList}})
  }

  return (
    <div className="container">
      <div>
        <h3>Students List</h3>
      </div>
      <div className="text-end">
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => addStudent()}
        >
          Add +
        </button>
      </div>
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
                <th scope="row">{indx + 1}</th>
                <td>{list.firstName}</td>
                <td>{list.lastName}</td>
                <td>{list.email}</td>
                <td>{list.mobile}</td>
                <td>{list.location}</td>
                <td>{list.skill.join(",")}</td>
                <td>{list.rollno}</td>
                <td>
                  <span className="text-primary me-2" onClick={()=>onView(list.id)}>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </span>
                  <span className="text-warning me-2" onClick={() => onEdit(list)}>
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                  </span>
                  <span
                    className="text-danger"
                    onClick={() => handleDelete(list.id)}
                  >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal isOpen={isEditModal} toggle={() => onClose()} size="lg">
        <ModalHeader toggle={() => onClose()}>Edit Student</ModalHeader>
        <ModalBody>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label">First Name</label>
                  <input
                    value={editData.firstName}
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
                    value={editData.lastName}
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
                    value={editData.email}
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
                    type="text"
                    value={editData.mobile}
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
                      (op) => op.value === editData.location
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
                    value={skillOptions.filter((op) => {
                      return editData?.skill?.some((li) => li === op.value);
                    })}
                    options={skillOptions}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        skill: e.map((op) => op.value),
                      })
                    } //[drawing,cricket,music]
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label class="form-label">RollNo</label>
                  <input
                    type="text"
                    value={editData.rollno}
                    class="form-control"
                    onChange={(event) => {
                      handleChange(event, "rollno");
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="d-flex">
            <button onClick={() => onClose()}>Cancel</button>
            <button onClick={()=>onEditSubmit()}>Submit</button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Student;
