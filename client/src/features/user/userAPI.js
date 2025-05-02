// src/features/user/userAPI.js
import api from '../../api/api';
import { getCurrentUser, updateCurrentUser, updatePassword } from '../../api/apiEndpoints';

export const fetchCurrentUserAPI = async () => {
  const response = await api.get(getCurrentUser);
  return response.data;
};

export const updateCurrentUserAPI = async (userData) => {
  const response = await api.put(updateCurrentUser(), userData);
  return response.data;
};

export const updatePasswordAPI = async (passwordData) => {
  const response = await api.put(updatePassword(), passwordData);
  return response.data;
};
