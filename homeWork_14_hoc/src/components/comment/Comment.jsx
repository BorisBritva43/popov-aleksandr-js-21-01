import React from "react";
import './Comment.css';

export class Comment extends React.Component {
   render() {
      return (
         <div className={`comment ${this.props.className}`}>
            <div className="comment__wrapper">
               <img src={this.props.picture} alt="alt"></img>
               <div className="comment__content">
                  <div className="comment__id">{this.props.id}</div>
                  <div className="comment__name">{this.props.title} {this.props.name} {this.props.lastName}</div>
               </div>
            </div>
         </div>
      );
   }
}