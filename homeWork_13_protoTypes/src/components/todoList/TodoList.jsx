/* eslint-disable */
import React from "react";
import TodoItem from "../todoItem/TodoItem";
import "./TodoList.css";

const TodoList = ({ posts, onDelete, onToogleImportant, onToogleLiked }) => {

   // Перебираем посты и возвращаем нужный пост
   const elements = posts.map((item) => {

      // Деструктурируем данные
      const { id, label, important, like } = item;
      return (
         <li key={id}>
            <TodoItem
               label={label}
               important={important}
               like={like}
               onDelete={() => onDelete(id)}
               onToogleImportant={() => onToogleImportant(id)}
               onToogleLiked={() => onToogleLiked(id)}
            />
         </li>
      )
   })
   return (
      <ul className="todo__list">
         {elements}
      </ul>
   )
}

export default TodoList;