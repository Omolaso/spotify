import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TopNavs = () => {
    const goBack = () => {
        window.history.back();
    }


  return (
    <main className='flex items-center justify-between bg-veryLightBlack text-normalGrey p-4 h-16'>
        <div className='flex items-center justify-between w-20'>
            <FontAwesomeIcon icon={faChevronLeft} onClick={goBack} className='bg-lightBlack p-2 rounded-full cursor-pointer'/>
            <FontAwesomeIcon icon={faChevronRight} className='bg-lightBlack p-2 rounded-full cursor-pointer'/>
        </div>

        <ul className='flex items-center justify-between flex-1 max-w-lg font-medium text-base'>
            <li>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Premium</a>
            </li>
            <li>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Support</a>
            </li>
            <li>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Download</a>
            </li>
            <li>
                <span className='text-white'> | </span>
            </li>
            <li>
                <a href="spotify.com" target="_blank" className='hover:text-white'>Sign Up</a>
            </li>
            <li>
                <a href="spotify.com" target="_blank" className='text-base'>
                    <button className='bg-buttonGrey text-black px-8 py-3 rounded-full'>
                        Log in
                    </button>
                </a>
            </li>
        </ul>
    </main>
  )
}

export default TopNavs