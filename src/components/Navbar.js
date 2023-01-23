import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from './monkey-logo1.png'

export default class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
            <img src={logo} alt="NewsMonkey"></img>
            <Link className="navbar-brand"  style={{color: 'white'}} to="/">NewsMonkey</Link>
            <button className="navbar-toggler"  style={{backgroundColor: 'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active"  style={{color: 'grey'}} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  style={{color: 'grey'}} to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  style={{color: 'grey'}} to="/business">Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  style={{color: 'grey'}} to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  style={{color: 'grey'}} to="/health">Health</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  style={{color: 'grey'}} to="/science">Science</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  style={{color: 'grey'}} to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link"  style={{color: 'grey'}} to="/technology">Technology</Link>
                </li>
                </ul>
            </div>
        </div>
        </nav>        
      </div>
    )
  }
}
