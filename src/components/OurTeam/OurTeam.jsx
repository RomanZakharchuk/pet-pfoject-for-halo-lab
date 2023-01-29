import style from './OurTeam.module.scss';
import { OurTeamPersons } from "./OurTeamPersones";
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
};

const OurTeam = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
        >
            <div className={style.container}>
                <motion.h2 custom={1} variants={textAnimation} className={style.title}>Our top team</motion.h2>
                <motion.span custom={2} variants={textAnimation}  className={style.text}>Learn more about how you can save our planet's nature.</motion.span>
                <OurTeamPersons />
            </div>
        </motion.section>
    );
};

export { OurTeam };