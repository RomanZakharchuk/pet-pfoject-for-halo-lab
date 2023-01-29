import style from './BurgerMenu.module.scss';

const BurgerMenu = ( { isOpen, onClick } ) => {
    return (
        <div onClick={onClick} className={`${style.burger} ${isOpen && style.open}`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export { BurgerMenu };