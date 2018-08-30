import React, { Component } from 'react';
import Navigation from '../navigation/top-nav';
import './header.css'


class Header extends Component {
  render() {
    return (
       <header>
           <div class="pull-left">LOGO</div>
           <div class="pull-right"><Navigation></Navigation></div>
       </header>
    )}
}

export default Header;