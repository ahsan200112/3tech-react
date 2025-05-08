// features/permissions/permissionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/api';
import { getRolePermissions, updatePermissions } from '../../../api/apiEndpoints';

export const fetchPermissions = createAsyncThunk(
  'permissions/fetchPermissions',
  async (roleId, thunkAPI) => {
    const { data } = await api.get(getRolePermissions(roleId));
    return data;
  }
);

export const updateRolePermissions = createAsyncThunk(
  'permissions/updateRolePermissions',
  async ({ roleId, permissions }, thunkAPI) => {
    await api.put(updatePermissions, { roleId, permissions });
    return true;
  }
);

const initialState = {
  modules: [],
  actions: [],
  permissions: {},
  loading: false,
  error: null,
};

const permissionSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {
    togglePermission: (state, action) => {
      const { module, actionType } = action.payload;
      const current = state.permissions[module];

      if (actionType === 'all') {
        const newVal = !current.all;
        state.permissions[module] = {
          create: newVal,
          edit: newVal,
          view: newVal,
          delete: newVal,
          all: newVal,
        };
      } else {
        const updated = {
          ...current,
          [actionType]: !current[actionType],
        };
        const { create, edit, view, delete: del } = updated;
        updated.all = create && edit && view && del;
        state.permissions[module] = updated;
      }
    },
    setFormattedPermissions: (state, action) => {
      state.permissions = action.payload;
    },
    resetPermissions: (state) => {
      state.modules = [];
      state.actions = [];
      state.permissions = {};
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPermissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPermissions.fulfilled, (state, action) => {
        const { rolePermissions = [], modules = [], actions = [] } = action.payload;

        state.modules = modules;
        state.actions = [...actions, 'all'];

        // Format permissions
        state.permissions = modules.reduce((acc, module) => {
          const found = rolePermissions.find(p => p.module === module);
          acc[module] = {};
          actions.forEach(action => {
            acc[module][action] = found?.actions?.[action] || false;
          });
          const { create, edit, view, delete: del } = acc[module];
          acc[module].all = create && edit && view && del;
          return acc;
        }, {});
        state.loading = false;
      })
      .addCase(fetchPermissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateRolePermissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRolePermissions.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateRolePermissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { togglePermission, setFormattedPermissions, resetPermissions } = permissionSlice.actions;
export default permissionSlice.reducer;
