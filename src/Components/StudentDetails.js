import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function StudentDetails() {
  const params = useParams();
  const location = useLocation()

  console.log(params.studentId);
  const [studentDetails, setStudentDetails] = useState({});
  const [studentList,setStudentList]=useState([])

  const fetchStudentDetails = () => {
    axios
      .get(
        `https://66f4d00577b5e889709a8bdb.mockapi.io/student/${params.studentId}`
      )
      .then((res) => {
        setStudentDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (params.studentId) {
      fetchStudentDetails();
    }
    if(location.state.studentList){
        setStudentList(location.state.studentList)
    }
  }, [params]);

  console.log(studentList)
  return (
    <div className="container w-50 m-auto">
      <div class="card mt-5">
        <div class="card-body">
          <h5 class="card-title">Name : {studentDetails.firstName} {studentDetails.lastName}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails.email}</h6>
          <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails.mobile}</h6>
          <h6 class="card-subtitle mb-2 text-body-secondary">RollNo :{studentDetails.rollno}</h6>
          <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails.location}</h6>
          <h6 class="card-subtitle mb-2 text-body-secondary">{studentDetails?.skill?.join(',')}</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
