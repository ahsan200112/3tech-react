// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/usersSlice';
import rolesReducer from '../features/roles/rolesSlice';
import permissionsReducer from '../features/permissions/permissionsSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    roles: rolesReducer,
    permissions: permissionsReducer,
  },
});

export default store;
