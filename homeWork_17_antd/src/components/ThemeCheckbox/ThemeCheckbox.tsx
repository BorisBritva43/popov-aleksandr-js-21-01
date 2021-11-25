import React, { useState } from 'react';

const ThemeCheckbox = () => {

   const [themeSwitch, setThemeSwitch] = useState(false);

   const themeChange = () => {
      const body = document.querySelector('body');
      setThemeSwitch(!themeSwitch);
      if (!themeSwitch) {
         body?.classList.add('dark-theme');
      } else {
         body?.classList.remove('dark-theme');
      }
   }


   return (

      <div className="theme-checkbox">
         Тёмная тема
         <input
            className="theme-checkbox__input"
            type="checkbox"
            onClick={themeChange}
         />
      </div>
   );
}

export default ThemeCheckbox;