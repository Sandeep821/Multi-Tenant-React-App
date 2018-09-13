import React, { Component } from 'react';

class Logout extends React.Component {
    
    render() {
      const welcomeWrapper = {
        color: 'yellow',
        margin: '0 0 10px 0'
      }
      const userName = {
        textTransform: 'Uppercase',
        margin: '5px'
      }
      return (
        <div>
          <div style={welcomeWrapper}> Welcome <strong style={userName}>{this.props.user.username}</strong>!</div>
           
            <a href="javascript:;" onClick={this.props.signOutCallBackNav}>Sign out</a>
      </div>
      )
    }
  }
  export default Logout;