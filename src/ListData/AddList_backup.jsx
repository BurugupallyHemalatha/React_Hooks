import React, { Component } from 'react';
import '../style.css';

class AddList extends React.Component {
  constructor() {
    super();
    this.state = {
      myDetails: {},
      errors: {},
      showFormSuccess: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  handleChange(e) {
    let myDetails = this.state.myDetails;
    myDetails[e.target.name] = e.target.value;
    this.setState({
      myDetails
    });
  }

  renderSuccessMessage() {
    return (
      <div className={"sucess"} role="alert">
        Form was successfully validated and is ready to be submitted!
      </div>
    );
  }

  onAddSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let myDetails = {};
        myDetails["name"] = "";
        myDetails["age"] = "";
        this.setState({
          myDetails:myDetails,
          showFormSuccess: true
        });
        setTimeout(() => {
          this.setState({
            showFormSuccess: false
          });
        }, 5000)
    }
  }

  validateForm() {
    let myDetails = this.state.myDetails;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!myDetails["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }

    if (typeof myDetails["name"] !== "undefined") {
      if (!myDetails["name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
      }
    }

    //Age
    if (!myDetails["age"]) {
      formIsValid = false;
      errors["age"] = "*Please enter your age.";
    }

    if (typeof myDetails["age"] !== "undefined") {
      if (!myDetails["age"].match(/^\d+/)) {
        formIsValid = false;
        errors["age"] = "*Please enter Numbers only.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  render() {
    return (
      <div className="add_form">
        <form onSubmit={this.onAddSubmit}>
          <h4>Add the list</h4>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Name"
            name="name" 
            value={this.state.myDetails.name} 
            onChange={this.handleChange}
            autocomplete="off"
          />
          <small className="errorMsg">{this.state.errors.name}</small>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Age" 
            ref={ageInput => this.ageInput = ageInput}
            name="age" 
            value={this.state.myDetails.age} 
            onChange={this.handleChange}
            autocomplete="off"
          />
          <small className="errorMsg">{this.state.errors.age}</small>
          <button className="btn">Add</button>
        </form>
        {this.state.showFormSuccess ? this.renderSuccessMessage() : null}
      </div>
    );
  }
}

export default AddList;
