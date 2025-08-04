import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mini-linkedin-backend-wrzl.onrender.com/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;