import style from './Contact.module.scss';
import { ContactTitleBlock } from "./ContactTitleBlock";
import { ContactLogInForm } from "./ContactLogInForm";

const Contact = () => {
    return (
        <section>
            <div className={style.container}>
                <div className={style.inner}>
                    <ContactTitleBlock />
                    <ContactLogInForm />
                </div>
            </div>
        </section>
    );
};

export { Contact };