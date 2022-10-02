import React from 'react';
// import '../styles/SharedLayout.css';
import Navs from './Navs';
import TopNavs from './TopNavs';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <main className='flex'>

       <section id='side-nav' className='w-[250px]'>
          <Navs/>
       </section>

       <section id='top-nav' className='flex-1 flex flex-col'>
          <div>
            <TopNavs/>
          </div>
          
          <div id='outlet-footer' className='flex-1 bg-veryLightBlack p-4 flex flex-col'>

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