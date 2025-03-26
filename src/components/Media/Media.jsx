import './Media.scss';
export default () => {
    return (
        <>
            <a href='https://x.com/Galileo_Fintech' target='_blank' className='Footer__item-left-social-item'>
                <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/social/x.svg`} alt="" />
            </a>
            <a href='#' target='_blank' className='Footer__item-left-social-item'>
                <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/social/inst.svg`} alt="" />
            </a>
            <a href='#' target='_blank' className='Footer__item-left-social-item'>
                <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/social/f.svg`} alt="" />
            </a>
            <a href='#' target='_blank' className='Footer__item-left-social-item'>
                <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/social/ln.svg`} alt="" />
            </a>
        </>
    )
}