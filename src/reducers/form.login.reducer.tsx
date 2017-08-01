import {LOGIN_USER} from '../actions/constants';

interface Form{
    formData: object
}
const initialState: Form = {
    formData: {}
};

export const loginReducer = (state: Form = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, formData: action.payload};
    }
    return state;
};


