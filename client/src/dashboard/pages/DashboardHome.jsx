import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardHome = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{t("Welcome to your Dashboard")}</h2>
      <p>{t("This is your overview page.")}</p>
    </div>
  );
};

export default DashboardHome;
