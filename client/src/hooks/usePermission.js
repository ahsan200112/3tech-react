// usePermission.js

import { useSelector } from 'react-redux';
import { checkPermission } from '../utils/permissionUtils';

const usePermission = (moduleName) => {
  const user = useSelector((state) => state.user?.user); // Adjust if user is stored differently
  
  const rolePermissions = user?.role?.permissions?.permissions || []; // Extract role-based permissions
  // Function to check the specific permission for the user
  const permission = rolePermissions.find((perm) => perm.module === moduleName);

  return {
    canCreate: checkPermission(permission?.actions, 'create'),
    canEdit: checkPermission(permission?.actions, 'edit'),
    canView: checkPermission(permission?.actions, 'view'),
    canDelete: checkPermission(permission?.actions, 'delete'),
  };
};

export default usePermission;
