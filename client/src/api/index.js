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

export const getMessages = () => API.get('/post');
export const sendMessage = (post) => API.post('/post', post);
export const editMessage = (id, messageEdit) => API.patch(`/post/${id}`, messageEdit)

  