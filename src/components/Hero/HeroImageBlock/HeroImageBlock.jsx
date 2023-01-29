import style from './HeroImageBlock.module.scss';
import ImageParrot from '../../../assets/images/Parrot.png';
import MulticolorBlock from '../../../assets/images/Multicolor-block.png';
import { HeartSvg } from "../../Icons";

const HeroImageBlock = () => {
    return (
        <div className={style.heroImageBlock}>
            <div className={style.imageParrot}>
                <img src={ImageParrot} alt="Parrot" />
            </div>
            <div className={style.multicolorBlock}>
                <img src={MulticolorBlock} alt="Multicolor Block" />
                <HeartSvg className={style.heartSvg} />
                <span className={style.title}>Members</span>
                <span className={style.number}>29 128</span>
            </div>
        </div>
    );
};

export { HeroImageBlock };