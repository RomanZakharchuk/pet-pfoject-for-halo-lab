import style from './Header.module.scss';
import { Nav } from "./Nav";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <Nav />
            </div>
        </header>
    );
};

export { Header };