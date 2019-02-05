import React from "react";

import App from "./../../App";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedIn: null
    };
  }

  changes = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logInOther = event => {
    const user = this.state.username;

    if (this.state.username) {
      localStorage.setItem("user", user);
    } else {
      return <App />;
    }
  };

  render() {
    return (
      <div className="postmain">
        <h1>LOGIN PAGE</h1>

        <div>
          <div className="comment">
            <form className="addcomment">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.comment}
                onChange={this.changes}
              />
              <hr />
              <input
                type="text"
                name="password"
                placeholder="password"
                value={this.state.comment}
                onChange={this.changes}
              />
              <hr />

              <button onClick={this.logInOther}>
                <strong>LogIn!</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;