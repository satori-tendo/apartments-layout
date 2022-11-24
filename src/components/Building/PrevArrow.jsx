import React from 'react'
import s from './Building.module.scss'
import arrowLeft from '../../assets/images/building/arrowLeft.png'

const PrevArrow = (props) => {

    const {onClick} = props;

    return (
        <div className={s.prevArrow} onClick={onClick}>
            <img src={arrowLeft} alt="" />
        </div>
    )
}

export default PrevArrow