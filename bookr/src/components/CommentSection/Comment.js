import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
    console.log('this is from comment', props);
  return (
    <div className="commentText">

        {/* <span className="user">{props.comment.user_id}</span>{''}
        <br></br> */}

        <span className="userName">{props.comment.username}</span>{''}
        <br></br>

        <span className="comment">{props.comment.review}</span>
        <br></br>

        <span className="rating">{props.comment.rating}</span>
      
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string,
  })
};

export default Comment;