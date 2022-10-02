import React from 'react';
import { Link } from 'react-router-dom';
import google from '../images/google.png';
// import facebook from '../images/facebook.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
  return (
    <main className='w-[65%] max-w-4xl mx-auto text-center py-10'>
      <header>
        <h1 className='text-2xl font-bold'><FontAwesomeIcon icon={faSpotify} className='text-4xl align-middle'/> Spotify</h1>
        <h3 className='text-4xl font-semibold mt-8'>Sign up for free to start <br /> listening.</h3>
      </header>

      <div
        id="signup-buttons"
        className='mt-10 flex flex-col items-center'
        >
          <button className='flex items-center justify-around bg-facebookButton mb-4 px-[85px] py-[12px] rounded-3xl hover:px-[92px] hover:py-[14px]'>
              <FontAwesomeIcon icon={faFacebook} className='text-white mr-6 text-lg'/>
              <span className='font-semibold text-white'>Sign up with Facebook</span>
          </button>

          <button className='flex items-center justify-around border-2 border-darkGrey mb-4 px-[85px] py-[10px] rounded-3xl hover:px-[92px] hover:py-[12px]'>
            <img 
              src={google} 
              alt="google"
              className='w-5 mr-8'
              />
             <span className='font-semibold'> Sign up with Google </span>
          </button>

      </div>

      <div id="breaker" className='flex items-center justify-between w-1/2 mx-auto max-w-sm mt-2 text-darkGrey'>
        <div className='w-[40%]'>
          <hr/>
        </div>

        <p className='text-bold text-lg'>or</p>

        <div className='w-[40%]'>
          <hr/>
        </div>
      </div>


      <form className='mt-4 text-left w-1/2 mx-auto'>

        <div id="email" className='flex flex-col mb-6'>
          <label htmlFor="email" className='text-sm font-bold mb-1'>What's your email?</label>
          <input type="email" placeholder='Enter your email' className='border w-full py-3 px-3 hover:border-black rounded' />
          <a href="spotify.com" className='underline text-green-700'>Use phone number instead.</a>
        </div>

        <div id="confirm-email" className='flex flex-col mb-6'>
          <label htmlFor="email" className='text-sm font-bold mb-1'>Confirm your email</label>
          <input type="email" placeholder='Enter your email again' className='border w-full py-3 px-3 hover:border-black rounded'/>
        </div>

        <div id="password" className='flex flex-col mb-6'>
          <label htmlFor="password" className='text-sm font-bold mb-1'>Create a password</label>
          <input type="password" placeholder='Create a password' className='border w-full py-3 px-3 hover:border-black rounded'/>
        </div>

        <div id="name" className='flex flex-col mb-6'>
          <label htmlFor="name" className='text-sm font-bold mb-1'>What should we call you?</label>
          <input type="password" placeholder='Enter a profile name' className='border w-full py-3 px-3 hover:border-black rounded'/>
          <p className='text-sm mt-1'>This appears on your profile.</p>
        </div>

        <div id="DOB" className='mb-6'>
          <label htmlFor="name" className='text-sm font-bold mb-1'>What's your date of birth?</label>
          <section id="dob-inputs" className='flex flex-row gap-x-4 mt-2'>
             
            <div id='day' className='flex-[0.2]'>
              <label htmlFor="day" className='text-sm font-bold mb-1'>Day</label>
              <input type="text" placeholder='DD' className='border w-full py-3 px-3 hover:border-black rounded'/>
            </div>

            <div id='month' className='flex-[0.5]'>
              <label htmlFor="month" className='text-sm font-bold mb-1'>Month</label>
              <select id="month" className='border w-full py-3 px-3 hover:border-black rounded' placeholder='Month'>
                <option value="" disabled selected>Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            <div id='year' className='flex-[0.3]'>
              <label htmlFor="year" className='text-sm font-bold mb-1'>Year</label>
              <input type="text" placeholder='YYYY' className='border w-full py-3 px-3 hover:border-black rounded'/>
            </div>
          </section>
        </div>

        <div id='radio' className='mb-6'>
          <label htmlFor="name" className='text-sm font-bold mb-1'>What's your gender?</label>
          <section className='flex flex-row gap-x-4 mt-2'>

            <div id='male'>
              <input type="radio" name="gender" value='male'/> <label htmlFor="male">Male</label>
            </div>
            
            <div id="female">
              <input type="radio" name="gender" value='female'/> <label htmlFor="female"> Female</label>
            </div>
            
            <div id="non">
              <input type="radio" name="gender" value='Not saying'/><label htmlFor="not saying"> Prefer not to say</label>
            </div>
          </section>
        </div>

        <div id="checkbox">

          <section id='marketing-messages' className='flex flex-row items-center gap-x-2 text-sm mb-6'>
            <input type="checkbox" value="marketing"/>
            <label htmlFor="marketing">I would prefer not to receive marketing messages from Spotify</label>
          </section>
          
          <section id='registration-data' className='flex flex-row items-center gap-x-2 text-sm'>
            <input type="checkbox" value="registration"/>
            <label htmlFor="registration" className=''> Share my registration data with Spotify's content providers for marketing purposes.</label>
          </section>
        </div>

        <div id='conditions' className='flex flex-col items-center gap-y-3 mt-6'>
          <p className='text-sm text-center'> By clicking on sign-up, you agree to the 
            <a href="https://www.spotify.com" className='hover:opacity-80 underline text-green-700'> Spotify Terms and Conditions</a> and 
            <a href="https://www.spotify.com" className='hover:opacity-80 underline text-green-700'> Privacy Policy.</a> 
          </p>
          <button type="submit" className='bg-green-500 py-4 px-10 rounded-3xl font-bold'> Sign Up</button>
          <p> Have an account? <Link to='/login' className='hover:opacity-80 underline text-green-700'> Log in.</Link> </p>
        </div>
      </form>

    </main>
  )
}

export default SignUp
