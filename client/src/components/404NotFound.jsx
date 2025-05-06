import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-4">
      <h1 className="display-1 fw-bold text-danger mb-4">404</h1>
      <h2 className="fw-semibold text-dark mb-3">{t('Page Not Found')}</h2>
      <p className="fs-5 text-muted mb-4">
        {t('Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check the URL and try again.')}
      </p>
      <p className="text-muted mb-4">
        {t('If you think this is an error, please contact our support team or return to the homepage.')}
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        <i className="fas fa-home me-2"></i> {t('Go Back Home')}
      </Link>
    </div>
  );
};

export default NotFound;
