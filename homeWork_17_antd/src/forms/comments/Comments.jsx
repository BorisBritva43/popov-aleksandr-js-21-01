import React, { useEffect, useState } from "react";
import './Comments.css';
import { getCommentList, getCommentsTotalCount } from '../../api-mock/dumMyApi';
import Comment from '../../components/comment/Comment';
import ComponentWithHelper from "../../components/wrappers/ComponentWithHelper";
import Post from "../../components/post/Post";
import { Pagination } from "antd";

const Comments = () => {

   // constructor(props) {
   //    super(props);
   //    this.state = { comments: [], showComments: true };
   //    this.showCommentsButton = this.showCommentsButton.bind(this);
   //    this.loadComments = this.loadComments.bind(this);
   // }

   // Прописываем стэйты
   const [comments, setComments] = useState([]);
   const [commentsTotal, setCommentsTotal] = useState(0);
   const [showComments, setShowComments] = useState(true);
   const [commentsLoaded, setCommentsLoaded] = useState(false);
   const [page, setPage] = useState(0);
   const [pageSize, setPageSize] = useState(10);

   // componentDidMount(): void {
   //    this.loadComments(0, 10);
   // }
   // @ts-ignore
   const loadComments = (newPage, limit) => {
      getCommentList(
         newPage,
         limit,
         (resp) => {
            setComments(resp);
            setCommentsLoaded(true);
         }
      );
   }

   const showCommentsButton = () => {
      setShowComments(!showComments);
   }

   const loadCommentsTotalCount = () => {
      getCommentsTotalCount(setCommentsTotal)
   }

   const handleChangePage = (newPage, newPageSize) => {
      loadComments(newPage, newPageSize || pageSize);
      setPage(newPage);
      newPageSize && setPageSize(newPageSize);
   };

   useEffect(() => {
      loadCommentsTotalCount();
      loadComments(page, pageSize);
   }, []);

   return (
      <div className="comments">
         <div className="comments__post">
            <Post text="Какой то пост"></Post>
         </div>

         <div className="comments__show-btn"
            onClick={showCommentsButton}
         >
            {showComments
               ? 'Скрыть'
               : 'Показать'}
            {page}
            {pageSize}
            {handleChangePage}
         </div>

         {showComments && (commentsLoaded ? (
            <div className="comments__comment">
               {comments.length !== 0
                  ? comments.map((elem, index) => (
                     <ComponentWithHelper comment={elem.id} key={index}>
                        <Comment
                           id={elem.id}
                           name={elem.firstName}
                           title={elem.title}
                           lastName={elem.lastName}
                           picture={elem.picture}
                           key={index}
                        />
                     </ComponentWithHelper>
                  ))
                  : 'При загрузке произошла ошибка'}
               <Pagination
                  total={commentsTotal}
                  pageSize={pageSize}
                  current={page + 1}
                  pageSizeOptions={['5', '10', '20', '50']}
                  onChange={(newPage, newPageSize) => handleChangePage(newPage - 1, newPageSize)}
               />
            </div>
         ) : 'Идет загрузка')}

      </div>

   )
}


export default Comments;