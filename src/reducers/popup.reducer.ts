import {POPUP_STATE} from '../actions/constants';

const initialState = {
    isOpen: undefined
};

export const popupReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case POPUP_STATE:
            return {...state, isOpen: action.payload};
    }
    return state;
};