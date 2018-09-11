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
              <div to='/'><a href="/">Home &nbsp;&nbsp;|</a></div>
            </li>
            <li>
              <div to='/products'><a href="/products">Products &nbsp;&nbsp;|</a></div>
            </li>
            <li className="last">
              <div to='/Contact'><a>Contact &nbsp;&nbsp;</a></div>
            </li>
          </ul>
          <Router>
         <Route exact path='/products' component={Products}></Route>
        </Router>
        </nav>

    )}
}
export default Navigation;

