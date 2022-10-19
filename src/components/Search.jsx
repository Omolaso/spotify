import React from 'react';
import Footer from './Footer';
import Navs from './Navs';
import SearchTopNav from './SearchTopNav';



const Search = () => {


  return (
    <main className='flex flex-row'>

      <section id='side-nav' className='w-[250px]'>
        <Navs/>
      </section>

      <section id='top-nav' className='flex-1 flex flex-col'>
        <div>
          <SearchTopNav/>
        </div>
        
        <div className='flex-1 bg-veryLightBlack p-4 flex flex-col'>

          <div id='content-container' className='flex-1 border text-white p-4'>
            Hii
          </div>

          <div id='footer' className='mt-8'>
            <Footer/>
          </div>

        </div>
      </section>

    </main>

  )
}

export default Search