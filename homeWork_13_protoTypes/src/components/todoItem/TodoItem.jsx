/* eslint-disable */
import React, { Component } from "react";

export default class TodoItem extends Component {

   render() {

      const { label, onDelete, onToogleImportant, onToogleLiked, important, like } = this.props;

      let classNames = "todo__item";

      // Добавляем класс если отмеченно - выполненно
      if (important) {
         classNames += " important";
      }

      // Добавляем класс если - лайкнуто
      if (like) {
         classNames += " onLike";
      }

      return (
         <div className={classNames}>
            <span className="todo__label">
               {label}
            </span>
            <div className="todo__buttons">
               <button
                  className="todo__star"
                  onClick={onToogleImportant}
               >
                  <i className="fa fa-check-square-o"></i>
               </button>
               <button
                  className="todo__trash"
                  onClick={onDelete}
               >
                  <i className="fa fa-trash-o"></i>
               </button>
               <i
                  className="fa fa-heart"
                  onClick={onToogleLiked}
               ></i>
            </div>
         </div>
      )
   }
}
