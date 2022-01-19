import axios from 'axios';
const API = axios.create({ baseURL: "http://localhost:5000"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const getUsers = () => API.get('/auth/get')
export const userLogin = (formData) => API.post('/auth/signin', formData)
export const userRegister = (formData) => API.post('/auth/signup', formData)
export const updateUserInfo = (id, updatedFormData) => API.patch(`/auth/update/${id}`, updatedFormData);

export const getMessages = () => API.get('/posts');
export const createMessage = (newPost) => API.post('/posts', newPost);
export const editMessage = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)

  