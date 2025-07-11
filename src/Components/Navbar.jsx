import React from 'react'

import '../Styles/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar() {

    const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div className="container p-2">
        <h1 onClick={()=>navigate("/")} className='myname'>Sufyan Chohan</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <div className='ms-auto d-flex gap-5 navbar-nav'>
         <div className='itemnav'>Education</div>
          <a href="#expsec"><div className='itemnav'>Experience</div></a>
          <a href="#skillsec"> <div className='itemnav'>Skills</div></a>
          <div className='itemnav'>Work</div>
          </div>
        </div>
      </div>
    </nav>
  )
}
