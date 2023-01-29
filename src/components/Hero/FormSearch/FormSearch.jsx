import { useForm } from "react-hook-form";

import style from './FormSearch.module.scss';
import { MarkerSvg } from "../../Icons";

const FormSearch = () => {
    const { register, handleSubmit, reset } = useForm();

    const submit = data => {
        console.log( 'search::', data );
        reset();
    };

    return (
        <form onSubmit={handleSubmit( submit )} className={style.form}>
            <MarkerSvg className={style.marker} />
            <input {...register( 'search' )} type="text" placeholder={'Find the place to help'}
                   className={style.input} />
            <button type={'submit'} className={style.btn}>Search</button>
        </form>
    );
};

export { FormSearch };