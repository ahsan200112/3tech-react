import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import { getRolePermissions, updatePermissions } from '../../api/apiEndpoints';

const Permissions = ({ role, onClose }) => {
    const [permissions, setPermissions] = useState({});
    const [modules, setModules] = useState([]);
    const [actions, setActions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formatPermissions = (rolePermissions, modulesList, actionsList) => {
        return modulesList.reduce((acc, module) => {
            const found = rolePermissions.find(p => p.module === module);
            acc[module] = {};

            actionsList.forEach(action => {
                acc[module][action] = found?.actions?.[action] || false;
            });

            return acc;
        }, {});
    };

    // Fetch permissions and module/action data for the given role
    useEffect(() => {
        const fetchPermissions = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data } = await api.get(getRolePermissions(role._id));
                const rolePermissions = data.rolePermissions || [];
                const fetchedModules = data.modules || [];
                const fetchedActions = data.actions || [];

                const formattedPermissions = formatPermissions(rolePermissions, fetchedModules, fetchedActions);

                setPermissions(formattedPermissions);
                setModules(fetchedModules);
                setActions(fetchedActions);
            } catch (error) {
                console.error('Error fetching permissions:', error);
                setError('Failed to fetch permissions.');
            } finally {
                setLoading(false);
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
        setError(null);
        try {
            const updatedPermissions = Object.entries(permissions).map(([module, actions]) => ({
                module,
                actions
            }));

            await api.put(updatePermissions, {
                roleId: role._id,
                permissions: updatedPermissions
            });

            onClose();
        } catch (error) {
            console.error('Error updating permissions:', error);
            setError('Failed to update permissions.');
        }
    };

    return (
        <div className="border rounded p-4 shadow-sm bg-light">
            <h4 className="mb-3">Permissions for: <strong>{role.name}</strong></h4>

            {error && <div className="alert alert-danger">{error}</div>}

            {loading ? (
                <div>Loading permissions...</div>
            ) : (
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
            )}

            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
                {role.name !== 'Super Admin' && (
                    <button className="btn btn-primary" onClick={handleUpdate}>Update Permissions</button>
                )}
            </div>
        </div>
    );
};

export default Permissions;
