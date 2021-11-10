import React from "react";
import useCount from "../hooks/useCounter";
import './likeButton.css';

const LikeButton = ({ setLiked, liked }) => {
   const { count, addCount } = useCount(0);
   const handleLike = () => {
      addCount();
      setLiked(!liked);
   };

   return (
      <div className="like__button"
         onClick={handleLike}>
         {liked ? 'Лайкнуто' : 'Не лайкнуто'} {count}
      </div>
   );
};

export default LikeButton;