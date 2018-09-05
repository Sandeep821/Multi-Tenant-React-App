import React, { Component } from 'react';
import Navigation from '../navigation/top-nav';
import Logo from '../logo/logo';
import './header.css'

// tenant name

class Header extends Component {
  render() {
    return (
       <header>
           {/*use site name auid or bugatti*/}
           <div className={'logo ' + 'logo-'+this.props.site.style.logo.direction}>
           <Logo site={this.props.site.name}></Logo></div>
           <div className={this.props.site.style.nav.direction}><Navigation></Navigation></div>
       </header>
    )}
}

export default Header;