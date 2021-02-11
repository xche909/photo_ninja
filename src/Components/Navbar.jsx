import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="nav-wrapper transparent">
            <div className="container">
              <a href="" className="brand-logo">
                Photo Ninja
              </a>
              <a href="" className="sidenav-trigger" data-target="mobile-menu">
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <a href="#photo">Photos</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tooltipped btn-floating btn-small indigo darken-4"
                    data-tooltip="This is instagram"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tooltipped btn-floating btn-small indigo darken-4"
                    data-tooltip="This is facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tooltipped btn-floating btn-small indigo darken-4"
                    data-tooltip="This is twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="tooltipped btn-floating btn-small indigo darken-4"
                    data-tooltip="This is linkedin"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
              <ul className="sidenav grey lighten-2" id="mobile-menu">
                <li>
                  <a href="#">Photos</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
