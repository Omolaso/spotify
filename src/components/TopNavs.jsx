import React from 'react';
import '../styles/SharedLayout.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TopNavs = () => {
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
        <div className='flex items-center justify-between w-20'>
            <FontAwesomeIcon icon={faChevronLeft} onClick={goBack} className='bg-lightBlack p-2 rounded-full'/>
            <FontAwesomeIcon icon={faChevronRight} onClick={goForward} className='bg-lightBlack p-2 rounded-full'/>
        </div>

        <ul className='flex items-center justify-between flex-1 max-w-lg font-medium text-base cursor-auto'>
            <li>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Premium</a>
            </li>
            <li>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Support</a>
            </li>
            <li>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Download</a>
            </li>

            <li id='vertical-bar'></li>
         
            <li>
                <Link to="/signup" className='hover:text-white'>Sign Up</Link>
            </li>
            <li>
                <button className='bg-buttonGrey text-black px-8 py-3 rounded-full' onClick={login}>
                    Log in
                </button>
            </li>
        </ul>
    </main>
  )
}

export default TopNavs