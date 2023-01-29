import { useForm } from "react-hook-form";

import style from './ContactLogInForm.module.scss';
import { PetalRedSvg, PetalPurpleSvg } from "../../Icons";

const ContactLogInForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const submit = ( data ) => {
        console.log( 'login::', data );
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit( submit )}
            className={style.form}
        >
            <h3 className={style.title}>Log in</h3>
            <input {...register( 'name' )} placeholder={'Name'} type="text" className={style.input} />
            <input {...register( 'email' )} placeholder={'Email'} type={'text'} className={style.input} />
            <button type={'submit'} className={style.btn}>Book a demo</button>
            <PetalPurpleSvg className={style.petalPurpleSvg} />
            <PetalRedSvg className={style.petalRedSvg} />
        </form>
    );
};

export { ContactLogInForm };