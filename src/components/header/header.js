import React, { Component } from 'react';
import Navigation from '../navigation/top-nav';
import Logo from '../logo/logo';
import './header.css'

// tenant name



class Header extends Component {
  render() {
    return (
       <header>
           <div class="logo pull-left"><Logo site="audiUsa"></Logo></div>
           <div class="pull-right"><Navigation></Navigation></div>
       </header>
       
    )}
}

export default Header;