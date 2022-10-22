import React, { useState } from 'react';
import '../styles/SharedLayout.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSearch, faClose } from '@fortawesome/free-solid-svg-icons';




const SearchTopNavs = ({setMusics, musics, toggleReload, reload}) => {
    const [inputValue, setInputValue] = useState('');
    // CLEAR SEARCH-INPUT
    function clearInputValue(){
        setInputValue('');
        toggleReload(!reload);
    }

    //SEARCH MUSICS
    function searchMusic(e){
        setInputValue(e.target.value);
        const searchResult = musics.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()));

   
        setMusics(searchResult)
    }

    //ROUTING
    const navigate = useNavigate();

    const login = () => {
        navigate('/login')
    }

    //back
    const goBack = () => {
        window.history.back();
    }
    //forward
    const goForward = () => {
        window.history.forward();
    }



  return (
    <main className='flex items-center justify-between bg-lightBlack text-normalGrey p-4 h-16 '>
        <div className='flex items-center justify-between flex-1 max-w-lg'>
            <div className='flex flex-row items-center justify-between flex-[2] max-w-[80px]'>
                <FontAwesomeIcon icon={faChevronLeft} onClick={goBack} className='bg-lightBlack p-2 rounded-full text-lg'/>
                <FontAwesomeIcon icon={faChevronRight} onClick={goForward} className='bg-lightBlack p-2 rounded-full text-lg'/>
            </div>
            <div className='flex flex-row items-center flex-[1.5] justify-between h-10 bg-white ml-3 rounded-3xl px-3'>
                <FontAwesomeIcon icon={faSearch} className='text-black text-2xl'/>
                <input 
                    type="text"
                    name="search"
                    id="search"
                    placeholder='What do you want to listen to?'
                    className='py-4 h-6 flex-[2] focus:outline-none ml-3 text-black'
                    autoFocus
                    autoComplete='off'
                    value={inputValue}
                    onChange={searchMusic}
                />
                <FontAwesomeIcon 
                    icon={faClose}
                    className={inputValue ? 'searchInputCloseActive' : 'searchInputClose'}
                    onClick={clearInputValue}
                />
            </div>
        </div>

        <ul className='hidden md:flex items-center justify-between flex-[0.6] max-w-lg font-medium text-base cursor-auto'>
            <li className='hover:scale-105'>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Premium</a>
            </li>
            <li className='hover:scale-105'>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Support</a>
            </li>
            <li className='hover:scale-105'>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Download</a>
            </li>

            <li id='vertical-bar'></li>
         
            <li className='hover:scale-105'>
                <Link to="/signup" className='hover:text-white'>Sign Up</Link>
            </li>
            <li>
                <button className='bg-buttonGrey text-black px-8 py-3 rounded-full hover:scale-105' onClick={login}>
                    Log in
                </button>
            </li>
        </ul>
    </main>
  )
}

export default SearchTopNavs