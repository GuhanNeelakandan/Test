import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Settings() {
  return (
    <div>Settings
        <div>
            <Link to={'profile'}>
            <button>Profile</button>
            </Link>
            <Link to={'general'}>
            <button>General</button>
            </Link>
            <Link to={'company'}>
            <button>Company Details</button>
            </Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Settings