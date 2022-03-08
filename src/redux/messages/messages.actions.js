import { types } from './messages.types';
import MessageApi from '../../utils/apis/message.api';
import MessageConnection from '../../utils/connections/message.connection';

export const toggleOnlyOwnerMessagesIndicator = () => {
    return { type: types['messages/toggleOnlyOwnerMessagesIndicator'] }
}

export const clearMessages = () => {
    return { type: types['messages/clearMessages'] }
}

export const getMessages = () => {

    return async (dispatch, getState) => {

        dispatch({ type: types['messages/getMessages/pending'] });

        try {
            const response = await MessageApi.getMessages();
            return dispatch({
                type: types['messages/getMessages/fulfilled'],
                payload: response.data
            })

        } catch(error){
            if(!error.response){ throw error }
            return dispatch({
                type: types['messages/getMessages/rejected'],
                payload: error.response.data
            })
        }
        
    }

}

export const postMessage = (body) => {

    return async (dispatch, getState) => {

        dispatch({ type: types['messages/postMessage/pending'] });

        try {
            const response = await MessageApi.postMessage(body);
            return dispatch({
                type: types['messages/postMessage/fulfilled'],
                payload: response.data
            })

        } catch(error){
            if(!error.response){ throw error }
            return dispatch({
                type: types['messages/postMessage/rejected'],
                payload: error.response.data
            })
        }
        
    }

}

export const createMessagesConnection = () => {

    return async (dispatch, getState) => {

        const eventSource = MessageConnection.createMessagesConnection();
        eventSource.onopen = () => {};
        eventSource.onerror = () => {};

        eventSource.onmessage = (event) => {
            dispatch({
                type: types['messages/createMessagesConnection/message'],
                payload: event.data
            })
        }

    }

}

export const closeMessagesConnection = () => {


    return async (dispatch, getState) => {

        const eventSource = MessageConnection.closeMessagesConnection();
        dispatch({
            type: types['messages/createMessagesConnection/close']
        })

    }
    
}