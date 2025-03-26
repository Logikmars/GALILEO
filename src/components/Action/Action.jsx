import { useGSAP } from '@gsap/react';
import './Action.scss';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import langStore from '../../store/langStore';

const partners = ['skillful', 'betcris', 'sicsa', 'sport', 'anyone', 'ocean']
const partnersx3 = [...partners, ...partners, ...partners, ...partners,]

export default observer(() => {
    const app = useRef(null); // Создаем массив ссылок на элементы
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang])
    useGSAP(
        () => {
            gsap.to(`.Action_decor1`,
                {
                    y: -100,
                    x: -100,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: `.Action_decorTop`,
                        scrub: 1,
                        // markers: true,
                        start: `0px 80%`,
                        end: `${window.innerHeight}px 80%`,
                    }
                }
            );
            gsap.to(`.Action_decor2`,
                {
                    y: -100,
                    x: 300,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: `.Action_decorTop`,
                        scrub: 1,
                        // markers: true,
                        start: `0px 80%`,
                        end: `${window.innerHeight}px 80%`,
                    }
                }
            );
            gsap.to(`.Action_decor3`,
                {
                    y: 100,
                    x: 30,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: `.Action_decorTop`,
                        scrub: 1,
                        // markers: true,
                        start: `0px 80%`,
                        end: `${window.innerHeight}px 80%`,
                    }
                }
            );
        },
        { scope: app }
    )
    return (
        <div className='Action_wrapper' ref={app}>
            <div className='Action_decorTop  free_img'>
                <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Action/bubble0.webp`} alt="" />
            </div>
            <div className='Action_decorTop_text  free_img'>
                <div className='Action_decorTop_text_header'>
                    {t('$26M+')}
                </div>
                <div className='Action_decorTop_text_subheader'>
                    {t('in transactions processed in 2024')}
                </div>
            </div>
            <div className='Action_decorTop Action_decor1 free_img'>
                <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Action/bubble1.webp`} alt="" />
            </div>
            <div className='Action_decorTop Action_decor2 free_img'>
                {/* <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Action/bubble2.webp`} alt="" /> */}
            </div>
            <div className='Action_decorTop Action_decor3 free_img'>
                <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Action/bubble3.webp`} alt="" />
            </div>
            <div className='Action' id='Action'>
                <div className='Action__container'>
                    <p className='Action__container-title'>/ {t('Galileo in Action')} /</p>
                    {/* <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Action/bubbles.svg`} alt="" className='Action__container-img' /> */}
                    <div className='Action__decorPlace' id='Clients'></div>
                    <p className='Action__container-title Action_partners_header'>/ {t('Our clients')} /</p>

                    <div className='Action__container-partnes' >
                        {
                            partnersx3.map((partner) => {
                                return <img src={`/img/Action/${partner}.svg`} alt="" />
                            })
                        }
                    </div>
                    <div className='Action__container-demo'>
                        <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Action/demo.svg`} alt="" className='Action__container-demo-img' />
                        <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Action/demoPhone.png`} alt="" className='Action__container-demo-img-phone' />
                        <a href='#' target='_blank'>{t('Get the App')} <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/arrow.png`} alt="" /></a>
                        <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Action/phone.png`} alt="" className='Action__container-demo-phone' />
                    </div>
                </div>
            </div>
        </div>
    )
})