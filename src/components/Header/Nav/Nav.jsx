import { useState } from "react";
import { useDispatch } from "react-redux";

import style from './Nav.module.scss';
import { Logo } from "../Logo";
import { MainNavigation } from "../MainNavigation";
import { ContactLink } from "../ContactLink";
import { BurgerMenu } from "../BurgerMenu";
import { MobileMenu } from "../MobileMenu";
import { rootzActions } from "../../../redux/slices/rootz.slice";

const Nav = () => {
    const [isOpen, setIsOpen] = useState( false );
    const dispatch = useDispatch();

    return (
        <>
            <div className={style.inner}>
                <Logo />
                <MainNavigation />
                <ContactLink />
                <BurgerMenu isOpen={isOpen} onClick={() => {
                    setIsOpen( !isOpen );
                    dispatch( rootzActions.fixScreenPosition( !isOpen ) );
                }} />
            </div>

            <div className={style.line}></div>
            <MobileMenu isOpen={isOpen} />
        </>
    );
};

export { Nav };