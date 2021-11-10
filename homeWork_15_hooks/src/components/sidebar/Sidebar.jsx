import React from "react";
import { ThemeContext } from '../contexts/ThemeContext';
import './Sidebar.css';

export class Sidebar extends React.Component {
   render() {
      return (
         <ThemeContext.Consumer>
            {
               (context) => (
                  <div className={`sidebar ${context.darkTheme && 'sidebar_dark'}`}>
                     <li>Главная</li>
                     <li>Контакты</li>
                     <li>Профиль</li>
                  </div>
               )

            }

         </ThemeContext.Consumer>
      );
   }
}