import { motion } from "framer-motion";

const heardAnimation = {
    hover: {
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, -180, -180, 0],
    }
};

const HeartSvg = ( { className } ) => {
    return (
        <motion.svg
            whileHover='hover'
            variants={heardAnimation}
            className={className}
            viewBox="0 0 48 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M46.0001 25.2532C43.1808 12.8408 40.2699 0 22.2209 0C9.96887 0 0 10.0492 0 22.4V56H33.3314V47.6H36.109C39.1727 47.6 41.6643 45.0884 41.6643 42V33.6H48C48 33.6 46.3612 26.8576 46.0001 25.2532ZM22.2209 33.5664C22.2209 33.5664 11.1105 25.424 11.1105 19.3872C11.1105 13.6556 19.7516 11.1636 22.2209 18.6928C24.6902 11.1664 33.3314 13.6556 33.3314 19.3872C33.3314 25.424 22.2209 33.5664 22.2209 33.5664Z"
                fill="white" />
        </motion.svg>
    );
};

export { HeartSvg };