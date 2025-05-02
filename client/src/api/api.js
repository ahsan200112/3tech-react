import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL; 

const api = {
  method: async (httpMethod, endpoint, data = null) => {
    const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
    try {
      const response = await axios({
        method: httpMethod,
        url: `${BASE_URL}${endpoint}`,
        data, // Payload (e.g., for POST/PUT requests)
        headers: token ? { Authorization: `Bearer ${token}` } : {}, // Add token if present
      });
      return response; // Return the full response
    } catch (error) {
      console.error("API Error:", error);
      throw error; // Propagate the error
    }
  },

  get: (endpoint) => api.method('get', endpoint),
  post: (endpoint, data) => api.method('post', endpoint, data),
  put: (endpoint, data) => api.method('put', endpoint, data),
  delete: (endpoint) => api.method('delete', endpoint),
};

export default api;
