import React, { useContext, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ThemeCheckbox from "../ThemeCheckbox/ThemeCheckbox";
// import { ThemeContext } from "../contexts/ThemeContext";
import './Header.css';

export const Header = () => {

   // Подтяниваем контекст от ближайшего провайдера
   const themeContext = useContext(ThemeContext);

   const ref = useRef();
   console.log(ref);

   return (
      <div className={`header ${themeContext.darkTheme && 'header_dark'}`}>
         <span ref={ref}>ООО "Компания название"</span>
         <ThemeCheckbox />
      </div>
   )
};




