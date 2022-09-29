import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSearch, faAdd, faBook, faHeart } from '@fortawesome/free-solid-svg-icons';
// import spotify from '../images/spotify.png'

const Navs = () => {
  return (
    <main className='flex-col items-center justify-between bg-black text-grey min-h-screen p-4 border'>
        <section className='flex-col items-center justify-center border flex-1'>
            <div id="logo">
                <a href="/" className='flex items-center'>
                    <FontAwesomeIcon icon={faSpotify} className='text-4xl'/>
                    <h1 className='text-xl font-semibold ml-2'>Spotify</h1>
                </a>
            </div>

            <ul className='flex-col items-center justify-between border'>
                <li>
                   <a href="#home" className='text-sm font-medium hover:text-white active:text-white'>
                        <FontAwesomeIcon icon={faHome} className='text-2xl align-bottom'/> <span className='ml-2'>Home</span>
                   </a>
                </li>
                <li>
                    <a href="#home" className='text-sm font-medium hover:text-white active:text-white'>
                        <FontAwesomeIcon icon={faSearch} className='text-2xl align-bottom'/> <span className='ml-2'>Search</span>
                    </a> 
                </li>
                <li>
                    <a href="#home" className='text-sm font-medium hover:text-white active:text-white'>
                        <FontAwesomeIcon icon={faBook} className='text-2xl align-bottom'/> <span className='ml-2'> Your Library</span>
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="#home" className='text-sm font-medium hover:text-white active:text-white'>
                        <FontAwesomeIcon icon={faAdd} className='text-2xl align-bottom'/> <span className='ml-2'> Create Playlist</span>
                    </a>
                </li>
                <li>
                    <a href="#home" className='text-sm font-medium hover:text-white active:text-white'>
                        <FontAwesomeIcon icon={faHeart} className='text-2xl align-bottom'/> <span className='ml-2'> Liked Songs</span>
                    </a>
                </li>
            </ul>

        </section>

        <footer className='flex-col'>
            <a href="#cookies" className='text-xs hover:underline'>Cookies</a>
            <a href="#privacy" className='text-xs hover:underline'>Privacy</a>
        </footer>
    </main>
  )
}

export default Navs