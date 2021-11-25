import React from "react";
import './Post.css';

interface Props {
   text: string;
}

export default class Post extends React.Component<Props, any> {
   // --------- Этап монтирования ----------
   constructor(props: Props) {
      super(props);
   }

   componentDidMount() {

   }

   // Этап обновления
   render() {
      return (
         <div className="post">
            {this.props.text}
         </div>
      );
   }
}