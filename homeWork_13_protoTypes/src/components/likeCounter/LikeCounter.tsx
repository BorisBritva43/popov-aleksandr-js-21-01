/* eslint-disable */
import React from "react";

interface Props {
   countOfLikes: number;
}

export default class LikeCounter extends React.Component<Props> {
   render() {
      return (
         <div>
            Общее количество лайков на странице:
            {this.props.countOfLikes || 0}
         </div>
      );
   }
}