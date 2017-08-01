import {REGISTER_USER} from '../actions/constants';

const initialState = {
    regData: {}
};

export const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case REGISTER_USER:
            return {...state, regData: action.payload};
    }
    return state;
};