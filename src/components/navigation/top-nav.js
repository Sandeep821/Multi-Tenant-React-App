import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './top-nav.css';


//components
import Logout from '../logout/logout'
import Products from '../../pages/products';


class Navigation extends Component {
  render() {
    console.log('this.props.data.user -NAV', this.props.data)
    return (
   <div>
      {
      (this.props.data.site.user) ?
      <nav>
        <ul>
          <li className="first">
            <Link to="/">Home</Link> &nbsp;&nbsp;| &nbsp;&nbsp;
          </li>
          <li>
          <Link to="/products">Products</Link> &nbsp;&nbsp;| &nbsp;&nbsp;
          </li>
          <li className="last">
          <Logout user={this.props.data.site.user} signOutCallBackNav={this.props.signOutCallBackHeader}></Logout>
          </li>
        </ul>
      </nav>
        :
        ''
    }
   </div>
    )}
}
export default Navigation;

