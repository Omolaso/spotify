import React from 'react';
import '../styles/SharedLayout.css';
import Navs from './Navs';
import TopNavs from './TopNavs';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {


  return (
    <main className='flex flex-row relative'>

       <section id='side-nav' className='min-h-screen w-full max-w-[20vw] fixed'>
          <Navs/>
       </section>

       <section id='top-nav' className='flex-1 flex flex-col '>
          <div className='fixed right-0 top-0 z-10 w-full max-w-[80vw]'>
            <TopNavs/>
          </div>
          
          <div id='outlet-footer' className='flex-1 bg-veryLightBlack p-4 flex flex-col w-full max-w-[80vw] absolute right-0 top-[60px] min-h-screen'>

            <div className='flex-1 border'>
              <Outlet/>
            </div>

            <div className='mt-8'>
              <Footer/>
            </div>

          </div>
       </section>        
    </main>
  )
}

export default SharedLayout