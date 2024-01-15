import React from 'react';
import {CommentsHeader} from "./CommentsHeader/CommentsHeader.tsx";
import {Comment} from './Comment/Comment.tsx';
import {AddComment} from './AddComment/AddComment.tsx';

export class Comments extends React.Component<any> {
  render() {
    if (!this.props.comments) {
      return <div/>;
    }

    const comments = this.props.comments.map((comment: any) => {
      return <Comment comment={comment} key={comment.id}/>
    });

    return(
      <div>
        <CommentsHeader amountComments={this.props.amountComments}/>
        <AddComment key='add-comment'/>
        {comments}
      </div>
    );
  }
}