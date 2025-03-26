import { useEffect, useState } from 'react';
import Media from '../Media/Media';
import './Footer.scss';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import langStore from '../../store/langStore';
export default observer(() => {
    const [showTerms, setshowTerms] = useState(false);


    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang])

    return (
        <>
            {showTerms && <div className='Footer_terms' onClick={() => { setshowTerms(false) }}>
                <div className='Footer_terms_inner'>
                    <div className='Footer_terms_header'>
                        {t('Privacy Policy')}
                    </div>

                    <div className='Footer_terms_header'>
                        1. General Provisions
                    </div>
                    This Privacy Policy ("Policy") explains how Galileo ("We," "Our Service") collects, uses, and protects user data. By using Our Service, you agree to this Policy.
                    <div className='Footer_terms_header'>
                        2. Data Collection and Use
                    </div>
                    We may collect:
                    <br />- Personal Data: Name, email, phone number, and other information you provide when signing up or using our services.
                    <br />- Financial Data: Transaction history, payment details, and account balances related to digital assets and fiat transactions.
                    <br />- Technical Data: IP address, device type, browser, and usage patterns to improve performance and security.

                    <br /><br />Data is used to:
                    <br />- Provide seamless financial services, including digital asset transactions, payments, and investment tools.
                    <br />- Enhance security, prevent fraud, and comply with legal obligations.
                    <br />- Improve the user experience and develop new features.

                    <div className='Footer_terms_header'>


                        3. Data Security and Retention
                    </div>
                    <br />- Data is encrypted and stored securely.
                    <br />- We do not share data with third parties unless required for service functionality or legal compliance.
                    <br />- Data is retained only as long as necessary for service operation or regulatory requirements.
                    <div className='Footer_terms_header'>


                        4. User Rights
                    </div>
                    Users can:
                    <br />- Request access, correction, or deletion of their data.
                    <br />- Opt out of marketing communications.
                    <br />- Manage data preferences through account settings.

                    <div className='Footer_terms_header'>
                        5. Third-Party Services
                    </div>
                    Some transactions and financial services may involve third-party providers. We ensure compliance with relevant regulations but encourage users to review their privacy policies.

                    <div className='Footer_terms_header'>

                        6. Updates to the Policy
                    </div>
                    We may update this Policy as our services evolve. Changes take effect upon publication.

                    <div className='Footer_terms_header'>

                        7. Contact Information
                    </div>
                    For inquiries about this Policy, contact us.
                </div>
            </div>}
            <div className='Footer' id='Footer'>
                <div className='Footer__container'>
                    <p className='Footer__title'>{t('Start Using Galileo Today!')}</p>
                    <div className='Footer__btn'>
                        <a href='#' target='_blank' className='Footer__btn-item Footer__btn-item-left'>{t('Contact us')}</a>
                        <a href='#' target='_blank' className='Footer__btn-item Footer__btn-item-right'>{t('Get the App')}  <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/arrow.png`} alt="" /></a>
                    </div>
                    <div className='Footer__item'>
                        <div className='Footer__item-left'>
                            <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/logo.svg`} alt="" className='Footer__item-left-logo' />
                            <div className='Footer__item-left-social'>
                                <Media />
                            </div>
                            <p className='Footer__item-left-company'>{t('Galileo Capital LLC. 2025. All rights reserved')}</p>
                        </div>
                        <div className='Footer__item-right'>
                            <a href="#Features" className='Footer__item-right-link'>{t('Features')}</a>
                            <a href="#About" className='Footer__item-right-link'>{t('About Galileo')}</a>
                            {/* <a href="#Footer" className='Footer__item-right-link'>Contact Us</a> */}
                            <div className='Footer__item-right-link' onClick={() => { setshowTerms(true) }}>{t('Terms & Privacy')}</div>
                            <p className='Footer__item-right-company'>{t('*Digital assets services are proveded by Galileo Capital LLC a US Fincen registered company')}</p>
                        </div>
                    </div>
                    <div className='Footer__disclaimer'>
                        ADVERTENCIA: Se advierte al público que GIO Capital Groups SA es supervisada solamente en materia de prevención de legitimación de capitales, financiamiento al terrorismo y financiamiento de la proliferación de armas de destrucción masiva, y además se encuentra sujeta a disposiciones vinculantes de la Unidad de Inteligencia Financiera del Instituto Costarricense sobre Drogas. Por lo tanto, la Sugef no supervisa en materia financiera a Gio Capital Group SA, ni los negocios que ofrece, ni su seguridad, estabilidad o solvencia.
                    </div>
                </div>
            </div>
        </>
    )
})