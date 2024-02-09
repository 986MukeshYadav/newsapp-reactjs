import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              
       <li className="nav-item"><Link className="nav-link" to="/business"> Business</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/entertainment"> Entertainment</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/general"> General</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/health"> Health</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/science"> Science</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/sports"> Sports</Link></li>
       <li className="nav-item"><Link className="nav-link" to="/technology"> Technology</Link></li>
      
    </ul>
   
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
