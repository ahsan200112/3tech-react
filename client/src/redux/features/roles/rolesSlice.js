// src/features/roles/rolesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRoles, createRole, updateRole, deleteRole } from '../../../api/apiEndpoints';
import api from '../../../api/api';

// Fetch Roles
export const fetchRoles = createAsyncThunk(
  'roles/fetchRoles',
  async () => {
    const response = await api.get(getRoles);
    return response.data;
  }
);

// Create Role
export const addRole = createAsyncThunk(
  'roles/addRole',
  async ({ name }) => {
    const response = await api.post(createRole, { name });
    return response.data;
  }
);

// Update Role
export const editRole = createAsyncThunk(
  'roles/editRole',
  async ({ id, name }) => {
    const response = await api.put(updateRole(id), { name });
    return response.data;
  }
);

// Delete Role
export const removeRole = createAsyncThunk(
  'roles/removeRole',
  async (roleId) => {
    await api.delete(deleteRole(roleId));
    return roleId;
  }
);

const rolesSlice = createSlice({
  name: 'roles',
  initialState: {
    roles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addRole.fulfilled, (state, action) => {
        state.roles.push(action.payload);
      })
      .addCase(editRole.fulfilled, (state, action) => {
        const index = state.roles.findIndex((role) => role._id === action.payload._id);
        if (index !== -1) state.roles[index] = action.payload;
      })
      .addCase(removeRole.fulfilled, (state, action) => {
        state.roles = state.roles.filter(role => role._id !== action.payload);
      });
  },
});

export default rolesSlice.reducer;
