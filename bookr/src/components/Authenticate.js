// import React from 'react';


// const Authenticate = Books => Login =>
//   class extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//         loggedIn: false
//       };
//     }
//     componentDidMount() {
//       //(!localStorage.getItem('jwt')) ? this.setState({loggedIn:true}) : this.setState({loggedIn:false})
//       // if (!localStorage.getItem('jwt')) {
//       //   console.log("No jwt");
//       //   this.setState({ loggedIn: false });
//       // } else {
//       //   console.log("jwt exists");
//       //   this.setState({ loggedIn: true });
//       //   this.props.history.push('/BookList');
//       // }
//       const usr = localStorage.getItem('jwt');
//       console.log("USR -> ", usr);
//       if (usr != 'undefined' || usr != null) {
//         this.setState({ loggedIn: true}, () => {
//           console.log("STATE -> ", this.state.loggedIn);
//         });
//       } else {
//         this.setState({ loggedIn: false}, () => {
//           console.log("STATE -> ", this.state.loggedIn);
//         });
//       }





//     }
//     render() {
//       console.log("Check Render:  ", this.state.loggedIn);
//       if (this.state.loggedIn) return <Books />;
//       return <Login />;
//     }
//   };

// export default Authenticate;




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