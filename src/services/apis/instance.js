import axios from 'axios';
const token = window.localStorage.getItem('userWebRtc')


const instance = axios.create({
  baseURL: process.env.REACT_APP_API
});

if (token !== undefined) {
  instance.interceptors.request.use((config) => {
    if (JSON.parse(token)) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)?.accessToken}`;
    }
    return config;
  });
}

export default instance;
