import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LanguageToggleDashboard from './LanguageToggleDashboard';
import UserImage from '../../assets/images/girl2.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../../redux/features/users/usersSlice';
import { useTranslation } from 'react-i18next';

const Header = ({ onToggleSidebar, onMobileSidebarToggle }) => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Hook to navigate
  const dispatch = useDispatch(); // Dispatch hook to trigger actions

  // Access user data from Redux state
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    // Dispatch the fetchCurrentUser action to get user data when the component mounts
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/dashboard-login');
  };

  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-white px-4 py-2">
        <div className="container-fluid">
          <div>
            {/* Sidebar Toggle Button for collaped */}
            <button
              className="btn btn-outline-primary d-none d-lg-block"
              onClick={onToggleSidebar}
            >
              ☰
            </button>
          </div>
          {/* sidebar toggle with sidebar in mobile and medium size screens */}
          <div>
            <button
              className="btn btn-outline-primary d-lg-none"
              onClick={onMobileSidebarToggle}
            >
              ☰
            </button>
          </div>
          <div className="collapse navbar-collapse justify-content-end custom-gap">
            <LanguageToggleDashboard />
            <div className="d-flex align-items-center gap-2 user-image">
              <img
                src={UserImage}
                alt="User"
                className="rounded-circle"
              />
              <div className="d-flex flex-column text-end">
                <span className="fw-bold user-name">
                  {user ? `${user.firstName} ${user.lastName}` : 'Guest'}
                </span>
                <span className="text-muted user-role">
                  {user?.role?.name || 'No Role'}
                </span>
              </div>
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={handleLogout} // Handle the logout
            >
              {t("Logout")}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
