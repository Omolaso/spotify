import React from 'react';
import Footer from './Footer';
import Navs from './Navs';
import SearchMusicLists from './SearchMusicLists';
import SearchTopNav from './SearchTopNav';
import '../styles/SharedLayout.css';


const Search = () => {
  

  return (
    <main className='flex flex-row relative'>

       <section id='side-nav' className='min-h-screen w-full max-w-[20vw] fixed'>
          <Navs/>
       </section>

       <section id='top-nav' className='flex-1 flex flex-col'>

          <div className='fixed right-0 top-0 z-10 w-full max-w-[80vw]'>
            <SearchTopNav/>
          </div>
          
          <div className='flex-1 bg-veryLightBlack p-4 flex flex-col w-full max-w-[80vw] absolute right-0 top-[60px] min-h-screen'>

            <div id='content-container' className='flex-1 border text-white p-4'>
              <SearchMusicLists/>
            </div>

            <div className='mt-8'>
              <Footer/>
            </div>

          </div>
       </section>        
    </main>

  )
}

export default Search