import React from "react";
import './Comments.css';
import { apiResponse } from '../../api-mock/api';
import { Comment } from '../../components/comment/Comment';
import ComponentWithHelper from "../../components/wrappers/ComponentWithHelper";
import Post from "../../components/post/Post";

export class Comments extends React.Component {
   constructor(props) {
      super(props);
      this.state = { showComments: true };
      this.showCommentsButton = this.showCommentsButton.bind(this);
   }

   showCommentsButton() {
      this.setState({ showComments: !this.state.showComments });
   }

   render() {
      return (
         <div className="comments">
            <div className="comments__post">
               <Post text="Какой то пост"></Post>
            </div>

            <div className="comments__show-btn"
               onClick={this.showCommentsButton}
            >{this.state.showComments
               ? 'Скрыть комментарии'
               : 'Показать комментарии'}</div>

            {this.state.showComments && (
               <div className="comments__comment">
                  {apiResponse.status === 'ok' ?
                     apiResponse.result.map((elem, index) =>
                        <ComponentWithHelper comment="Это комментарий" key={index}>
                           <Comment
                              name={elem.name}
                              text={elem.text}
                              key={index}
                           />
                        </ComponentWithHelper>
                     ) :
                     'При загрузке произошла ошибка'
                  }
               </div>
            )}

         </div>

      )
   }
}