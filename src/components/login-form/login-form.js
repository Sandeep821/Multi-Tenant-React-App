import React, { Component } from 'react';
import { Button, FormGroup,  ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

class LoginForm extends React.Component {
  
    // Using a className based component here because we're accessing DOM refs
   
    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      if ((username === 'audi' || username === 'bugatti') && password === 'demo'){
        this.props.onSignIn(username, password)
      }
      else {
          alert('Wrong user Id or password, try again!')
      }
    }
    
    render() {

        const wrapper = {
            margin: '120px 0'
        }

      return (
      <form onSubmit={this.handleSignIn.bind(this)}>
   
        <div className="row" style={wrapper}>
            <div className="col-lg-4 offset-lg-4"> <h1 className="pull-left" >Login</h1></div>
            <div className="col-lg-4 offset-lg-4">
                <div className="form-group">
                <label for="username" className="pull-left">User Name</label>
                <input className="form-control" type="text" ref="username" placeholder="enter username" />
                </div>
                <div className="form-group">
                <label for="username" className="pull-left">Password</label>
                <input className="form-control" type="password" ref="password" placeholder="enter password" />
                </div>

                <button type="submit" className="btn btn-primary" value="Login" >Login</button>
            </div>
        </div>
      </form>
      )
    }

  }

  export default LoginForm;