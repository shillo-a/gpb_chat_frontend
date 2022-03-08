import { types } from './user.types';
import UserApi from '../../utils/apis/user.api';

export const signIn = (userKey) => {

    return async (dispatch, getState) => {

        dispatch({ type: types['user/signIn/pending'] });

        try {
            const response = await UserApi.signIn(userKey);
            return dispatch({
                type: types['user/signIn/fulfilled'],
                payload: response.data
            })

        } catch(error){
            if(!error.response){ throw error }
            return dispatch({
                type: types['user/signIn/rejected'],
                payload: error.response.data
            })
        }
        
    }

}

export const signOut = () => {
    return { type: types['user/signOut'] }
}

export const patchUserShowMessagesFrom = () => {

    return async (dispatch, getState) => {

        dispatch({ type: types['user/patchUserShowMessagesFrom/pending'] });

        try {
            const response = await UserApi.patchUserShowMessagesFrom();
            return dispatch({
                type: types['user/patchUserShowMessagesFrom/fulfilled'],
                payload: response.data
            })

        } catch(error){
            if(!error.response){ throw error }
            return dispatch({
                type: types['user/patchUserShowMessagesFrom/rejected'],
                payload: error.response.data
            })
        }

    }

}
