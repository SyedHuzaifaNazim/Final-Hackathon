import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

// Add a token to the headers if the user is authenticated
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken'); // Adjust as needed
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
