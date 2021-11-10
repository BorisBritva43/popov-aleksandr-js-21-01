import React, { useState } from "react";
import LikeButton from "../likeButton/LikeButton";
import './Comment.css';

const Comment = ({ className, picture, id, title, name, lastName }) => {

   const [liked, setLiked] = useState(false);

   return (
      <div className={`comment ${className}`}>
         <div className="comment__wrapper">
            <img src={picture} alt="alt"></img>
            <div className="comment__content">
               <div className="comment__id">{id}</div>
               <div className="comment__name">{title} {name} {lastName}</div>
            </div>
         </div>
         <LikeButton setLiked={setLiked} liked={liked} />
      </div>
   );

};

export default Comment;