import { observer } from "mobx-react-lite";
import './Modal.scss';
import { modalStore } from "../../store/modal";
import Media from "../Media/Media";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import langStore from "../../store/langStore";

const Modal = observer(() => {
    const { t, i18n } = useTranslation(); // Всегда вызываем хук сначала

    useEffect(() => {
        if (i18n.language !== langStore.lang) {
            i18n.changeLanguage(langStore.lang);
        }
    }, [langStore.lang, i18n]);

    if (!modalStore.isOpen) return null; // Условие после хуков

    return (
        <div className="Modal">
            <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/logo.svg`} alt="Galileo Logo" className="Modal__logo" />
            <a>{t('About Galileo')}</a>
            <a>{t('Features')}</a>
            <a>{t('Contacts')}</a>
            <a>{t('Terms & Privacy')}</a>
            <div className="Modal__social">
                <Media />
            </div>
        </div>
    );
});

export default Modal;
