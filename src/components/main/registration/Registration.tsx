import * as React from 'react';
import {Link} from 'react-router-dom';
import  AuthorizationForms from '../authorization-form/AuthorizationForms';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Registration extends React.Component<any> {
    componentDidMount() {
        if (this.props.regData.name) {
            const {history} = this.props;
            history.push('/');
        }
    }
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

export function mapStateToProps(store: any) {
    return {
        regData: store.regFormStore.regData
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(Registration);