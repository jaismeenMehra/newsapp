import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#3A833A "}}>
          <div className="container-fluid" >
          <a className="navbar-brand" href="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHwvkQOk3wPF8748LX725ecvC3jiJ2f1lUEA&usqp=CAU" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"  style={{marginRight : "5px"}} />
      NewsMonkey
    </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
