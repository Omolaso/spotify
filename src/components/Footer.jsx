import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
        <main className='flex flex-row items-start justify-between'>
            <section id='company-community-useful' className='flex flex-row flex-1 items-start justify-between max-w-lg'>
                <div className='flex flex-col'>
                    <h1 className='text-white font-bold'>Company</h1>
                    <div id='company-links' className='mt-2 flex flex-col gap-y-2'>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>About</a>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal  text-normalGrey font-normal'>Jobs</a>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>For the Record</a>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-white font-bold'>Communities</h1>
                    <div id='community-links' className='mt-2 flex flex-col gap-y-2'>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>For Artists</a>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Developers</a>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Advertising</a>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Investors</a>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Vendors</a>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-white font-bold'>Useful Links</h1>
                    <div id='useful-links' className='mt-2 flex flex-col gap-y-2'>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Support</a>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Free Mobile App</a>
                        <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Car Thing</a>
                    </div>
                </div>
            </section>        
            
            <section id='brand-links'>
                <div className='flex flex-row items-center justify-around w-[250px] text-white font-normal'>
                    <a href="https://www.spotify.com" className='bg-darkGrey hover:bg-darkGreyHover px-3 py-2 rounded-[100%]' title='Instagram'>
                        <FontAwesomeIcon icon={faInstagram} className='text-xl'/>
                    </a>
                    <a href="https://www.spotify.com" className='bg-darkGrey hover:bg-darkGreyHover px-3 py-2 rounded-[100%]' title='Twitter'>
                        <FontAwesomeIcon icon={faTwitter} className='text-xl'/>
                    </a>
                    <a href="https://www.spotify.com" className='bg-darkGrey hover:bg-darkGreyHover px-3 py-2 rounded-[100%]' title='Facebook'>
                        <FontAwesomeIcon icon={faFacebook} className='text-xl'/>
                    </a>
                </div>
            </section>
        </main>

        <div className='my-8'>
            <hr className='border-darkGrey'/>
        </div>

        <div id='footer-links' className='flex flex-row items-center justify-between my-8 '>

           <section className='flex flex-row flex-1 items-center gap-x-4'>
                <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Legal</a>
                <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Privacy Center</a>
                <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Privacy Policy</a>
                <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Cookies</a>
                <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>About ADs</a>
                <a href="https://www.spotify.com" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Additional CA Privacy Disclosures</a>
           </section>

           <section className='text-normalGrey text-sm'>
                <p>© 2022 Spotify AB</p>
           </section>
        </div>
    </>
  )
}

export default Footer
