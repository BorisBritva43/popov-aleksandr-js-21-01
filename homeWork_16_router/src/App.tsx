import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Comments } from './forms/comments/Comments';
import { Footer } from './components/footer/Footer';
import { ThemeContextProvider } from './components/contexts/ThemeContext';
import Main from './forms/Main/Main';
import UserForm from './forms/UserForm/UserForm';



export default class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <div className='App'>

          <div className="wrapper">

            <Header />

            <HashRouter>

              <div className="main">

                <Sidebar />

                <div className="content">
                  <Switch>

                    <Route path="/post">
                      <Comments />
                    </Route>

                    <Route path="/user/:id">
                      <UserForm />
                    </Route>

                    <Route path="/home">
                      <Main />
                    </Route>

                    <Redirect from="/" to="/home" />

                  </Switch>
                </div>

              </div>

            </HashRouter>

            <Footer />

          </div>

        </div>

      </ThemeContextProvider>
    )

  }

}