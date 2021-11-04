import React from "react";
import { ThemeContextConsumer } from "../contexts/ThemeContext";
import './Sidebar.css';

export class Sidebar extends React.Component {
   render() {
      return (
         <ThemeContextConsumer>
            {
               (context) => (
                  <div className={`sidebar ${context.darkTheme && 'sidebar_dark'}`}>
                     <li>Главная</li>
                     <li>Контакты</li>
                     <li>Профиль</li>
                  </div>
               )

            }

         </ThemeContextConsumer>
      );
   }
}