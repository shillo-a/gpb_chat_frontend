import { failed, idle, loading, succeeded } from '../../utils/apis/config/statuses';
import { User } from './user.model';
import { types } from './user.types';

const initialState = {
    data: {},
    signIn: idle,
    patchUserShowMessagesFrom: idle
}

export const userReducer = (state=initialState, action) => {

    switch(action.type){

        //// SYNC
        case types['user/signOut']: {
            localStorage.removeItem('userKey')
            return initialState;
        }

        //// ASYNC
        // signIn
        case types['user/signIn/pending']: {
            return {...state, signIn: loading}
        }

        case types['user/signIn/fulfilled']: {
            const user = action.payload;
            const user_model = new User(user);
            localStorage.setItem('userKey', JSON.stringify(user_model.key));
            
            return {
                ...state,
                data: user_model,
                signIn: succeeded
            }
        }

        case types['user/signIn/rejected']: {
            const message = action.payload?.message || action.payload || action.error.message;
            const remarks = action.payload?.remarks || [];
            return {
                ...state,
                signIn: {...failed, message, remarks}
            }
        }

        // patchUserShowMessagesFrom
        case types['user/patchUserShowMessagesFrom/pending']: {
            return {...state, patchUserShowMessagesFrom: loading}
        }

        case types['user/patchUserShowMessagesFrom/fulfilled']: {
            return {...state, patchUserShowMessagesFrom: succeeded}
        }

        case types['user/patchUserShowMessagesFrom/rejected']: {
            const message = action.payload?.message || action.payload || action.error.message;
            const remarks = action.payload?.remarks || [];
            return {
                ...state,
                patchUserShowMessagesFrom: {...failed, message, remarks}
            }
        }

        default: {
            return state
        }
    }

}