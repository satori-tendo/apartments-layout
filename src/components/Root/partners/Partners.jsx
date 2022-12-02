import React from 'react'
import s from './Partners.module.scss'
import partner1 from '../../../assets/images/partners/Partner1.svg'
import partner2 from '../../../assets/images/partners/Partner2.svg'
import partner3 from '../../../assets/images/partners/Partner3.svg'


const Partners = () => {
  return (
    <div className={s.partners}>
        <div className={s.container}>
            <h1 className={s.title}>Наши партнеры</h1>
            <div className={s.items}>
                <Item img={partner1}/>
                <Item img={partner2}/>
                <Item img={partner3}/>
            </div>
        </div>
    </div>
  )
}

const Item = (props) => {
    return (<div className={s.item}>
        <img src={props.img} alt="" className={s.itemImg} />
    </div>)
}

export default Partners