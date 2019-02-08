import React from "react";
import axios from 'axios';

import './Login.css';

import { Route } from 'react-router-dom';

import App from "../App";

import {
    Container,
    Row,
    Col,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button,
    Navbar,
    NavbarBrand
  } from "reactstrap";
  
  import { FormControl } from "react-bootstrap";

  const style = {
    height: "100vh"
  };

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
          localStorage.setItem("user_id", res.data.user_id)
          localStorage.setItem("username", res.data.username)
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
  
      <>
        <Navbar
          id="nav"
          className="navbar navbar-expand-lg fixed-top navbar-light nav-lg"
        >
          <Container>
            <NavbarBrand href="/"></NavbarBrand>
          </Container>
        </Navbar>
        <Row style={style}>
          <Col className="col-xl-4 col-lg-5 col-md-6 col-sm-12 align-self-center cover-text text-center px-5 animated fadeIn">
        
        <div className="login">
            {/* <h2>Login to Bookr</h2> */}
            <Form action="">
              <InputGroup className="input-group mb-3 input-group-lg">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="basic-addon1">
                    <i className="far fa-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <FormControl
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.changes}
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="input-group mb-3 input-group-lg">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="basic-addon1">
                    <i className="fas fa-key" />
                  </InputGroupText>
                </InputGroupAddon>
                <FormControl
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.changes}
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <div className="loginButton">
              <Button color="primary" size="lg" onClick={this.logInOther}>
                Submit{" "}
              </Button>
              </div>
            </Form>
            </div>
          </Col>
          <Col className="col-xl-8 col-lg-7 col-md-6 col-sm-12 cover-img" />
        </Row>
      </>
    );
  }
}

export default Login;








  //   render() {
//     return (
//       <div className="loginMain">
//         <h2>Welcome</h2>

//         <div>
//           <div className="comment">
//             <form className="addcomment">
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="Username"
//                 value={this.state.username}
//                 onChange={this.changes}
//               />
//               <hr />
//               <input
//                 type="text"
//                 name="password"
//                 placeholder="password"
//                 value={this.state.password}
//                 onChange={this.changes}
//               />
//               <hr />

//               <button onClick={this.logInOther}>
//                 <strong>LOGIN</strong>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;