import React, { Component } from 'react';
import '../style.css';

class AddList extends React.Component {
  constructor(props) {
    super(props);
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
    alert('sucess')
    return (
      <div className={"sucess"} role="alert">
        Form was successfully validated and is ready to be submitted!
      </div>
    );
  }

  onAddSubmit(e) {
    e.preventDefault();
    let myDetails = this.state.myDetails;
    var name = myDetails["name"]
    var age = myDetails["age"]
    this.props.onAdd(name, age)
    // myDetails["name"] = "";
    // myDetails["age"] = "";    
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
          <small className="errorMsg">{this.props.errorsName}</small>
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
          <small className="errorMsg">{this.props.errorsAge}</small>
          <button className="btn">Add</button>
        </form>
        {this.props.showFormSuccess1 ? this.renderSuccessMessage() : null}
      </div>
    );
  }
}

export default AddList;
