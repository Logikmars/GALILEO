import './Loader.scss';
import loaderStore from "../../store/loaderStore";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import langStore from '../../store/langStore';

export default observer(() => {
    const [loaderCounter, setloaderCounter] = useState(1);
    let loaderCounterInt = 0;
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang])

    useEffect(() => {
        loaderCounterInt = setInterval(() => {
            setloaderCounter(prev => prev + 1)
        }, 500);
        return () => {
            clearInterval(loaderCounterInt)
        }
    }, [])


    return (
        <>
            {
                loaderStore.loading && <div className='Loader'>
                    <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/loader.svg`} alt="" />
                    <div className='Loader_text'>
                        {t('Loading')}
                        {Array(((loaderCounter) % 4))
                            .fill(0)
                            .map((_, index) => {
                                return '.'
                            })}
                    </div>
                </div>
            }
        </>
    )
})