import React from 'react';

const Authenticate = App => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: null
      };
    }

    componentDidMount() {

        if (localStorage.getItem('jwt')) {
            console.log(this.state.loggedIn);
          this.setState({
            loggedIn: true
          });
        } else {
          this.setState({
            loggedIn: false
          });
        }
      }

      componentDidUpdate() {
          console.log('anything');
          return this.logInStuff();
      }
  
      logInStuff = () => {
        if (this.state.loggedIn === false) {
          return <Login />;
        } else {
            console.log('working');
          return <App />;
        }
      };
  
      render() {
          console.log(this.state.loggedIn);
        return this.logInStuff();
      }
    };
  
  export default Authenticate;