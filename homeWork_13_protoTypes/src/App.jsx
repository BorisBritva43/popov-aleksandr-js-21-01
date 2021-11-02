/* eslint-disable */
import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
// import { Sidebar } from './components/sidebar/Sidebar';
// import Comments from './forms/comments/Comments';
// import { Footer } from './components/footer/Footer';
import TodoList from './components/todoList/TodoList';
import TodoAddForm from './components/todoAddForm/TodoAddForm';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Список дел 1", important: false, like: false, id: 1 },
        { label: "Список дел 2", important: false, like: false, id: 2 },
        { label: "Список дел 3", important: false, like: false, id: 3 }
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToogleImportant = this.onToogleImportant.bind(this);
    this.onToogleLiked = this.onToogleLiked.bind(this);

    // Генерируем id
    this.maxId = 4;
  }

  deleteItem(id) {
    // Чтобы обновить state используем setState
    this.setState(({ data }) => {
      // Опеределяем на каком месте в массиве стоит удаляемый объект
      const index = data.findIndex(elem => elem.id === id);

      // Копируем массив разбивая его на до нужного элемента и после
      const before = data.slice(0, index); // c 0 до нужного индекса
      const after = data.slice(index + 1); // со след. элемента до конца мвссива

      // Объеденяем массивы
      const newArr = [...before, ...after];

      // В state data помещаем новый массив
      return {
        data: newArr
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  onToogleImportant(id) {
    this.setState(({ data }) => {

      // Находим пост по индексу
      const indexPost = data.findIndex(elem => elem.id === id);

      const oldPost = data[indexPost];

      // Формируем новый объект поста с лайком
      const newPost = { ...oldPost, important: !oldPost.important };

      // Формируем новый массив
      const newArr = [...data.slice(0, indexPost), newPost, ...data.slice(indexPost + 1)];

      return {
        data: newArr
      }
    })
  }

  onToogleLiked(id) {
    this.setState(({ data }) => {

      // Находим пост по индексу
      const indexPost = data.findIndex(elem => elem.id === id);

      const oldPost = data[indexPost];

      // Формируем новый объект поста с лайком
      const newPost = { ...oldPost, like: !oldPost.like };

      // Формируем новый массив
      const newArr = [...data.slice(0, indexPost), newPost, ...data.slice(indexPost + 1)];

      return {
        data: newArr
      }
    })
  }

  render() {
    // Вытаскиваем data из state
    const { data } = this.state;

    // Кол-во лайкнутых постов
    const liked = data.filter(item => item.like).length;

    // Кол-во важных постов
    const important = data.filter(item => item.important).length;

    // Кол-во постов всего
    const allPosts = data.length;

    return (
      <div className="App">

        <div className="wrapper">

          <Header />

          <div className="main">

            {/* <div className="sidebar__wrapper">
              <Sidebar />
            </div> */}

            <div className="content">
              {/* <Comments /> */}
              <TodoAddForm
                onAdd={this.addItem}
                liked={liked}
                important={important}
                allPosts={allPosts}
              />

              <TodoList
                posts={this.state.data}
                onDelete={this.deleteItem}
                onToogleImportant={this.onToogleImportant}
                onToogleLiked={this.onToogleLiked}
              />
            </div>

          </div>

          {/* <Footer /> */}

        </div>

      </div>
    );
  }
}

