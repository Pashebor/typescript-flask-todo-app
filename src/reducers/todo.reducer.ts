import {GET_USER_NOTES_SUCCESS, CREATE_TODO} from '../actions/constants';

interface Form{
    notes: [{id: number, title: string, note: string}]
}
const initialState: Form = {
    notes: [{id: 0, title: '', note: ''}]
};

export const todoReducer = (state: Form = initialState, action: any) => {
    switch (action.type) {
        case GET_USER_NOTES_SUCCESS:
            return {...state, notes: action.payload};
        case CREATE_TODO:
             return {...state, notes: [...state.notes, {
                 id: action.payload.id,
                 title: action.payload.title,
                 note: action.payload.note
             }]} ;
    }
    return state;
};
