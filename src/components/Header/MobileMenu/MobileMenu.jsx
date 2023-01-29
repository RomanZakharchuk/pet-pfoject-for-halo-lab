import style from './MobileMenu.module.scss';

const MobileMenu = ( { isOpen } ) => {
    return (
        <div className={`${style.mobileMenu} ${isOpen && style.show}`}>
            <nav className={style.menu}>
                <ul className={style.menuContent}>
                    <li className={style.menuItem}>
                        <a className={style.menuLink} href="/">Home</a>
                    </li>
                    <li className={style.menuItem}>
                        <a className={style.menuLink} href="/">Our mission</a>
                    </li>
                    <li className={style.menuItem}>
                        <a className={style.menuLink} href="/">Places</a>
                    </li>
                    <li className={style.menuItem}>
                        <a className={style.menuLink} href="/">Team</a>
                    </li>
                </ul>
            </nav>
            <a href="/" className={style.contactLink}>
                Apply
            </a>
        </div>
    );
};

export { MobileMenu };