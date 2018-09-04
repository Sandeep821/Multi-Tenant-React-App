import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './top-nav.css';
class Navigation extends Component {
  render() {
    return (
        <nav>
          <ul>
            <li className="first">
              <div to='/'><a>Home &nbsp;&nbsp;|</a></div>
            </li>
            <li>
              <div to='/Products'><a>Products &nbsp;&nbsp;|</a></div>
            </li>
            <li className="last">
              <div to='/Contact'><a>Contact &nbsp;&nbsp;</a></div>
            </li>
          </ul>
        </nav>
    )}
}
export default Navigation;