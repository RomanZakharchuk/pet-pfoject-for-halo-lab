import { forwardRef, useState } from "react";
import { motion } from "framer-motion";

import style from './QuestionItem.module.scss';

const QuestionItem = forwardRef( ( { question }, ref ) => {
        const { title, body } = question;
        const [isActive, setIsActive] = useState( false );

        const toggleBtn = () => {
            setIsActive( !isActive );
        };

        return (
            <div ref={ref} className={style.questionItem}>
                <h5 className={style.title}>{title}</h5>
                <span className={`${style.text} ${isActive && style.showQuestion}`}>{body}</span>
                <div className={style.line}></div>
                <div onClick={toggleBtn} className={`${style.switcherBtn} ${isActive && style.plus}`}></div>
            </div>
        );
    }
);

export const MQuestionItem = motion( QuestionItem );
export { QuestionItem };