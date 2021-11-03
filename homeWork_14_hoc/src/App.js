import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Comments } from './forms/comments/Comments';
import { Footer } from './components/footer/Footer';
// import withHelper from './components/wrappers/ComponentWithHelper';
import ComponentWithHelper from "./components/wrappers/ComponentWithHelper";


class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div className="wrapper">

          <Header />

          <div className="main">

            <div className="sidebar__wrapper">
              <ComponentWithHelper comment="Это сайдбар!">
                <Sidebar />
              </ComponentWithHelper>
            </div>

            <div className="content">
              <ComponentWithHelper comment="">
                <Comments />
              </ComponentWithHelper>
            </div>

          </div>

          <Footer />

        </div>

      </div>
    );
  }
}

export default App;
