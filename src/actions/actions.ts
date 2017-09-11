import {requestCallback} from '../ustils/ajax';

import {LOGIN_USER, REGISTER_USER, POPUP_STATE} from "./constants";
import {error} from "util";

export const regUser = (formData: object) => {
    return {
        type: REGISTER_USER,
        payload: formData
    };
};

export const switchPopup = (value: boolean, text: string) => {
    return{
        type: POPUP_STATE,
        payload: value,
        text: text
    }
}

/*Async actions*/
export const loginUser = (formData: object): object => {
    return {
        type: LOGIN_USER,
        payload: formData
    }
};

export const registerUser = (regData: object): object => {
    return {
        type: REGISTER_USER,
        payload: regData
    }
};

export const sendLoginedUserCallback = (formData: object) => {
    return (dispatch: any) => {
        return requestCallback('/login-user', formData)
            .then((json: object): void => {
                dispatch(switchPopup(true, 'Вы успешно авторизовались!'));
                dispatch(loginUser(json));
            })
            .catch((err: any) => console.log(error))
    }
};

export const sendRegisteredUser = (formData: object) => {
    console.log(formData);
    return (dispatch: any) => {
        return requestCallback('/register-user', formData)
            .then((json: object): void => {
                dispatch(switchPopup(true, 'Вы успешно зарегистрировались!'));
                dispatch(registerUser(json))
            })
            .catch((err: any) => console.log(error))
    }
}
/***************/
