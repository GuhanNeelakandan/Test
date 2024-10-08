import React from 'react'
import { Link } from 'react-router-dom'

function Topbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link to={'/'}>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </Link>
        <Link to={'/dashboard'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        </Link>
        <Link to={'/pricing'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        </Link>
        <Link to={'/contact'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        </Link>
        {/* <Link to={'/create/student'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Student</a>
        </li>
        </Link> */}
        <Link to={'/student'}>
        <li class="nav-item">
          <a class="nav-link" href="#">Student</a>
        </li>
        </Link>
        
       
       
        
      </ul>
    </div>
    <div>
        <Link to={'/settings'}>
    <i class="fa fa-cogs" aria-hidden="true"></i>
        </Link>
    </div>
  </div>
</nav>
  )
}

export default Topbar