import React from "react";
import './Sidebar.css';

export class Sidebar extends React.Component {
   render() {
      return (
         <div className="sidebar">
            <li>Главная</li>
            <li>Контакты</li>
            <li>Профиль</li>
         </div>
      );
   }
}