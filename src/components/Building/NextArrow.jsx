import React from 'react'
import s from './Building.module.scss'
import arrowRight from '../../assets/images/building/arrowRight.png'

const NextArrow = (props) => {

    const {onClick} = props;

    return (
        <div className={s.nextArrow} onClick={onClick}>
            <img src={arrowRight} alt="" />
        </div>
    )
}

export default NextArrow