import React from "react";
import { ThemeContextConsumer } from "../contexts/ThemeContext";
import './Footer.css';

export class Footer extends React.Component {
   render() {
      return (
         <ThemeContextConsumer>
            {
               (context) => (
                  <div className={`footer ${context.darkTheme && 'footer_dark'}`}>
                     <div className="footer__menu">
                        <li>Контакты</li>
                        <li>Адрес</li>
                        <li>профиль</li>
                     </div>

                     <div className="footer__copy">Все права защищены</div>
                  </div>
               )
            }

         </ThemeContextConsumer>
      );
   }
}