import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';
import './style/App.css';

//react-jsonschema-form
import Form from "react-jsonschema-form";
import {Controlled as CodeMirror} from 'react-codemirror2'

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// router
import Products from './pages/products';

//
import * as qs from 'query-string';

//components
import Header from './components/header/header';
import Collage from './components/collage/collage';
import PaymentForm from './payment';

// http cals methods 
const axios = require('axios');
let apiData = "test";
let tenantId = "002";

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
      msg: 'default state msg',
      site: {
        name: 'audiUsa',
        style: {
          logo : {
            direction:'left'
          },
          nav : {
            direction:'right'
          }
        }
      },
      verbiage: {
          bannerheading: "Explore myAudi",
          banners: [{
            title: "Account Management",
            image: "account.jpg"
          }, {
            title: "Vehicle Details",
            image: "vehicle.jpg"
          }, {
            title: "Exclusive benefits & Content",
            image: "exclusive.jpg"
          }]
      }
    }
    this.httpCall = this.httpCall.bind(this)
    this.backToDefault = this.backToDefault.bind(this)
  }



  componentDidMount() {
    // Typical usage (don't forget to compare props):
    this.getStyleConfig();
    this.getVerbiageConfig();
  }

  getStyleConfig() {
    axios.get('/api/style-config/'+tenantId)
    .then(response => {
      this.setState({site:response.data.site})
      toast("Style config has been updated for " + response.data.tenantName +" !")
    }
    ).catch(error =>{
      toast("Not able to get Style config data, try again later!");
    });
  }

  getVerbiageConfig() {
    axios.get('/api/verbiage-config/'+tenantId)
    .then(response => {
      this.setState({verbiage:response.data.details})
      toast("Verbiage config been updated for " + response.data.tenantName +" !")
    }
    ).catch(error =>{
      toast("Not able to get Verbiage config, try again later!");
    });
  }

  httpCall() {
    axios.get('/api/style-config/002')
      .then(response => {
        this.setState({msg: response.data.msg})
        toast("Message has been updated for " + response.data.tenantName +" !")
      }
    ).catch(error =>{
      toast("Not able to get data from data API, Tyr again later!");
    });
  }

  backToDefault() {
    axios.get('/user/hello')
      .then(response => this.setState({msg:  response.data.express}).
      toast("Wow so easy !")
    )
     
  }
  
  notify = () => toast("Wow so easy !");

  render() {
    // this.getStyleConfig();
    // this.httpCall();
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


    // react-jsonschema-form schema starts
    const schematest = {
      title: "Todo",
      type: "object",
      required: ["title"],
      properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false}
      }
    };
     
    let schema = {
      "title": "A registration form",
      "description": "A simple form example.",
      "type": "object",
      "required": [
        "firstName",
        "lastName"
      ],
      "properties": {
        "firstName": {
          "type": "string",
          "title": "First name"
        },
        "lastName": {
          "type": "string",
          "title": "Last name"
        },
        "age": {
          "type": "integer",
          "title": "Age"
        },
        "bio": {
          "type": "string",
          "title": "Bio"
        },
        "password": {
          "type": "string",
          "title": "Password",
          "minLength": 3
        },
        "telephone": {
          "type": "string",
          "title": "Telephone",
          "minLength": 10
        }
      }
    };

    let uiSchema = {
      "firstName": {
        "ui:autofocus": true,
        "ui:emptyValue": ""
      },
      "age": {
        "ui:widget": "updown",
        "ui:title": "Age of person",
        "ui:description": "(earthian year)"
      },
      "bio": {
        "ui:widget": "textarea"
      },
      "password": {
        "ui:widget": "password",
        "ui:help": "Hint: Make it strong!"
      },
      "date": {
        "ui:widget": "alt-datetime"
      },
      "telephone": {
        "ui:options": {
          "inputType": "tel"
        }
      }
    };
    let formData = {
      "firstName": "Chuckgdfgdf",
      "lastName": "Norris",
      "age": 75,
      "bio": "Roundhouse kicking asses since 1940",
      "password": "noneed"
    };
    const log = (type) => console.log.bind(console, type);
    const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);
    const onError = (errors) => console.log("I have", errors.length, "errors to fix");
    const liveValidate = true;
    // react-jsonschema-form end

    return (
      /* _Layout_ */
      <div className="App" >
 
      {/* _Header_ */}
      <div class="row">
        <div class="col-lg-12" style={divStyle}>
        <Header site={this.state.site}></Header>
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
         <h1 class="pull-left" style={bannerHeading}>{this.state.verbiage.bannerheading}</h1>
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

       {/* _APi call buttons to test api calls_ */}
      <div class="row">
        <div class="col-lg-12" style={divStyle}>
        <p className="App-intro">
         <button className="button" onClick={this.httpCall}>{this.state.site.name}--Call from DATA API!</button> 
           - <code>{this.state.msg}</code> -
          <button className="button" onClick={this.backToDefault}>Call from USER API!</button>
         </p>
        </div>
      </div>

     {/* _react-jsonschema-form test_ */}
   
     <div class="col-lg-4">

      <Form schema={schema}
        formData={formData}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={onError} >
        </Form>
     </div>

     <div class="col-lg-4">
     <div>
          <button onClick={this.notify}>Notify !</button>
          <ToastContainer />
        </div>
     </div>

     <div class="col-lg-4">
    </div>
         <Router>
          <Route exact path='/:tenantId' component={Products}></Route>
         </Router>
    </div>
    );
  }
}

export default App;
