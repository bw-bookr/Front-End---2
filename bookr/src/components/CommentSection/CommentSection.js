import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

import CommentModal from './CommentModal';

import axios from 'axios';

  class CommentSection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: [],
        rating: 0,
        comment: '',
        users: []
      };
    }

    componentDidMount() {
        console.log('this is props id', this.props.id);
    axios
    .get(`https://bookr-app-backend.herokuapp.com/api/book-review/book_review/${this.props.id}`)
    .then(response => {
      const reviews = response.data.reviews;
      console.log(reviews);

      this.setState({ comments: reviews })
    })

axios 
  .get('https://bookr-app-backend.herokuapp.com/api/user-access/users')
  .then(response => {
      const users = response.data.users;
      console.log(users);

      this.setState({ users })
  })
  }



  
    componentWillUnmount() {
        this.setComments();
    }
  
    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    };
  
    commentsHandler = e => {
        console.log("Working!")
        this.setState({ comment: e.target.value }, () => console.log(this.state.comment));
    };

    ratingHandler = e => {
        console.log("Working!")
        this.setState({ rating: e.target.value }, () => console.log(this.state.rating));
    };
  
    handleCommentSubmit = e => {
        e.preventDefault();
        console.log(this.state.comment)
        const userId = localStorage.getItem('user_id') 
        const username = localStorage.getItem('username') 
        const newComment = { review: this.state.comment, user_id: userId, rating: this.state.rating };
        let comments = this.state.comments;
        comments.push(newComment);
        console.log(newComment)
        // this.setState({ comments, comment: '' });
        // setTimeout(() => {
        //     this.setComments();
        // }, 500);
        
        const review1 = {
            review: this.state.comment,
            rating: this.state.rating
          }
          const token = localStorage.getItem('jwt');
          console.log(token);
          console.log(review1);
            const endpoint = `https://bookr-app-backend.herokuapp.com/api/book-review/add_review/${this.props.id}`;

            const options = {
            headers: {
                Authorization: token
            }
        };

        axios.post(endpoint, review1, options ).then(res => {
            console.log("Comment Section ->", res.data);
        }).catch(err => {
            console.log("ERROR ->", err);
        })
        
    };

   

    
  
  
    render() {
        console.log(this.state.comment);
        if (this.state.comments[0] === '') return <h1>Loading...</h1>

  
      return (
  
        <div>
          {this.state.comments.map((hi, yes) => 
          <Comment key={yes} comment={hi} />)}

          {/* <CommentModal 
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentsHandler}
          changeRating={this.ratingHandler}
          rating={this.state.rating}
          /> */}


          <CommentInput 
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentsHandler}
          changeRating={this.ratingHandler}
          rating={this.state.rating}
          />
        </div>
  
      );
    }
  }
  
  CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string, username: PropTypes.string, 
          
      })
    )
  };
  
  export default CommentSection;



//   class CommentSection extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         comments: props.comments,
//         comment: '',
//       };
//     }

//     componentDidMount() {
//         if (localStorage.getItem('jwt')) {this.setState({loggedIn: true})}
//         axios
//         .get('https://bookr-app-backend.herokuapp.com/api/book-collection/all_reviews')
//         .then(response => {
//           const id = this.props.match.params.id;
//           console.log(id);
//           const books = response.data;
//           console.log(books);
//           console.log(response.data);
//           const book = books.filter(bk => {console.log(bk.id); console.log(typeof id); return bk.id === Number(id)})
//           console.log(book)
    
//           this.setState({ book }, () => {console.log(this.state);} )
//         })
//         .catch(err => console.log(err));
//       }
    
  
//     // componentDidMount() {
//     //     const id = this.props.postId;
//     //     if (localStorage.getItem(id)) {
//     //         this.setState({
//     //             commments: JSON.parse(localStorage.getItem(this.props.postId))
//     //         });
//     //     } else {
//     //         this.setComments();
//     //     }
//     // }
  
//     componentWillUnmount() {
//         this.setComments();
//     }
  
//     setComments = () => {
//         localStorage.setItem(
//             this.props.postId,
//             JSON.stringify(this.state.comments)
//         );
//     };
  
//     commentsHandler = e => {
//         console.log("Working!")
//         this.setState({ comment: e.target.value }, () => console.log(this.state.comment));
//     };
  
//     handleCommentSubmit = e => {
//         e.preventDefault();
//         console.log(this.state.comment)
//         const newComment = { text: this.state.comment, username: ''};
//         const comments = this.state.comments.slice();
//         comments.push(newComment);
//         console.log(newComment)
//         this.setState({ comments, comment: '' });
//         setTimeout(() => {
//             this.setComments();
//         }, 500);
//     };
  
  
//     render() {
  
//       return (
  
//         <div>
//           {this.state.comments.map((hi, yes) => 
//           <Comment key={yes} comment={hi} />)}
  
//           <CommentInput 
//           comment={this.state.comment}
//           submitComment={this.handleCommentSubmit}
//           changeComment={this.commentHandler}
//           />
//         </div>
  
//       );
//     }
//   }
  
//   CommentSection.propTypes = {
//     comments: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string, username: PropTypes.string, 
          
//       })
//     )
//   };
  
//   export default CommentSection;