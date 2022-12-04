import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <main className='p-4'>
        <section className='flex flex-col md:flex-row items-start justify-between gap-y-6 w-full'>
            <section className='flex flex-col md:flex-row flex-1 items-start justify-between max-w-lg gap-y-4 w-full'>
                <div className='flex flex-col'>
                    <h1 className='text-white font-bold'>Company</h1>
                    <div id='company-links' className='mt-2 flex flex-col gap-y-1 md:gap-y-2'>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>About</a>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal  text-normalGrey font-normal'>Jobs</a>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>For the Record</a>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-white font-bold'>Communities</h1>
                    <div id='community-links' className='mt-2 flex flex-col gap-y-1 md:gap-y-2'>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>For Artists</a>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Developers</a>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Advertising</a>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Investors</a>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Vendors</a>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-white font-bold'>Useful Links</h1>
                    <div id='useful-links' className='mt-2 flex flex-col gap-y-1 md:gap-y-2'>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Support</a>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Free Mobile App</a>
                        <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Car Thing</a>
                    </div>
                </div>
            </section>        
            
            <section className='flex flex-col gap-x-3'>
                <h1 className='text-white font-bold block md:hidden'>Social</h1>
                <div className='flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-y-0 md:justify-around w-[250px] text-white font-normal'>
                    <a href="##" title='Instagram'>
                        <FontAwesomeIcon icon={faInstagram} className='text-base md:text-xl bg-darkGrey hover:bg-darkGreyHover p-[6px] md:p-[12px] rounded-full'/>
                    </a>
                    <a href="##" title='Twitter'>
                        <FontAwesomeIcon icon={faTwitter} className='text-base md:text-xl bg-darkGrey hover:bg-darkGreyHover p-[6px] md:p-[12px] rounded-full'/>
                    </a>
                    <a href="##" title='Facebook'>
                        <FontAwesomeIcon icon={faFacebook} className='text-base md:text-xl bg-darkGrey hover:bg-darkGreyHover p-[6px] md:p-[12px] rounded-full'/>
                    </a>
                </div>
            </section>
        </section>

        <div className='my-8 w-full'>
            <hr className='border-darkGrey'/>
        </div>

        <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-8 gap-y-3'>

           <section className='flex flex-col md:flex-row flex-1 items-start md:items-center gap-2 md:gap-4 text-base'>
                <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Legal</a>
                <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Privacy Center</a>
                <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Privacy Policy</a>
                <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>Cookies</a>
                <a href="##" className='hover:underline hover:text-white hover:font-normal text-normalGrey font-normal'>About ADs</a>
            </section>

           <section className='text-normalGrey text-lg'>
                <p>© 2022 Spotify</p>
           </section>
        </div>
    </main>
  )
}

export default Footer
