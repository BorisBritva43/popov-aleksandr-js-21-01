import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeCheckbox = () => {

   const themeContext = useContext(ThemeContext);

   return (
      <div className="theme-checkbox">
         Тёмная тема
         <input
            className="theme-checkbox__input"
            checked={themeContext.darkTheme}
            type="checkbox"
            onClick={themeContext.toggleTheme} />
      </div>
   );
}

export default ThemeCheckbox;