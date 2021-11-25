import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from '../contexts/ThemeContext';
import './Sidebar.css';

export class Sidebar extends React.Component {

   render() {
      return (
         <ThemeContext.Consumer>
            {
               (context) => (
                  <div className={`sidebar ${context.darkTheme && 'sidebar_dark'}`}>
                     <ul>
                        <Link to="/">
                           <li>Главная</li>
                        </Link>

                        <Link to="/post">
                           <li>Профиль</li>
                        </Link>
                     </ul>

                  </div>
               )

            }

         </ThemeContext.Consumer>
      );
   }
}