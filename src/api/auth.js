import client from './client';

const endpoint = '/auth'

const login = (email, password) => {
    return client.post(endpoint, {email, password})
}
export default {
    login
}