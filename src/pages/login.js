import React, { Component } from "react";
import LoginForm from '../components/login-form/login-form'

class Login extends Component {
  componentDidMount () {
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="content">
          <p>
            <br/>  
            <LoginForm onSignIn={this.props.onSignIn.bind(this)}></LoginForm>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
