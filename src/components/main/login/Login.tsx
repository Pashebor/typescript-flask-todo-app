import * as React from 'react';
import  { Link } from 'react-router-dom';
import {LoginProps} from "../Main";
import AuthorizationForms from '../authorization-form/AuthorizationForms';

class Login extends React.Component<any, LoginProps>{

    render() {
        return(
            <main className="login">
                <div className="wrapper">
                    <div className="container">
                        <h2 className="login__title">Авторизация</h2>
                        <AuthorizationForms param="login"/>
                        <nav className="navigation-block">
                            <Link to={'/'} className="link link--back">Вернуться</Link>
                            <Link to={'/register'} className="link link--register">Регистрация</Link>
                        </nav>
                    </div>
                </div>
            </main>
        )
    }
}

export default Login;