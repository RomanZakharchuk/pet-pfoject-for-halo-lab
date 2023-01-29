import style from './FAQs.module.scss';
import { QuestionsTitleBlock } from "./QuestionsTitleBlock";
import { QuestionsBlock } from "./QuestionsBlock";

const FAQs = () => {
    return (
        <section>
            <div className={style.container}>
                <QuestionsTitleBlock />
                <QuestionsBlock />
            </div>
        </section>
    );
};

export { FAQs };