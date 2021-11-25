import React, { useRef } from "react";
import ThemeCheckbox from "../ThemeCheckbox/ThemeCheckbox";
import './Header.css';

export const Header = () => {

   // Подтяниваем контекст от ближайшего провайдера
   // const themeContext = useContext(ThemeContext);

   const ref = useRef();

   return (
      <div className={`header`}>
         <span ref={ref}>ООО "Компания название"</span>
         <ThemeCheckbox />
      </div>
   )
};




