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
    const divStyle = {
      background: '#333'
    };

    const borderStyle = {
      background: '#c3c3c3'
    };
  
    const banner = {
      background: '#fff',
      padding: '10px',
      height: '300px'
    };

    const bannerHeading = {
      margin: '10px 0 20px -8px'
    }

    const footer = {
      background: '#330c0c',
      color: '#fff',
      height: '50px',
      padding: '15px'
    };
    return (
      /* _Layout_ */
      <div className="App" >
 
    {/* _Header_ */}
    <div class="row">
      <div class="col-lg-12" style={divStyle}>
      <Header></Header>
      </div>
    </div>
     

      {/* _Collage_ */}
      <div class="row">
      <div class="col-lg-12" style={divStyle}>
      <Collage></Collage>
      </div>
      </div>

      
      {/* _Content_ */}
      <div class="row">
      <div class="col-lg-12" style={borderStyle}>
      
      </div>
      </div>

      {/* _Banner_ */}
      <div class="row align-items-start">
         <div class="col-lg-10 offset-lg-3">
         <h1 class="pull-left" style={bannerHeading}>Explore myAudi</h1>
        </div>

        {/*- Banner 1-*/}
        <div class="col-lg-2  offset-lg-3" style={banner}>
        <img class="pull-left" width={350} height={200} src="https://s7d9.scene7.com/is/image/Audiusastaging/audi-lifestyle-015?wid=307&fit=constrain"></img>
        <h2 class="pull-left">Account Management</h2>
        </div>

        {/*- Banner 2-*/}
        <div class="col-lg-2" style={banner}>
        <img class="pull-left" width={350} height={200} src="https://s7d9.scene7.com/is/image/Audiusastaging/audi-lifestyle-014?wid=430&fit=constrain"></img>
        <h2 class="pull-left">Vehicle Details</h2>
        </div>

        {/*- Banner 3-*/}
        <div class="col-lg-2" style={banner}>
        <img class="pull-left" width={350} height={200} src="https://s7d9.scene7.com/is/image/Audiusastaging/audi-lifestyle-016?wid=430&fit=constrain"></img>
        <h2 class="pull-left">Exclusive benefits & Content</h2>
        </div>

      </div>


      {/* _Footer_ */}
      <div class="row">
        <div class="col-lg-12" style={footer}>
        <p>Audi of America. All rights reserved. © Copyright 2018</p>
        </div>
      </div>

      <div class="row">
      <div class="col-lg-12" style={divStyle}>
      <p className="App-intro">
        <button className="button" onClick={this.httpCall}>Call from DATA API!</button> 
         - <code>{this.state.msg}</code> -
         <button className="button" onClick={this.backToDefault}>Call from USER API!</button>
      </p>
      </div>
      </div>

    </div>
    );
  }
}

export default App;
