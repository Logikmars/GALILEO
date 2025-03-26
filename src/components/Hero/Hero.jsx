import { useGSAP } from '@gsap/react';
import './Hero.scss';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import langStore from '../../store/langStore';
export default observer(() => {
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang])
    return (
        <div className='Hero'>
            <p className='Hero__title'>{t('Modern Finance for a Changing World')}</p>
            <p className='Hero__description'>{t('Galileo bridges')}</p>
            <div className='Hero__btn'>
                <a href='#' target='_blank' className='Hero__btn-item Hero__btn-item-left'>{t('Learn More')}</a>
                <a href='#' target='_blank' className='Hero__btn-item Hero__btn-item-right'>{t('Get Started')} <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/arrow.png`} alt="" /></a>
            </div>
        </div>
    )
})