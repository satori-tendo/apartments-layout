import React from 'react'
import s from './Root.module.scss'


import Header from '../Header/Header';
import Layout from './Layout/Layout';
import Main from './Main/Main';
import Gallery from './PhotosGallery/Gallery';
import Question from './Question/Question';
import Reviews from './Comments/Comments';
import Partners from './partners/Partners';
import Benefits from './Benefits/Benefits';
import Building from './Building/Building';


const Root = () => {
    return (
        <div>
            <main className='wrapper'>
                <div className='header-main'>
                    <Header />
                    <Main />
                </div>
                <Benefits />
                <Building />
                <Layout />
                <Gallery />
                <Question />
                <Reviews />
                <Partners />
            </main>
        </div>
    )
}

export default Root