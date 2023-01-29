import style from './PersonItem.module.scss';

const PersonItem = ( { person } ) => {
    const { name, img } = person;

    return (
        <div className={style.item}>
            <img src={img} alt={name} />
        </div>
    );
};

export { PersonItem };