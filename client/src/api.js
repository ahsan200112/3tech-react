const BASE_URL = process.env.REACT_APP_BASE_URL; // React CRA
// const BASE_URL = import.meta.env.VITE_BASE_URL; // Vite (If using Vite)

const api = (endpoint, options = {}) => {
    return fetch(`${BASE_URL}${endpoint}`, options);
};

export default api;
