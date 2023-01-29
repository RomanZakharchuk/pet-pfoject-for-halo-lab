import style from './FooterSocialMediaBlock.module.scss';
import { FacebookSvg, LinkedInSvg, TwitterSvg } from "../../Icons";

const FooterSocialMediaBlock = () => {
    return (
        <div className={style.footerSocialMediaBlock}>
            <h6 className={style.title}>Social media</h6>
            <div className={style.socialMediaWrap}>
                <a className={style.link} href="">
                    <TwitterSvg />
                </a>
                <a className={style.link} href="">
                    <FacebookSvg />
                </a>
                <a className={style.link} href="">
                    <LinkedInSvg />
                </a>
            </div>
        </div>
    );
};

export { FooterSocialMediaBlock };