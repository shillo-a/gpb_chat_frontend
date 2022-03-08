export default function authParam() {
    const userKey = JSON.parse(localStorage.getItem('userKey'));
    return userKey;
}