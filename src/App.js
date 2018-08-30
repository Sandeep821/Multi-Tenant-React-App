import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';


//components
import Header from './components/header/header';
import Collage from './components/collage/collage';
import PaymentForm from './payment';

// http cals methods 
const axios = require('axios');
let apiData = "test";


const Home = () => (
  <div>
    <Header></Header>
      <hr />
        
          <div>

    </div>
  </div>
);

class App extends Component {
  constructor () {
  super()
    this.state = {
      msg: 'default state msg'
    }
    this.httpCall = this.httpCall.bind(this)
    this.backToDefault = this.backToDefault.bind(this)
  }

  httpCall() {
    axios.get('/api/test')
      .then(response => this.setState({msg: response.data.express}))
  }

  backToDefault() {
    axios.get('/user/hello')
      .then(response => this.setState({msg:  response.data.express}))
  }

  render() {
    return (
 
      <div className="App" >
      <Header></Header>
      <Collage></Collage>
        <p className="App-intro">
        <button className="button" onClick={this.httpCall}>Call from DATA API!</button> 
         - <code>{this.state.msg}</code> -
         <button className="button" onClick={this.backToDefault}>Call from USER API!</button>
      </p>
      </div>
    );
  }
}

export default App;
