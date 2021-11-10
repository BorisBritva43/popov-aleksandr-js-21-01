import React from "react";
import './Comments.css';
import { getCommentList } from '../../api-mock/dumMyApi';
import Comment from '../../components/comment/Comment';
import ComponentWithHelper from "../../components/wrappers/ComponentWithHelper";
import Post from "../../components/post/Post";
import { ThemeContext } from "../../components/contexts/ThemeContext";

export class Comments extends React.Component {

   constructor(props) {
      super(props);
      this.state = { comments: [], showComments: true };
      this.showCommentsButton = this.showCommentsButton.bind(this);
      this.loadComments = this.loadComments.bind(this);
      this.loadComments = this.loadComments.bind(this);
   }

   componentDidMount(): void {
      this.loadComments(0, 10);
   }

   loadComments(page, limit) {
      getCommentList(page, limit, (resp) => this.setState({ comments: resp }));
   }

   showCommentsButton() {
      this.setState({ showComments: !this.state.showComments });
   }

   render() {

      return (
         <ThemeContext.Consumer>
            {
               (context) => (
                  <div className="comments">
                     <div className="comments__post">
                        <Post text="Какой то пост"></Post>
                     </div>

                     <div className="comments__show-btn"
                        onClick={this.showCommentsButton}
                     >{this.state.showComments
                        ? 'Скрыть'
                        : 'Показать'}</div>

                     {this.state.showComments && (
                        <div className="comments__comment">
                           {this.state.comments.length !== 0 ?
                              this.state.comments.map((elem, index) =>
                                 <ComponentWithHelper comment={elem.id} key={index}>
                                    <Comment
                                       id={elem.id}
                                       name={elem.firstName}
                                       title={elem.title}
                                       lastName={elem.lastName}
                                       picture={elem.picture}
                                       className={context.darkTheme && 'comment_dark'}
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
         </ThemeContext.Consumer>

      )
   }
}