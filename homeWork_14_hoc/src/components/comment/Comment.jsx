import React from "react";
import './Comment.css';

export class Comment extends React.Component {
   render() {
      return (
         <div className={`comment ${this.props.className}`}>
            <div className="comment__name">{this.props.name}</div>
            <div className="comment__text">{this.props.text}</div>
         </div>
      );
   }
}