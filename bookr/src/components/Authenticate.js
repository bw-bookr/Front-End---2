import React from 'react';

const authenticate = App => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: null
      };
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
          this.setState({
            loggedIn: true
          });
        } else {
          this.setState({
            loggedIn: false
          });
        }
      }
  
      logInStuff = () => {
        if (this.state.loggedIn === false) {
          return <Login />;
        } else {
          return <App />;
        }
      };
  
      render() {
        return this.logInStuff();
      }
    };
  
  export default authenticate;