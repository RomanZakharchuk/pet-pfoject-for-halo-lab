import { motion } from 'framer-motion';

import style from './HeroTitleBlock.module.scss';
import { MHeadlineSvg } from "../../Icons";
import { FormSearch } from "../FormSearch";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    }),
};

const HeroTitleBlock = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            className={style.container}
        >
            <MHeadlineSvg custom={1} variants={textAnimation} className={style.title} />
            <motion.span custom={2} variants={textAnimation} className={style.text}>The scale of the challenges facing
                our planet can seem daunting, but we can all do something.
            </motion.span>
            <FormSearch />
        </motion.div>
    );
};

export { HeroTitleBlock };