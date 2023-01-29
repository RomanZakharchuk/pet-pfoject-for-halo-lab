import style from './Hero.module.scss';
import { HeroImageBlock } from "./HeroImageBlock";
import { HeroTitleBlock } from "./HeroTitleBlock";

const Hero = () => {
    return (
        <section className={style.hero}
        >
            <div className={style.container}>
                <HeroTitleBlock />
                <HeroImageBlock />
            </div>
        </section>
    );
};

export { Hero };