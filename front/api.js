import axios from 'axios'
export async function register(email, password) {
    const res = axios.post(`http://localhost:3100/api/register`, { email, password })
    return res
}