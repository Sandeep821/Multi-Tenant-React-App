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
           <div className={'logo ' + 'logo-'+this.props.site.site.style.logo.direction}>
           <Logo user={this.props.site.user} site={this.props.site.site.name}></Logo></div>
           <div className={this.props.site.site.style.nav.direction}><Navigation data={this.props} signOutCallBackHeader={this.props.signOutCallBack}></Navigation></div>
       </header>
    )}
}

export default Header;