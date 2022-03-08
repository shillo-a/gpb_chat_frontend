import authParam from './config/auth-param';
import http from './config/http.common';

const getMessages = () => {
    return http.get(`/messages`, {
        params: {userKey: authParam()}
    });
}

const postMessage = (body) => {

    return http.post(`/messages`, { body }, {
        params: {userKey: authParam()}
    });
}

export default {
    getMessages,
    postMessage
}