import React from 'react';
import '../styles/Navs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faHome, faSearch, faAdd, faBook, faHeart } from '@fortawesome/free-solid-svg-icons';
// import spotify from '../images/spotify.png'

const Navs = () => {
  return (
    <main className='flex flex-col items-start justify-between bg-black text-grey min-h-screen p-8 w-full'>
        <section className='flex flex-col flex-1 items-start'>
            <div id='logo' className=''>
                <a href="/" className='flex items-center'>
                    <FontAwesomeIcon icon={faSpotify} className='text-5xl'/>
                    <h1 className='text-2xl font-semibold ml-2'>Spotify</h1>
                </a>
            </div>

            <nav id='nav-container' className='flex flex-col justify-around items-start h-80 mt-4'>
                <ul className='flex flex-col items-start justify-between h-28'>
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

                <ul className='flex flex-col items-start justify-between h-16'>
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

            </nav>
        </section>

        <footer className='flex flex-col items-start justify-between h-10'>
            <a href="#cookies" className='text-xs hover:underline'>Cookies</a>
            <a href="#privacy" className='text-xs hover:underline'>Privacy</a>
        </footer>
    </main>
  )
}

export default Navs