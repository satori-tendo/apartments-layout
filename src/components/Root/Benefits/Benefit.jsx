import React from 'react';
import s from './Benefits.module.scss'

const Benefit = (props) => {
    return ( 
        <div className={s.benefit}>
            <div className={s.imageDiv}>    
                <img src={props.imageSrc} alt="" className={s.image} />
                <div className={s.innerContent}>
                    <img src={props.innerImg} alt="" className={s.innerImage}/>
                    <span className={s.innerText}>{props.innerText}</span>
                </div>   
            </div>
        </div>
    )
}

export default Benefit;