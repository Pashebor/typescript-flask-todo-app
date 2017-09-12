import {GET_USER_NOTES_SUCCESS} from '../actions/constants';

interface Form{
    notes: object
}
const initialState: Form = {
    notes: []
};

export const todoReducer = (state: Form = initialState, action: any) => {
    switch (action.type) {
        case GET_USER_NOTES_SUCCESS:
            return {...state, notes: action.payload};
    }
    return state;
};
