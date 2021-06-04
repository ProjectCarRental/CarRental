import React, { Component, useState } from 'react';
import './Login.css';
//ange localhost nummer till min api länken. den nummer hittas i projekts properties, debug.
const User_URL = 'https://localhost:44322/User/signup';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  state = {
    email: "",
    password: "",
    lastname: "",
    firstname: ""
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

  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value
    });
    console.log('change name triggered')

  }

  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
    console.log('change last name triggered')

  }
  //Jag har använd fetch istället för axios som hede cors problem att fixa.
  registerUser = (e) => {
    e.preventDefault();
    fetch('api/Customers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname
      })

    })
      .then(response => response.json())
      .then(json => console.log(json))
      .then(data => this.setState({
        email: data.email,
        password: data.password,
        firstname: data.firstname,
        lastname: data.lastname
        }))
      .catch(err => console.log(err));
    alert('Registration successfully done! Press OK to redirect to Login page ');
    this.props.history.push('/login')
  }


  render() {
    return (
      <div className="body">
        <div className="login-page">
          <div class="form">
            <form class="login-form" onSubmit={this.registerUser}>
              <input
                data-cy="firstname"
                type="text"
                placeholder="Namn"
                name="firstname"
                value={this.state.firstname}
                onChange={this.onChangeFirstName}
              />
              <input
                data-cy="lastname"
                type="text"
                placeholder="Efternamn"
                name="lastname"
                value={this.state.lastname}
                onChange={this.onChangeLastName}
              />
              <input
                data-cy="email"
                type="text"
                placeholder="email"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
              <input
                data-cy="password"
                type="Lösenord"
                placeholder="Lösenord"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
              <button data-cy="AddCustomer-button" onClick={this.registerUser}>Skapa</button>
                  <p class="message">Redan Registrerad?  <a href="/login">Logga in</a> </p>
                </form>
          </div>
        </div>

      </div>
    );
  }

}