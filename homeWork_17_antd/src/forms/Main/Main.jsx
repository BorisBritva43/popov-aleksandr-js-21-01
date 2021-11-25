import React from "react";
import { Route, withRouter } from 'react-router-dom';

const Main = (props) => {
   const { match } = props;
   return (
      <div className="main-form">
         <h1>Добро пожаловать</h1>

         <Route path={`${match.path}/route`}>
            <div>Первый роут</div>
         </Route>

         <Route path={`${match.path}/route/2`}>
            <div>Второй роут</div>
         </Route>

      </div>
   );
};

export default withRouter(Main);