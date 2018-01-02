import {getJson, requestCallback} from '../ustils/ajax';

import {LOGIN_USER, REGISTER_USER, POPUP_STATE, GET_USER_NOTES_SUCCESS, CREATE_TODO} from "./constants";
import {error} from "util";

export const addTodoSuccess = (todo: object) => {
    return {
        type: GET_USER_NOTES_SUCCESS,
        payload: todo
    }
};

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

export const setUserNotes = (userNotes): object => {
    return {
        type: GET_USER_NOTES_SUCCESS,
        payload: userNotes
    }
};

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
                dispatch(loginUser(json));
                dispatch(switchPopup(true, 'Вы успешно авторизовались!'));
            })
            .catch((err: any) => console.log(error))
    }
};

export const sendRegisteredUser = (formData: object) => {
    return (dispatch: any) => {
        return requestCallback('/register-user', formData)
            .then((json) => {
                dispatch(switchPopup(true, 'Вы успешно зарегистрировались!'));
                dispatch(registerUser(json))
            })
            .catch((err: any) => console.log(error))
    }
};

export const getUserNotes = (userName: object) => {
    return (dispatch: any) => {
        return getJson('/user-notes', userName)
            .then((json: object): void => {
                dispatch(setUserNotes(json['response']))
            })
            .catch((err: any) => console.log(error))
    }
};

export const addTodo = (formData: object) => {
    return (dispatch: any) => {
        return requestCallback('/create-note', formData)
            .then((json:object):void => {
                dispatch(addTodoSuccess(json['response']))
            }).catch((error:any) => console.log(error));
    }
};
/***************/
