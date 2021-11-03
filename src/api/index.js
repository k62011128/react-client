import ajax from "./ajax";

export function reqLogin(username, password) {
    return ajax('/login', {
        username,
        password
    }, 'POST');
}

export const reqAddUser=(user)=>ajax('/manager/user/add',user,'POST')
