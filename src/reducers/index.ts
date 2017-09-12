import { combineReducers } from 'redux';

import {loginReducer} from './form.login.reducer';
import {registerReducer} from './form.register.reducer';
import {popupReducer} from "./popup.reducer";
import {todoReducer} from "./todo.reducer";

const reducers = combineReducers({
    loginReducer: loginReducer,
    regFormStore: registerReducer,
    popupReducer: popupReducer,
    todoStore: todoReducer
});

export default reducers;