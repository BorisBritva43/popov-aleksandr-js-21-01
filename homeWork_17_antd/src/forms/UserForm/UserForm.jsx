import React, { useEffect, useState } from "react";
import { Prompt, useHistory, useParams } from "react-router";
import { getUserById } from "../../api-mock/dumMyApi";
import useScrollToTop from "../../components/hooks/useScrollToTop";
import './UserForm.css';

const UserForm = () => {
   useScrollToTop();
   const [user, setUser] = useState({ getUserById });

   const [loading, setLoading] = useState(true);

   const params = useParams();

   const history = useHistory();

   useEffect(() => {
      setLoading(true);
      getUserById(params.id, setUser, ({ error }) => alert(error), () => setLoading(false));
   }, [])

   return (
      <div className="user">
         {loading ? 'Идет загрузка...' :
            <div className="user-form">
               <button
                  className="user-form__btn"
                  type="button"
                  onClick={history.goBack}>Назад
               </button>
               <div className="user-form__left">
                  <img src={user.picture}></img>
                  <div className="user-form__name">
                     {`${user.title} ${user.firstName} ${user.lastName}`}
                  </div>
               </div>
               <div className="user-form__right">
                  <div>{`Email: ${user.email}`}</div>
                  <div>{`Date of birth: ${user.dateOfBirth}`}</div>
                  <div>{`Registration: ${user.registerDate}`}</div>
                  <div>{`Phone: ${user.phone}`}</div>
               </div>
               <Prompt
                  message={`Вы хотите выйти из профиля?`}
                  when={history.goBack} />
            </div>
         }
      </div>

   )
}

export default UserForm;