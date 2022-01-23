import React, { Component } from 'react';
import './style.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.OnSubmitLogin = this.OnSubmitLogin.bind(this);
  }

  handleChange(e) {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({
      user
    });
  }

  OnSubmitLogin(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let user = {};
        user["emailid"] = "";
        user["password"] = "";
        this.setState({user:user});
        alert("Form submitted");
    }
  }

  validateForm() {
    let user = this.state.user;
    let errors = {};
    let formIsValid = true;

    if (!user["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof user["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(user["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!user["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof user["password"] !== "undefined") {
      if (!user["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div className="logincontainer">
        <h1>Login</h1>
        <div onClick={() => {
          if(this.props.onClose){
            this.props.onClose(true);
          }
        }} className="loginclose">X</div>
        <div className="loginform">
          <form onSubmit={this.OnSubmitLogin}>
            <label>Email</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="example@example.com" 
              name="email" 
              value={this.state.user.email} 
              onChange={this.handleChange}
            />
            <small className="errorMsg">{this.state.errors.email}</small>
            <label>Password</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="password"
              name="password" 
              value={this.state.user.password} 
              onChange={this.handleChange}
            />
            <small className="errorMsg">{this.state.errors.password}</small>
            
            <input type="submit" className="btn"  value="Login"/> 
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
