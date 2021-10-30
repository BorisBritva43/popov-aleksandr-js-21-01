/* eslint-disable */
import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import Comments from './forms/comments/Comments';
import { Footer } from './components/footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div className="wrapper">

          <Header />

          <div className="main">

            <div className="sidebar__wrapper">
              <Sidebar />
            </div>

            <div className="content">
              <Comments />
            </div>

          </div>

          <Footer />

        </div>

      </div>
    );
  }
}

export default App;
