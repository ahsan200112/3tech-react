import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { getRolePermissions, updatePermissions } from '../../api/apiEndpoints';

const Permissions = ({ role, onClose }) => {
    const [permissions, setPermissions] = useState({});
    const [modules, setModules] = useState([]);
    const [actions, setActions] = useState([]);

    // Fetch permissions and module/action data for the given role
    useEffect(() => {
        const fetchPermissions = async () => {
            try {
                const { data } = await api.get(getRolePermissions(role._id));
                const rolePermissions = data.rolePermissions || [];
                const fetchedModules = data.modules || [];
                const fetchedActions = data.actions || [];

                // Format permissions for easier handling
                const formattedPermissions = fetchedModules.reduce((acc, module) => {
                    acc[module] = fetchedActions.reduce((actionAcc, action) => {
                        actionAcc[action] = rolePermissions.some(permission =>
                            permission.module === module && permission.actions[action]
                        );
                        return actionAcc;
                    }, {});
                    return acc;
                }, {});

                setPermissions(formattedPermissions);
                setModules(fetchedModules);  // Set dynamic modules
                setActions(fetchedActions);  // Set dynamic actions
            } catch (error) {
                console.error('Error fetching permissions:', error);
            }
        };

        if (role?._id) {
            fetchPermissions();
        }
    }, [role]);

    // Handle toggling individual permissions
    const togglePermission = (module, action) => {
        setPermissions((prev) => ({
            ...prev,
            [module]: {
                ...prev[module],
                [action]: !prev[module][action],
            },
        }));
    };

    // Handle update of permissions
    const handleUpdate = async () => {
        try {
            // Convert permissions object to an array of permission objects
            const updatedPermissions = Object.keys(permissions).map((module) => ({
                module,
                actions: permissions[module],
            }));

            // Send updated permissions to the backend
            await api.put(updatePermissions, {
                roleId: role._id,
                permissions: updatedPermissions,
            });

            onClose();  // Close the modal after updating
        } catch (error) {
            console.error('Error updating permissions:', error);
        }
    };

    return (
        <div className="border rounded p-4 shadow-sm bg-light">
            <h4 className="mb-3">Permissions for: <strong>{role.name}</strong></h4>

            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>Module</th>
                        {actions.map((action) => (
                            <th key={action}>{action}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {modules.map((module) => (
                        <tr key={module}>
                            <td>{module}</td>
                            {actions.map((action) => (
                                <td key={action} className="text-center">
                                    {/* <input
                    type="checkbox"
                    checked={permissions[module]?.[action] || false}
                    onChange={() => togglePermission(module, action)}
                  /> */}
                                    <input
                                        type="checkbox"
                                        checked={permissions[module]?.[action] || false}
                                        onChange={() => togglePermission(module, action)}
                                        disabled={role.name === 'Super Admin'}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
                {/* <button className="btn btn-primary" onClick={handleUpdate}>Update Permissions</button> */}
                {role.name !== 'Super Admin' && (
                    <button className="btn btn-primary" onClick={handleUpdate}>Update Permissions</button>
                )}
            </div>
        </div>
    );
};

export default Permissions;
