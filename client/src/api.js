import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL; // React CRA
// const BASE_URL = import.meta.env.VITE_BASE_URL; // Vite (If using Vite)

const api = {
  method: async (httpMethod, endpoint, data = null) => {
    try {
      const response = await axios({
        method: httpMethod,
        url: `${BASE_URL}${endpoint}`,
        data, // Payload (e.g., for POST/PUT requests)
      });
      return response; // Return the full response
    } catch (error) {
      console.error("API Error:", error);
      throw error; // Propagate the error
    }
  },

  // You can create shortcuts for common HTTP methods if you prefer
  get: (endpoint) => api.method('get', endpoint),
  post: (endpoint, data) => api.method('post', endpoint, data),
  put: (endpoint, data) => api.method('put', endpoint, data),
  delete: (endpoint) => api.method('delete', endpoint),
};

export default api;
