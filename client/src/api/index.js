import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const userLogin = (formData) => API.post('/auth/signin', formData)
export const userRegister = (formData) => API.post('/auth/signup', formData)

export const getPublicContent = () => API.get("/user/test/all");
export const getUserBoard = () => API.get("/user/test/user");
export const getModeratorBoard = () => API.get("/user/test/mod");
export const getAdminBoard = () => API.get("/user/test/mod");

  