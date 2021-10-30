/* eslint-disable */
import React from "react";
import './Comments.css';
import { apiResponse } from '../../api-mock/api';
import Comment from '../../components/comment/Comment';
import { CommentResponse, CommentType } from "../../types/responses";
import LikeCounter from "../../components/likeCounter/LikeCounter";

interface State {
   commentsResponse: CommentResponse;
   countofLikes: number;
}

export default class Comments extends React.Component<{}, State> {
   constructor(props: {}) {
      super(props);
      this.state = { commentsResponse: apiResponse, countofLikes: 0 };
      this.addLike = this.addLike.bind(this);
      this.removeLike = this.removeLike.bind(this);
   }

   addLike() {
      this.setState({ countofLikes: this.state.countofLikes + 1 });
   }
   removeLike() {
      this.setState({ countofLikes: this.state.countofLikes - 1 });
   }

   render() {
      return (
         <div className="comments">
            {this.state.commentsResponse.status === 'ok' ?
               this.state.commentsResponse.result.map(
                  (elem: CommentType, index: number) =>
                     <Comment
                        name={elem.name}
                        text={elem.text}
                        addLike={this.addLike}
                        removeLike={this.removeLike}
                        key={index}
                     />) :
               'При загрузке произошла ошибка.'
            }

            <LikeCounter countOfLikes={this.state.countofLikes} />
         </div>
      )
   }
}