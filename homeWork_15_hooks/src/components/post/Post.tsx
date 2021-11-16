import React, { useState } from "react";
import LikeButton from "../likeButton/LikeButton";
import './Post.css';

interface Props {
   text: string;
}

const Post = ({ text }: Props) => {
   // Создает поле стейта liked в false и задает метод setLiked меняющий значение поля liked
   const [liked, setLiked] = useState(false);

   return (
      <div className="post">
         {text}
         <div className="post__like">
            <LikeButton setLiked={setLiked} liked={liked} />
         </div>
      </div>

   );
}

export default Post;