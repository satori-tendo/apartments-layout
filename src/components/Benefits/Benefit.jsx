import React from 'react';
import s from './Benefits.module.scss'

const Benefit = (props) => {
    return ( 
        <div className={s.benefits__benefit}>
            <div className={s.benefits__imageDiv}>    
                <img src={props.imageSrc} alt="" className={s.benefits__image} />
                <div className={s.benefits__innerContent}>
                    <img src={props.innerImg} alt="" className={s.innerContent__image}/>
                    <span className={s.innerContent__text}>{props.innerText}</span>
                </div>   
            </div>
        </div>
    )
}

export default Benefit;