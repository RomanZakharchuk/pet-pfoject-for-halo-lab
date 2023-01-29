import style from './ContactTitleBlock.module.scss';
import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    }),
}

const ContactTitleBlock = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            className={style.contactTitleBlock}
        >
            <motion.h2 custom={1} variants={textAnimation} className={style.title}>Get started today!</motion.h2>
            <motion.span custom={4} variants={textAnimation} className={style.text}>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet.</motion.span>
        </motion.div>
    );
};

export { ContactTitleBlock };