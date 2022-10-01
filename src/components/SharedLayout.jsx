import React from 'react';
// import '../styles/SharedLayout.css';
import Navs from './Navs';
import TopNavs from './TopNavs';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <main className='flex'>

       <section className='w-[250px]'>
          <Navs/>
       </section>

       <section className='flex-1 flex flex-col'>
          <div>
            <TopNavs/>
          </div>
          
          <div className='flex-1'>
            <Outlet/>
          </div>
       </section>        
        
    </main>
  )
}

export default SharedLayout