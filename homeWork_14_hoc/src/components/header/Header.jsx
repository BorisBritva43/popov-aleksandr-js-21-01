import React from "react";
import { ThemeCheckbox } from "../ThemeCheckbox/ThemeCheckbox";
import { ThemeContextConsumer } from "../contexts/ThemeContext";
import './Header.css';

export class Header extends React.Component {

   render() {

      return (
         <ThemeContextConsumer>
            {
               (context) => (
                  <div className={`header ${context.darkTheme && 'header_dark'}`}>
                     <span>ООО "Компания название"</span>
                     <ThemeCheckbox />
                  </div>
               )

            }

         </ThemeContextConsumer>
      );
   }
}