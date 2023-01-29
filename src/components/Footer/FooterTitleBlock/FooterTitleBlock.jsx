import style from './FooterTitleBlock.module.scss';

const FooterTitleBlock = () => {
    return (
        <div className={style.footerTitleBlock}>
            <h4 className={style.title}>Contacts</h4>
            <span className={style.text}>2019 Rootz Foundation. All rights reserved</span>
        </div>
    );
};

export { FooterTitleBlock };