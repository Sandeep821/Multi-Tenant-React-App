import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './top-nav.css';
import Products from '../../pages/products';

//components


class Navigation extends Component {
  render() {
    return (
     
      <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link> &nbsp;&nbsp;| &nbsp;&nbsp;
            </li>
            <li>
             <Link to="/products">Products</Link> &nbsp;&nbsp;| &nbsp;&nbsp;
            </li>
            <li className="last">
            <Link to="/">Logout</Link>
            </li>
          </ul>
    </nav>

    )}
}
export default Navigation;

