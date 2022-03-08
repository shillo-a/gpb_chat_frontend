export const selectSignInStatus = (state) => {
    return state.user.signIn;
}

// select from local storage
export const selectUserKeyLocalStorage = () => {
    return JSON.parse(localStorage.getItem('userKey'))
}