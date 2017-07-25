import {LOGIN_USER} from '../actions/constants';

interface Form{
    formData: any
}
const initialState = {
    formData: {}
};

export const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, formData: action.payload};
    }
    return state;
};


