import * as React from 'react';
import {RegisterProps} from "../Main";
import {Link} from 'react-router-dom';
import  AuthorizationForms from '../authorization-form/AuthorizationForms';



class Registration extends React.Component<RegisterProps> {
    render() {
        return(
            <main className="registration">
                <div className="wrapper">
                    <div className="container">
                        <h2 className="registration__title">Регистрация</h2>
                        <AuthorizationForms param="register"/>
                        <nav className="navigation-block">
                            <Link to={'/'} className="link link--back">Вернуться</Link>
                            <Link to={'/login'} className="link link--register">Войти</Link>
                        </nav>
                    </div>
                </div>
            </main>
        )
    }
}

export default Registration;