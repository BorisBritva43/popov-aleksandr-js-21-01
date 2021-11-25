import React from "react";
// import { ThemeContext } from '../contexts/ThemeContext';
import './Footer.css';

export class Footer extends React.Component {
   render() {
      return (
         // <ThemeContext.Consumer>
         // {
         //    (context) => (
         <div className={`footer`}>
            <div className="footer__menu">
               <li>Контакты</li>
               <li>Адрес</li>
               <li>профиль</li>
            </div>

            <div className="footer__copy">Все права защищены</div>
         </div>
         //    )
         // }

         // </ThemeContext.Consumer>
      );
   }
}