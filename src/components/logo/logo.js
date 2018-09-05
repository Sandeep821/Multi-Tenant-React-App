import React, { Component } from 'react';
import './logo.css'
import logo from '../../static/media/audi_logo.png';

//dynamic images import

class Logo extends Component {
  render() {
    return (
           <div className={'logo ' + this.props.site}  >
           </div>
    )}
}

export default Logo;