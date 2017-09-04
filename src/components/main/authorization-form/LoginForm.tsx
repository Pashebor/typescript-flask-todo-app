import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {sendLoginedUserCallback, switchPopup} from '../../../actions/actions';
import Popup from '../popup/Popup';

class LoginForm extends React.Component<any>{

    refs: any = {
        login: HTMLInputElement,
        password: HTMLInputElement
    };

    private onSubmitLoginHandler(event: any): void {
        event.preventDefault();
        const formData = new FormData();
        const {sendLoginedUserCallback} = this.props;
        const {switchPopup} = this.props;

        formData.append('name', this.refs['name'].value);
        formData.append('password', this.refs['password'].value);

        switchPopup(true);
        /*sendLoginedUserCallback(formData);*/
    }

    showPopup() {
        if (this.props.popupIsOpen) {
            return (<Popup/>);
        } else{
            console.log('not')
        }
    }

    render() {
        return(
            <form className="form" encType="multipart/form-data" onSubmit={this.onSubmitLoginHandler.bind(this)}>
                {this.showPopup()}
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
        fromData: store.loginReducer.formData,
        popupIsOpen: store.popupReducer.isOpen
    }
}

export const mapDispatchToProps = (dispatch:any) => {
    //noinspection TypeScriptValidateTypes
    return bindActionCreators({sendLoginedUserCallback, switchPopup}, dispatch)
};

//noinspection TypeScriptValidateTypes
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);