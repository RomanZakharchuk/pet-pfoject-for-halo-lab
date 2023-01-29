import { motion } from "framer-motion";

import style from './QuestionsBlock.module.scss';
import { MQuestionItem } from "../QuestionItem";

const questions = [
    {
        id: 1,
        title: 'What can I do to protect our planet?',
        body: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
    },
    {
        id: 2,
        title: 'How to save nature ecology?',
        body: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
    },
    {
        id: 3,
        title: 'What is nature conservation?',
        body: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources'
    }
];

const blockAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    }),
};

const QuestionsBlock = () => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.2 }}
            className={style.questionsBlock}
        >
            {questions.map( item => (
                <MQuestionItem
                    custom={item.id + 1}
                    variants={blockAnimation}
                    key={item.id}
                    question={item}
                />
            ) )}
        </motion.div>
    );
};

export { QuestionsBlock };