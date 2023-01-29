import style from './QuestionsTitleBlock.module.scss';
import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
};

const QuestionsTitleBlock = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            className={style.questionsTitleBlock}
        >
            <motion.h2 custom={1} variants={textAnimation} className={style.title}>Ready to Get started?</motion.h2>
            <motion.span custom={2} variants={textAnimation} className={style.text}>When pattern is mentioned in
                interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints
                on interior fabrics.
            </motion.span>
            <motion.a custom={3} variants={textAnimation} href="/" className={style.btn}>Contact us</motion.a>
        </motion.div>
    );
};

export { QuestionsTitleBlock };