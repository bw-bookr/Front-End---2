import React from "react";
import axios from 'axios';

import { Route } from 'react-router-dom';

import App from "../App";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
  }

  changes = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logInOther = event => {
      event.preventDefault();
      const baseUrl = ("https://bookr-app-backend.herokuapp.com/api/user-access/login");
      console.log("line23");

    // const user = this.state.username;

    axios
      .post(baseUrl, this.state)
      .then(res => { 
          console.log(res);
          localStorage.setItem("jwt", res.data.token)
          this.setState({ loggedIn: true })
          this.props.history.push('/books');
    })
    .catch(err => console.log(err));
    //   localStorage.setItem("user", user);

    if (this.state.username) {
        console.log(this.state);
        return < App />
    } else {
    //   return <App />;
    }
  };

  render() {
    return (
      <div className="loginMain">
        <h2>Welcome</h2>

        <div>
          <div className="comment">
            <form className="addcomment">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.changes}
              />
              <hr />
              <input
                type="text"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.changes}
              />
              <hr />

              <button onClick={this.logInOther}>
                <strong>LOGIN</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;