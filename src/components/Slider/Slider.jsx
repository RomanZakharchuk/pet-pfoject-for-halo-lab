import style from './Slider.module.scss';
import { Carousel } from "./Carousel";
import { useState } from "react";
import Card1 from '../../assets/images/Card1.png';
import Card2 from '../../assets/images/Card2.png';
import Card3 from '../../assets/images/Card-main.png';
import Card4 from '../../assets/images/Card3.png';
import Card5 from '../../assets/images/Card5.png';
import { ChevronLeftSvg, ChevronRightSvg } from "../Icons";

const cards = [
    {
        id: 1,
        img: Card1
    },
    {
        id: 2,
        img: Card2
    },
    {
        id: 3,
        img: Card3
    },
    {
        id: 4,
        img: Card4
    },
    {
        id: 5,
        img: Card5
    }
];

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState( 0 );

    const updadeIndex = ( newIndex ) => {
        if (newIndex < 0) {
            newIndex = cards.length - 1;
        } else if (newIndex >= cards.length) {
            newIndex = 0;
        }

        setActiveIndex( newIndex );
    };

    return (
        <section className={style.slider}>
            <div className={style.container}>
                <div className={style.inner}>
                    <Carousel cards={cards} activeIndex={activeIndex} />

                    <div className={style.buttonsBlock}>
                        <div className={style.buttonsInner}>
                            <div className={style.btn} onClick={() => {
                                updadeIndex( activeIndex - 1 );
                            }}>
                                <ChevronLeftSvg />
                            </div>
                            <div className={style.identifier}>{activeIndex + 1} <span>/ {cards.length}</span></div>
                            <div className={style.btn} onClick={() => {
                                updadeIndex( activeIndex + 1 );
                            }}>
                                <ChevronRightSvg />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Slider };