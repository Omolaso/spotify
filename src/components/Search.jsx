import React, {useState, useEffect} from 'react';
import Footer from './Footer';
import Navs from './Navs';
import SearchMusicLists from './SearchMusicLists';
import SearchTopNav from './SearchTopNav';
import axios from 'axios';


const Search = () => {
  
  const [musics, setMusics] = useState([]);
  const [reload, toggleReload] = useState(false);
 
  const getData = () => {
    axios.get('https://musica-api.onrender.com/popular')
    // axios.get('https://musica-api.onrender.com/new')
    // axios.get('https://musica-api.onrender.com/playlist')
    .then((res) =>{
      console.log(res.data);
      setMusics(res.data)
      })
    }

    useEffect(() => {
      getData();
    }, [setMusics, reload]);




  return (
    <main className='flex flex-row relative'>

       <section className='min-h-screen w-full max-w-[20vw] fixed hidden md:block'>
          <Navs/>
       </section>

       <section id='top-nav' className='flex-1 flex flex-col'>
          <div className='fixed right-0 top-0 z-10 w-full max-w-[100vw] md:max-w-[80vw]'>
            <SearchTopNav 
              setMusics={setMusics} 
              musics={musics} 
              toggleReload={toggleReload}
              reload={reload}
            />
          </div>
          
          <div className='flex-1 bg-veryLightBlack flex flex-col w-full max-w-[100vw] md:max-w-[80vw] absolute right-0 top-[60px] min-h-screen'>

            <div className='flex-1 text-white border-4'>
              <SearchMusicLists musics={musics}/>
            </div>

            <div className='mt-4'>
              <Footer/>
            </div>

          </div>
       </section>        
    </main>

  )
}

export default Search