import axios from 'axios';
const API = axios.create({ baseURL: "http://localhost:5000"})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const getUsers = () => API.get('/auth/get')
export const userLogin = (userInfo) => API.post('/auth/signin', userInfo)
export const userRegister = (userInfo) => API.post('/auth/signup', userInfo)
export const updateUserInfo = (id, updatedUserInfo) => API.patch(`/auth/update/${id}`, updatedUserInfo);
export const updatePasswordInfo = (id, updatedPasswordInfo) => API.patch(`/auth/update/password/${id}`, updatedPasswordInfo)


export const getMessages = () => API.get('/posts');
export const createMessage = (newPost) => API.post('/posts', newPost);
export const editMessage = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)

  