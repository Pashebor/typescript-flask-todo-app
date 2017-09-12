import * as React from 'react';
import UserTodoList from '../todos/UserTodoList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class DefaultScreen extends React.Component<any>{

    isAuth(): any {
        const {loginData} = this.props;
        const {registerData} = this.props;
        console.log(this);
        if (loginData.name || registerData.name) {
            return (<div className="container"><UserTodoList/></div>);
        } else {
            return ( <div className="container"><h2 className="start-screen__title">Добро пожаловать в заметки онлайн!</h2>
                          <h5 className="start-screen__subtitle">Вы не зарегистрировались, либо не авторизовались <br/>для продолжения нажмите</h5>
                          <p className="start-screen__variants"><span>СЮДА</span> или <span>СЮДА</span></p>
                          <nav className="navigation-block">
                              <Link to={'/login'} className="link link--back">Авторизация</Link>
                              <Link to={'/register'} className="link link--register">Регистрация</Link>
                          </nav></div>)
        }
    }
    render() {
        return(
            <main className="start-screen">
               <div className="wrapper">
                   {this.isAuth()}
               </div>
            </main>
        )
    }
}
export function mapStateToProps(store:any) {
    return {
        loginData: store.loginReducer.formData,
        registerData: store.regFormStore.regData
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(DefaultScreen);