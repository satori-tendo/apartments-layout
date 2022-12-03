import React from 'react';
import './_base.scss';

import Footer from '../components/Footer/Footer';
import Root from '../components/Root/Root';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';
import About from '../components/About/About';
import Docs from '../components/Docs/Docs';
import News from '../components/News/News';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/yo',
    element: <div>YOOYOYOOYY</div>,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/docs',
    element: <Docs />,
  },
  {
    path: '/news',
    element: <News />
  }
])

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;
