import "./App.css";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Pricing from "./Components/Pricing";
import Topbar from "./Components/Topbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";
import General from "./Components/General";
import Company from "./Components/Company";
import CreateStudent from "./Components/CreateStudent";
import Student from "./Components/Student";
import { Toaster } from "react-hot-toast";
import StudentDetails from "./Components/StudentDetails";
import UserContext from "./Context/UserContext";
import { useState } from "react";

function App() {
  const name = "Guhan"
  //props----> property --- it will transfer the data from the parent to the child
  const [contextData,setContextData]=useState({})
  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={contextData}>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home user={name}/>} />
          <Route path="/dashboard" element={<Dashboard  user={name} contextData={contextData} setContextData={setContextData}/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create/student" element={<CreateStudent />} />
          <Route path="/student" element={<Student />} />
          <Route path="/student/:studentId" element={<StudentDetails />} />
          {/* /setting/profile , setting/company */}
          <Route path="/settings" element={<Settings />}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="general" element={<General/>}/>
            <Route path="company" element={<Company/>}/>
          </Route>
        </Routes>
        </UserContext.Provider>
        <Toaster/>
      </BrowserRouter>
    </>
  );
}

export default App;
