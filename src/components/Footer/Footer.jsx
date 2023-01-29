import style from './Footer.module.scss';
import { FooterTitleBlock } from "./FooterTitleBlock";
import { FooterContactsBlock } from "./FooterContactsBlock";
import { FooterSocialMediaBlock } from "./FooterSoialMediaBlock";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <FooterTitleBlock />
                <div className={style.inner}>
                    <FooterContactsBlock />
                    <FooterSocialMediaBlock />
                </div>
            </div>
        </footer>
    );
};

export { Footer };