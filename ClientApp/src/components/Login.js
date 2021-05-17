import React, { Component, setState } from 'react';
//ange localhost nummer till min api länken. den nummer hittas i projekts properties, debug.
const User_URL = 'https://localhost:44322/User/signup'; 

export class Login extends Component {
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

   state = {
    email: "",
    password: ""
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
  registerUser = (e) => {
    e.preventDefault();
    fetch(User_URL, {
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
  }


    

  render() {
    return (
      <div className="parent-element">

        <form
          onSubmit={this.registerUser}>
        
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
          <button>Register</button>


        </form>

      </div>
    );
   }
  }