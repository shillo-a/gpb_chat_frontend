// select from local storage
export const selectUserKey = () => {
    return JSON.parse(localStorage.getItem('userKey'))
}