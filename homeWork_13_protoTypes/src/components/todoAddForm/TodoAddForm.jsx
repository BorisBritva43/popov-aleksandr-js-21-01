/* eslint-disable */
import React, { Component } from "react";
import './TodoAddForm.css';

export default class TodoAddForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         text: ''
      }
      this.onValueChange = this.onValueChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onValueChange(e) {
      this.setState({
         text: e.target.value
      })
   }

   onSubmit(e) {
      e.preventDefault();
      this.props.onAdd(this.state.text)
      this.setState({
         text: ''
      })
   }


   render() {
      const { allPosts, liked, important } = this.props;
      return (
         <div className="todo">
            <form className="todo__form"
               onSubmit={this.onSubmit}
            >
               <input
                  type="text"
                  placeholder="Добавить задачу"
                  className="todo__input"
                  onChange={this.onValueChange}
                  value={this.state.text}
               />
               <button
                  type="submit"
                  className="todo__btn">
                  Добавить
               </button>
            </form>
            <div className="todo__allposts">
               <p>Всего задач {allPosts}, выполненных {important}, понравилось {liked}</p>
            </div>
         </div>

      )
   }

}
