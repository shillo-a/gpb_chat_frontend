import { failed, idle, loading, succeeded } from '../../utils/apis/config/statuses';
import { Message } from './mesages.model';
import { types } from './messages.types';

const initialState = {
    data: [],
    isOnlyOwnerMessages: false,
    getMessages: idle,
    postMessage: idle,
    messagesConnection: '' //idle, open, close, error
}

export const messagesReducer = (state=initialState, action) => {

    switch(action.type){

        //// SYNC
        case types['messages/toggleOnlyOwnerMessagesIndicator']: {
            return {...state, isOnlyOwnerMessages: !state.isOnlyOwnerMessages}
        }

        case types['messages/clearMessages']: {
            return initialState
        }

        //// ASYNC

        //getMessages
        case types['messages/getMessages/pending']: {
            return {...state, getMessages: loading}
        }

        case types['messages/getMessages/fulfilled']: {
            const messages = action.payload;
            const messages_model = messages.map(message => new Message(message));
            return {
                ...state,
                data: messages_model,
                getMessages: succeeded
            }
        }

        case types['messages/getMessages/rejected']: {
            const message = action.payload?.message || action.payload || action.error.message;
            const remarks = action.payload?.remarks || [];
            return {
                ...state,
                getMessages: {...failed, message, remarks}
            }
        }

        //postMessage
        case types['messages/postMessage/pending']: {
            return {...state, postMessage: loading}
        }

        case types['messages/postMessage/fulfilled']: {

            return {
                ...state,
                postMessage: succeeded
            }

            //Загрузка сообщений в стор осуществляется через createMessagesConnection
            // const message = action.payload;
            // const message_model = new Message(message);
            // return {
            //     ...state,
            //     data: [message_model, ...state.data],
            //     postMessage: succeeded
            // }
        }

        case types['messages/postMessage/rejected']: {
            const message = action.payload?.message || action.payload || action.error.message;
            const remarks = action.payload?.remarks || [];
            return {
                ...state,
                postMessage: {...failed, message, remarks}
            }
        }

        //createMessagesConnection
        case types['messages/createMessagesConnection/message']: {
            const message = JSON.parse(action.payload);
            const message_model = new Message(message);
            return {
                ...state,
                data: [message_model, ...state.data],
                postMessage: succeeded
            }
        }
        
        //closeMessagesConnection
        case types['messages/createMessagesConnection/close']: {
            //Дописать
        }

        default: {
            return state
        }

    }

}