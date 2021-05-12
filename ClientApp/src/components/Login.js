import React, { Component, setState } from 'react';
import axios from "axios";
const User_URL = "https://localhost:3000/user" 

export class Login extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  static displayName = Login.name;
  state = {
    email: "",
    password: ""
  };

  register(email, password) {
    return axios.post(User_URL, {
      email,
      password
    });
  }
  onChangeEmail(e) {
  this.setState({
      email: e.target.value
    });
    console.log('change email triggered')

  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  //onChange= 

  handleRegister(event) {
    event.preventDefault();
    this.register(
      this.state.email,
      this.state.password
  );
  console.log('Handle register called successfuly')
  }




  render() {
    return (
      <div className="parent-element">

        <form
          onSubmit={this.handleRegister}>
        
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
             />

          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />
          <button type="submit">Register</button>


        </form>

      </div>
    );
   }
  }