import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  // const setRedTheme = ()=>{
  //   props.updateDarkMode("rgb(32, 19, 19)")
  // }
  // const setBlueTheme = ()=>{
  //   props.updateDarkMode("rgb(20, 19, 32)")
  // }
  // const setGreenTheme = ()=>{
  //   props.updateDarkMode("rgb(19, 32, 23)")
  // }
  // const setDarkTheme = ()=>{
  //   props.updateDarkMode("rgb(39, 39, 39)")
  // }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          {/* <button className="btn btn-outline-danger mx-2" type="red" onClick={setRedTheme}>  </button>
          <button className="btn btn-outline-primary mx-2" type="blue" onClick={setBlueTheme}>  </button>
          <button className="btn btn-outline-success mx-2" type="green" onClick={setGreenTheme}>  </button>
          <button className="btn btn-outline-secondary mx-2" type="dark" onClick={setDarkTheme}>  </button> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
            <input className="form-check-input" type="checkbox" onClick={props.changeMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable {props.mode==='light'?'dark':'light'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

Navbar.defaultProps = {
  title: 'Your Title Goes Here'
}