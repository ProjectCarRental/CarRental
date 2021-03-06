import React, { Component, useState } from 'react';
import './Login.css';
//ange localhost nummer till min api länken. den nummer hittas i projekts properties, debug.
const User_URL = 'https://localhost:44322/User/login'; 

export class Login extends Component {
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

   state = {
    email: "",
     password: "",
  };

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
 //Jag har använd fetch istället för axios som hede cors problem att fixa.
  loginUser = (e) => {
    e.preventDefault();
    fetch('api/customer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
        })

    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(data => this.setState({
        email: data.email,
        password: data.password
      }))
 
      .catch(err => console.log(err));
    alert('login successfully done!  Press OK to redirect to Home page');
    this.props.history.push('/')

  }


  render() {
    return (
      <div>
             <div className="login-page">
          <div class="form">
            <form class="login-form" onSubmit={this.loginUser}>
              <input
                data-cy="loginEmail"
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <input
                data-cy="loginPassword"
                type="Lösenord"
                placeholder="Lösenord"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}

              />
              <button data-cy="SubmitLogin-button">Logga in</button> 
                <p class="message">Inte registrerad?  <a data-cy="SignUp-button" href="/signup" onClick={() => this.state.login}> Registrera</a></p>
              </form>
          </div>
            </div>

       </div>
    );
  }
 }