import React from 'react'
import s from './Building.module.scss'
import Slider from 'react-slick';
import Card from './Card';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Frame1 from '../../../assets/images/building/Frame1.jpg'
import Frame2 from '../../../assets/images/building/Frame2.jpg'
import Frame3 from '../../../assets/images/building/Frame3.jpg'
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';


const Building = () => {

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
        <div className={s.building}>
            <div className={s.container}>
                <h1 className={s.title}>
                    Ход строительства
                </h1>
                <div className={s.slider}>
                    <Slider {...settings} className={s.slider}>
                        <Card numbOfPhotos={15} image={Frame1} someText={'2021 / Август'}/>
                        <Card numbOfPhotos={5} image={Frame2} someText={'2021 / Июль'}/>
                        <Card numbOfPhotos={12} image={Frame3} someText={'2021 / Июнь'}/>
                        <Card numbOfPhotos={15} image={Frame1} someText={'2021 / Август'}/>
                        <Card numbOfPhotos={5} image={Frame2} someText={'2021 / Июль'}/>
                        <Card numbOfPhotos={12} image={Frame3} someText={'2021 / Июнь'}/>
                        <Card numbOfPhotos={15} image={Frame1} someText={'2021 / Август'}/>
                        <Card numbOfPhotos={5} image={Frame2} someText={'2021 / Июль'}/>
                        <Card numbOfPhotos={12} image={Frame3} someText={'2021 / Июнь'}/>
                    </Slider>
                </div>
            </div>
        </div>
        
    )
}

export default Building