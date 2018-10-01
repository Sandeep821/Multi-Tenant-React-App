import React, { Component } from 'react';
import './logo.css'
import logo from '../../static/media/audi_logo.png';

//dynamic images import

class Logo extends Component {
  render() {
    console.log('from Logo', this.props.user );
    return (
      <div>
         {
            (this.props.user) ?
            <div className={'logo ' + this.props.site}  >
            </div> :
             <div className="vw-logo"><h1>VW CREDIT, INC</h1></div>
         }
      </div>
    )}
}

export default Logo;