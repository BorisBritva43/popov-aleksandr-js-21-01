import React from "react";
import './Footer.css';

export class Footer extends React.Component {
   render() {
      return (
         <div className="footer">
            <div className="footer__menu">
               <li>Контакты</li>
               <li>Адрес</li>
               <li>профиль</li>
            </div>

            <div className="footer__copy">Все права защищены</div>
         </div>
      );
   }
}