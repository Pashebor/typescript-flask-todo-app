import * as constants from './constants';
import {LOGIN_USER, REGISTER_USER} from "./constants";

export const loginUser = (formData: Object) => {
    return {
        type: LOGIN_USER,
        payload: formData
    }
};

export const regUser = (formData: {}) => {
    return{
        type: LOGIN_USER,
        payload: formData
    }
}
