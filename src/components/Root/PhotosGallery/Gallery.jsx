import React from 'react'
import s from './Gallery.module.scss'

import arrowLeft from '../../../assets/images/building/arrowLeft.png'
import arrowRight from '../../../assets/images/building/arrowRight.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Photo1 from '../../../assets/images/gallery/Photo1.jpg'
import Photo2 from '../../../assets/images/gallery/Photo2.jpg'
import Photo3 from '../../../assets/images/gallery/Photo3.jpg'
import Card from './Card';

const Gallery = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className={s.gallery}>
            <div className={s.container}>
                <h1 className={s.title}>Галерея наших фото</h1>
                <div className={s.slider}>
                    <Slider {...settings} className={s.slider}>
                        <Card image={Photo1}/>
                        <Card image={Photo2} />
                        <Card image={Photo3} />
                        <Card image={Photo1}/>
                        <Card image={Photo2} />
                        <Card image={Photo3} />
                        <Card image={Photo1}/>
                        <Card image={Photo2} />
                        <Card image={Photo3} />
                    </Slider>
                </div>
            </div>
        </div>
    )
}


const NextArrow = (props) => {

    const { onClick } = props;

    return (
        <div className={s.nextArrow} onClick={onClick}>
            <img src={arrowRight} alt="" />
        </div>
    )
}
const PrevArrow = (props) => {

    const { onClick } = props;

    return (
        <div className={s.prevArrow} onClick={onClick}>
            <img src={arrowLeft} alt="" />
        </div>
    )
}

export default Gallery