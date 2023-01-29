import style from './ContactLink.module.scss';
import { motion } from "framer-motion";

const linkAnimation = {
    hover: {
        scale: [null, 1.2, 1],
        transition: { duration: 0.3 }
    }
};

const ContactLink = () => {
    return (
        <motion.a whileHover='hover' variants={linkAnimation} href="/" className={style.contactLink}>
            Apply
        </motion.a>
    );
};

export { ContactLink };