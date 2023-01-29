import style from './FooterContactsBlock.module.scss';

const FooterContactsBlock = () => {
    return (
        <div className={style.footerContactsBlock}>
            <h6 className={style.title}>Headquarters</h6>
            <span className={style.text}>1234 Taliban</span>
            <span className={style.text}>Los Angeles, La 1234567</span>
            <span className={style.text}>(123) 456-7890</span>
        </div>
    );
};

export { FooterContactsBlock };