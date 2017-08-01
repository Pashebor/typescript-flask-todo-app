import {requestCallback} from '../ustils/ajax';

import {LOGIN_USER, REGISTER_USER} from "./constants";
import {error} from "util";

export const regUser = (formData: object) => {
    return {
        type: REGISTER_USER,
        payload: formData
    };
};

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

export const sendUserCallback = (formData: object) => {
    return (dispatch: any) => {
        return requestCallback('/login-user', formData)
            .then((json: object): void => {
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
                dispatch(registerUser(json))
            })
            .catch((err: any) => console.log(error))
    }
}
/***************/
