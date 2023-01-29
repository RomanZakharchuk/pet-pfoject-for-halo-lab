import style from './CarouselItem.module.scss';

const CarouselItem = ( { img } ) => {
    return (
        <div className={style.carouselItem}>
            <img src={img} alt="Img" />
        </div>
    );
};

export { CarouselItem };