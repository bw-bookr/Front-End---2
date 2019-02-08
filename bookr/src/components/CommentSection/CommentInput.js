import React from 'react';
import './Comment.css';

const CommentInput = props => {


  return (

    <form onSubmit={props.submitComment}>
        <div className="commentInput">
    <input 
    onChange={props.changeComment} 
    type="text" defaultValue={props.comment} 
    placeholder="Add review... " />
    <input 
    onChange={props.changeRating} 
    type="text" defaultValue={props.rating} 
    placeholder="Add rating... " />
    </div>
    <button onClick={(e) => props.submitComment(e)}>Click</button>
    </form>
  );
};

export default CommentInput;






