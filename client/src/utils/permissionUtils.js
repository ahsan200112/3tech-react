// permissionUtils.js

export const checkPermission = (permissionsList, actionType) => {
  if (!permissionsList) return false;
  return permissionsList[actionType] || false;
};
  