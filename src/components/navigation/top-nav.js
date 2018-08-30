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
              <div to='/'>Home</div>
            </li>
            <li>
              <div to='/Products'>Products</div>
            </li>
            <li className="last">
              <div to='/Contact'>Contact</div>
            </li>
          </ul>
        </nav>
    )}
}
export default Navigation;

