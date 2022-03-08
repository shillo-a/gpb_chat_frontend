import authParam from './config/auth-param';
import http from './config/http.common';

const signIn = (userKey) => {
    return http.post(`/signin`, {userKey});
}

const patchUserShowMessagesFrom = () => {
    return http.patch(`/user/show-messages-from`, {}, {
        params: {userKey: authParam()}
    })
}

export default {
    signIn,
    patchUserShowMessagesFrom
}

