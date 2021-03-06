import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Button, Jumbotron } from 'react-bootstrap';
import logo from './logo.svg';
import './style/App.css';
import style from './style/style.js';


//react-jsonschema-form
import Form from "react-jsonschema-form";
import {Controlled as CodeMirror} from 'react-codemirror2'

// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// router


//
import * as qs from 'query-string';

//components
import Home from './pages/home'
import Login from './pages/login';
import Header from './components/header/header';
import Collage from './components/collage/collage';
import Banner from './components/banner/banner';
import Products from './pages/products';
import PaymentForm from './payment';

// http cals methods 
const axios = require('axios');
let apiData = "test";

class App extends Component {
  constructor () {
  super()
    this.state = {
      user: null,
      tenantId: '001',
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
        },
        elements: {
          bannersData : [{
            title: "Account Management",
            image: "https://s7d9.scene7.com/is/image/Audiusastaging/audi-lifestyle-015?wid=307&fit=constrain"
          },{
            title: "Vehicle Details",
            image: "https://s7d9.scene7.com/is/image/Audiusastaging/audi-lifestyle-014?wid=430&fit=constrain"
          },{
            title: "Exclusive benefits",
            image: "https://s7d9.scene7.com/is/image/Audiusastaging/audi-lifestyle-016?wid=430&fit=constrain"
          }],
          carouselData: []
      }
      },
      verbiage: {
          bannerheading: "Explore myAudi",
      }
    }
    this.httpCall = this.httpCall.bind(this)
    this.backToDefault = this.backToDefault.bind(this)
  }

  componentDidMount() {
    // Typical usage (don't forget to compare props):
  }

   // App "actions" (functions that modify state)
   signIn(username, password) {
      // This is where you would call Firebase, an API etc...
      // calling setState will re-render the entire app (efficiently!)
      let tenantIdToPass ='';
      
      console.log('user', username +'-'+ password)
      this.setState({
        user: {
          username,
          password
        }
      })

      if (username === 'audi')
      {
        tenantIdToPass = '001'
      }

      else if (username === 'bugatti') {
        tenantIdToPass = '002'
      }
      this.getStyleConfig(tenantIdToPass);
      this.getVerbiageConfig(tenantIdToPass);
      this.getElementConfig(tenantIdToPass);
  }

  //Signout

  signOut() {
    // clear out user from state
    this.setState({user: null})
  }

  getTenatIdFromUrl() {
    let path = window.location.pathname;
    let getTenantId = path.slice(1)
    console.log(getTenantId);
  }

  getStyleConfig(tenantId) {
    let tenantIdFromAws = 'c9a19d70-c5b3-11e8-8576-a19a0b668508';
    // getting data based on data id later this would be handlled by api
    if (tenantId === '001'){tenantIdFromAws = '24d16b90-cbdf-11e8-9128-c9b3f8fe779d'} else if (tenantId === '002') {tenantIdFromAws = '9ed91910-cbe4-11e8-9128-c9b3f8fe779d'}
    const getTeantId = window.location.pathname.slice(1) || this.state.tenantId;
    const url =  'https://or2vtniqp9.execute-api.us-east-1.amazonaws.com/dev/style/' || '/dev/style/' || '/api/style-config/';
    axios.get(url + tenantIdFromAws, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      crossDomain: true
    })
    .then(response => {
      this.setState({site:response.data.site});
      console.log('UPDATED STATE', this.state);
      toast("Style config has been updated for " + response.data.tenantName +" !");
    }
    ).catch(error =>{
      toast("Not able to get Style config data, try again later!");
    });
  }

   // use this method in case of separate verbiage api
  getVerbiageConfig(tenantId) {
    const getTeantId = window.location.pathname.slice(1) || this.state.tenantId;
    axios.get('/api/verbiage-config/'+tenantId)
    .then(response => {
      this.setState({verbiage: response.data.details})
      toast("Verbiage config has been updated for " + response.data.tenantName +" !")
    }
    ).catch(error =>{
      toast("Not able to get Verbiage config, try again later!");
    });
  }

  // use this method in case of separate element api
  getElementConfig(tenantId) {
    const getTeantId = window.location.pathname.slice(1) || this.state.tenantId;
    axios.get('/api/element-config/'+tenantId)
    .then(response => {
      this.setState({element: response.data})
      console.log('data', response.data.details.bannersData);
      toast("Element config has been updated for " + response.data.tenantName +" !")
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
    const divStyle = {
      background: '#333',
    };

    const borderStyle = {
      background: '#c3c3c3'
    };
  
    const banner = {
      background: '#fff',
      padding: '10px'
    };

    const footer = {
      background: '#330c0c',
      color: '#fff',
      height: '50px',
      padding: '15px'
    };

    // banner data

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

    
        <BrowserRouter>
         <div> 
           {/* _Header_ */}
          <div class="row">
            <div class="col-lg-12" style={divStyle}>
            <Header site={this.state} signOutCallBack={this.signOut.bind(this)}></Header>
            </div>
          </div>

          <div>
            {
              (this.state.user) 
              ? 
             <Switch>
              <Route path="/"  render={(props) => <Home {...props} data={this.state} />} />
              <Route path="/products" component={Products} />
              {/* <Route path="/login" render={(props) => <Login {...props} onSignIn={this.signIn.bind(this)}/>} /> */}
             </Switch>
              : 
              <div>
                <Login onSignIn={this.signIn.bind(this)}/>  
              </div>
            }
          </div>
          

          {/* _content_ */}
            {/* <div class="row">
              <div class="col-lg-12" style={divStyle}>
              <Home data={this.state}></Home>
              </div>
            </div> */}
          </div>
       </BrowserRouter>  

          {/* _Footer_ */}
          <div class="row">
            <div class="col-lg-12" style={footer}>
            <p>Volkswagen. All rights reserved. © Copyright 2018</p>
            </div>
          </div>

          {/* _APi call buttons to test api calls_ */}
          {/* <div class="row">
            <div class="col-lg-12" style={divStyle}>
            <p className="App-intro">
            <button className="button" onClick={this.httpCall}>{this.state.site.name}--Call from DATA API!</button> 
              - <code>{this.state.msg}</code> -
              <button className="button" onClick={this.backToDefault}>Call from USER API!</button>
            </p>
            </div>
          </div> */}

        {/* _react-jsonschema-form test_ */}
      
        <div class="col-lg-4">
          {/* <Form schema={schema}
            formData={formData}
            uiSchema={uiSchema}
            onChange={log("changed")}
            onSubmit={onSubmit}
            onError={onError} >
            </Form> */}
        </div>

        <div class="col-lg-4">
        <div>
              {/* <button onClick={this.notify}>Notify !</button> */}
              <ToastContainer />
            </div>
        </div>

        <div class="col-lg-4">
        </div>
   
    </div>
 
    );
  }
}

export default App;
