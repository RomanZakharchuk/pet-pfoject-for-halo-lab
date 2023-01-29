import style from './MainNavigation.module.scss';

const MainNavigation = () => {
    return (
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
    );
};

export { MainNavigation };