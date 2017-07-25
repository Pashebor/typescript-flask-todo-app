import { combineReducers } from 'redux';

import {loginReducer} from './form.login.reducer';
import {registerReducer} from './form.register.reducer';

const reducers = combineReducers({
    loginReducer: loginReducer,
    regFormStore: registerReducer

});

export default reducers;