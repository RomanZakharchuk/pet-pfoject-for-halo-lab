import style from './Carousel.module.scss';
import { CarouselItem } from "../CarouselItem";

const Carousel = ( { cards, activeIndex } ) => {
    return (
        <div className={style.carousel}>
            <div className={style.carouselInner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {cards.map( card => (
                    <CarouselItem key={card.id} img={card.img} />
                ) )}
            </div>
        </div>
    );
};

export { Carousel };