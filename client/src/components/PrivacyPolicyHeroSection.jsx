import React from "react";
import { useTranslation } from 'react-i18next';

function PrivacyPolicyHeroSection() {
    const { t } = useTranslation();

    return (
        <>
            <section className="u-section">
                <div className="container mx-auto py-5" data-aos="fade-up" data-aos-delay="1200">
                    <h1 className="p-h">{t('3Tech Platform Privacy and Usage Policy')}</h1>
                    <p className="p-p">{t('Last updated:')} June 1, 2024</p>
                    <p className="p-p">{t("Welcome to the 3Tech Platform. We place great importance on protecting the privacy of our users and respecting their rights. Therefore, we adhere to a strict privacy and usage policy. Please read the following policy carefully to understand how we collect and use personal information and our user's rights.")}</p>

                    <h2 className="p-i mt-4">1. {t("Information Collection")}:</h2>
                    <ul className="p-p list-disc pl-6">
                        <li>{t("We collect personal information you provide to us with your explicit consent, such as name, email address, and phone number, when registering on or using the platform.")}</li>
                        <li>{t("We may collect non-personal data, such as platform usage data, to improve our services.")}</li>
                    </ul>

                    <h2 className="p-i mt-4">2. {t('Information Use')}:</h2>
                    <ul className="p-p list-disc pl-6">
                        <li>{t("We use the information we collect to personalize your experience on the platform, better provide services, and improve the quality of our services.")}</li>
                        <li>{t('We may use the information to communicate with you about our products and services and to provide promotional offers.')}</li>
                    </ul>

                    <h2 className="p-i mt-4">3. {t('Information Sharing')}:</h2>
                    <ul className="p-p list-disc pl-6">
                        <li>{t('We do not sell or share your personal information with third parties without your explicit consent, unless legally required.')}</li>
                        <li>{t("We may share information with our affiliates or trusted third-party partners who assist us in providing the services.")}</li>
                    </ul>

                    <h2 className="p-i mt-4">4. {t('Information Protection')}:</h2>
                    <ul className="p-p list-disc pl-6">
                        <li>{t('We take technical and organizational measures to protect your personal information from unauthorized access, improper use, alteration, and modification.')}</li>
                        <li>{t('We adhere to strict security standards and guidelines to protect your data.')}</li>
                    </ul>

                    <h2 className="p-i mt-4">5. {t('Legal Compliance')}:</h2>
                    <p className="p-p">{t('We comply with all applicable Saudi laws regarding personal data protection and privacy.')}</p>

                    <h2 className="p-i mt-4">6. {t('Rights to Use and Control')}:</h2>
                    <ul className="p-p list-disc pl-6">
                        <li>{t('You have the right to access, correct, delete, or transfer your personal information.')}</li>
                        <li>{t('You can also modify your personal information through your account settings.')}</li>
                    </ul>

                    <h2 className="p-i mt-4">7. {t('Policy Changes')}:</h2>
                    <p className="p-p">{t("We may update our Privacy and Usage Policy periodically, and we will post any changes on the platform.")}</p>

                    <p className="p-p mt-5">{t("If you have any questions or concerns about our Privacy and Usage Policy, please contact our support team at info@3tech.sa or +966557122917.")}</p>
                    <h2 className="p-i mt-5">{t('Greetings')},</h2>
                    <p className="p-p">{t("3Tech Platform Team.")}</p>
                </div>
            </section>
        </>
    );
}

export default PrivacyPolicyHeroSection;
