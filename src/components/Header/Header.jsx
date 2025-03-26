import { observer } from "mobx-react-lite";
import './Header.scss';
import { modalStore } from "../../store/modal";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import langStore from "../../store/langStore";
const Header = observer(() => {

    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang])

    const [lang, setlang] = useState('en');
    useEffect(() => {
        langStore.setLang(lang)
    }, [lang])

    return (
        <div className='Header'>
            <div className='Header__item left'>
                <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/logo.svg`} alt="" style={{ opacity: modalStore.isOpen ? 0 : 1, transition: "opacity 0.3s ease" }} />
            </div>
            <div className='Header__item center'>
                <a href='#About'><span>/</span> {t('About')} <span>/</span></a>
                <a href='#Features'><span>/</span> {t('Features')} <span>/</span></a>
                <a href='#Clients'><span>/</span> {t('Our clients')} <span>/</span></a>
                <a href='#Team'><span>/</span> {t('Team')} <span>/</span></a>
                <a href='#Footer'><span>/</span> {t('Contacts')} <span>/</span></a>
            </div>
            <div className='Header__item right Header__item_right'>
            {!modalStore.isOpen && (
                <>
                <div className="Header__item-all">
                    <div className={`Header_langSwitcher_el ${lang === 'en' && 'Header_langSwitcher_el_selected'}`} onClick={() => { setlang('en') }}>EN</div>
                    <div className='Header_langSwitcher_del'>|</div>
                    <div className={`Header_langSwitcher_el ${lang === 'es' && 'Header_langSwitcher_el_selected'}`} onClick={() => { setlang('es') }}>ES</div>
                </div>
                </>
            )}
                <a>{t('Get the App')} <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/arrow.png`} alt="" /></a>
                <div className={`Header__item-burger ${modalStore.isOpen ? "active" : ""}`}
                    onClick={modalStore.toggleModal} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
});

export default Header;