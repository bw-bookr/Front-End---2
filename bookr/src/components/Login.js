import React from "react";
import axios from 'axios';

import App from "../App";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    //   loggedIn: null
    };
  }

  changes = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logInOther = event => {
      event.preventDefault();
      const baseUrl = ("http://localhost:8000/api/user-access/login");
      console.log("line23");

    // const user = this.state.username;

    axios
      .post(baseUrl, this.state)
      .then(res => { 
          console.log(res);
          localStorage.setItem("jwt", res.data.token)
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