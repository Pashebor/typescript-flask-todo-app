import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {sendUserCallback} from '../../../actions/actions';

class LoginForm extends React.Component<any>{
    refs: any = {
        login: HTMLInputElement,
        password: HTMLInputElement
    };

    private onSubmitLoginHandler(event: any): void {
        event.preventDefault();
        let formData: any = {};
        const {sendUserCallback} = this.props;
        for (let field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        console.log(formData);
        sendUserCallback(formData);
    }

    render() {
        return(
            <form className="form" encType="multipart/form-data" onSubmit={this.onSubmitLoginHandler.bind(this)}>
                <div className="form__item">
                    <label >Ваше имя <span>*</span></label>
                    <input className="form__input" id="name" ref="name" type="text" name="name" required/>
                </div>
                <div className="form__item">
                    <label >Пароль <span>*</span></label>
                    <input className="form__input" type="password" ref="password" id="password" name="password" required/>
                </div>
                <div className="form__item">
                    <input className="submit-btn" type="submit"  value="Вход"/>
                </div>
            </form>
        )
    }
}

export function mapStateToProps(store:any) {
    return {
        fromData: store.loginReducer.formData
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({sendUserCallback}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);