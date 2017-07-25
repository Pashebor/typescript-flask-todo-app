import * as React from 'react';
import {StartScreenProps} from "../Main";
import { Link } from 'react-router-dom';

class DefaultScreen extends React.Component<StartScreenProps>{
    render() {
        return(
            <main className="start-screen">
               <div className="wrapper">
                   <div className="container">
                          <h2 className="start-screen__title">Добро пожаловать в заметки онлайн!</h2>
                          <h5 className="start-screen__subtitle">Вы не зарегистрировались, либо не авторизовались <br/>для продолжения нажмите</h5>
                          <p className="start-screen__variants"><span>СЮДА</span> или <span>СЮДА</span></p>
                          <nav className="navigation-block">
                              <Link to={'/login'} className="link link--back">Авторизация</Link>
                              <Link to={'/register'} className="link link--register">Регистрация</Link>
                          </nav>
                   </div>
               </div>
            </main>
        )
    }
}

export default DefaultScreen;