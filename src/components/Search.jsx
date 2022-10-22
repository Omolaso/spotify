import React, {useState, useEffect} from 'react';
import Footer from './Footer';
import Navs from './Navs';
import SearchMusicLists from './SearchMusicLists';
import SearchTopNav from './SearchTopNav';
import '../styles/SharedLayout.css';
import axios from 'axios';


const Search = () => {
  
  const [musics, setMusics] = useState([]);
 
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res) =>{
      // console.log(res.data);
      setMusics(res.data)
      })
    }

    useEffect(() => {
      getData();
    }, [musics]);




  return (
    <main className='flex flex-row relative'>

       <section id='side-nav' className='min-h-screen w-full max-w-[20vw] fixed'>
          <Navs/>
       </section>

       <section id='top-nav' className='flex-1 flex flex-col'>

          <div className='fixed right-0 top-0 z-10 w-full max-w-[80vw]'>
            <SearchTopNav setMusics={setMusics} musics={musics}/>
          </div>
          
          <div className='flex-1 bg-veryLightBlack p-4 flex flex-col w-full max-w-[80vw] absolute right-0 top-[60px] min-h-screen'>

            <div id='content-container' className='flex-1 text-white px-4 py-6'>
              <SearchMusicLists musics={musics}/>
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