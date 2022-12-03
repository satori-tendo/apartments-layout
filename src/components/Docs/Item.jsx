import React from 'react'
import s from './Docs.module.scss'

import document from '../../assets/images/docs/document.svg';
import eye from '../../assets/images/docs/eye.png';
import download from '../../assets/images/docs/download.png';


const Item = (props) => {
  return (
    <div className={s.item}>
        <div className={s.info}>
            <img src={document} alt="" className={s.document} />
            <span className={s.name}>{props.name}</span>
        </div>
        <div className={s.buttons}>
            <button><a href="https://onedrive.live.com/edit.aspx?action=editnew&resid=EA9F506676123589!105&ithint=file%2cdocx&action=editnew&wdNewAndOpenCt=1670059771518&wdPreviousSession=02e8363c-fb19-4dd2-9d54-b97f18a2eee2&wdOrigin=OFFICECOM-WEB.START.NEW" target="_blank"><img src={eye} alt="" /></a></button>
            <button> <a href="https://onedrive.live.com/edit.aspx?action=editnew&resid=EA9F506676123589!105&ithint=file%2cdocx&action=editnew&wdNewAndOpenCt=1670059771518&wdPreviousSession=02e8363c-fb19-4dd2-9d54-b97f18a2eee2&wdOrigin=OFFICECOM-WEB.START.NEW" target='_blank'><img src={download} alt="" /></a></button>
        </div>
    </div>
  )
}

export default Item