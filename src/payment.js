import React, { Component } from 'react';

export default class paymentForm extends Component {
  render() {
    return (
      <div className="container">
        <form className="row">
          <div className="form-group col-lg-4">
            <label className="control-label" for="firstName">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              name="firstName"
            />
          </div>
          <div className="form-group col-lg-4">
            <label className="control-label" for="lastName">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              name="lastName"
            />
          </div>
          <div className="form-group col-lg-4">
            <label className="control-label" for="age">
              Age:
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age"
              name="age"
            />
          </div>
          <div className="form-group col-lg-12">
            <label className="control-label" for="gender">
              Gender:
            </label>
            <div className="radio">
              <label className="radio-inline">
                <input type="radio" name="gender" /> Male
              </label>
              <label className="radio-inline">
                <input type="radio" name="gender" /> Female
              </label>
            </div>
          </div>
          <div className="form-group col-lg-12">
            <label className="control-label" for="option">
            option:
            </label>
            <div className="checkbox">
              <label>
                <input type="checkbox" name="option" /> option01
              </label>
              <label>
                <input type="checkbox" name="option" /> option02
              </label>
              <label>
                <input type="checkbox" name="option" />option03
              </label>
            </div>
          </div>
     
          <div className="form-group">
            <div className="col-lg-12">
              <button type="submit" class="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
