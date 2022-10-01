import React from 'react';
import { Link } from 'react-router-dom';
import google from '../images/google.png';
import facebook from '../images/facebook.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
  return (
    <main className=''>
      <header>
        <h1><FontAwesomeIcon icon={faSpotify}/>Spotify</h1>
        <h3>Sign up for free to start listening.</h3>
      </header>

      <div
        id="signup-buttons"
        className=''
        >
          <button className='flex items-center justify-around bg-facebookButton'>
          <img 
              src={facebook} 
              alt="facebook"
              className='w-10'
              />
             Sign up with Facebook
          </button>

          <button className='flex items-center justify-around p-4'>
            <img 
              src={google} 
              alt="google"
              className='w-10'
              />
              Sign in with Google
          </button>

      </div>

      <div id="hr" className='flex items-center justify-between'>
        <div className='w-10'>
          <hr/>
        </div>

        <p>or</p>

        <div className='w-10'>
          <hr/>
        </div>
      </div>


      <form>
        <div id="email">
          <label htmlFor="email">What's your email?</label>
          <input type="email" placeholder='Enter your email' />
          <a href="spotify.com">Use phone number instead.</a>
        </div>

        <div id="confirm-email">
          <label htmlFor="email">Confirm your email</label>
          <input type="email" placeholder='Enter your email again' />
        </div>

        <div id="password">
          <label htmlFor="password">Create a password</label>
          <input type="password" placeholder='Create a password' />
        </div>

        <div id="name">
          <label htmlFor="name">What should we call you?</label>
          <input type="password" placeholder='Enter a profile name' />
          <p>This appears on your profile.</p>
        </div>

        <div id="DOB">
          <label htmlFor="name">What's your date of birth?</label>

          <div>
            <label htmlFor="day">Day</label>
            <input type="text" placeholder='DD' />
          </div>

          <div>
            <label htmlFor="month">Month</label>
            <select id="month">
              <option value="" placeholder='Month'></option>
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

          <div>
            <label htmlFor="year">Year</label>
            <input type="text" placeholder='YYYY' />
          </div>
          
        </div>

        <div id='radio'>
          <input type="radio" name="gender" value='male'/> <label htmlFor="male">Male</label>
          <input type="radio" name="gender" value='female'/> <label htmlFor="female"> Female</label>
          <input type="radio" name="gender" value='Not saying'/> <label htmlFor="not saying"> Prefer not to say</label>
        </div>

        <div id="checkbox">
          <input type="checkbox" value="marketing" id="" />
          <label htmlFor="marketing">I would prefer not to receive marketing messages from Spotify</label>
          
          <input type="checkbox" value="registration" id="" />
          <label htmlFor="">Share my registration data with Spotify's content providers for marketing purposes.</label>
        </div>

        <div>
          <p> By clicking on sign-up, you agree to the Spotify Terms and Conditions and Privacy Policy. </p>
          <button type="submit"> Sign Up</button>
          Have an account? <Link to='/login'> Log in.</Link>
        </div>
      </form>

    </main>
  )
}

export default SignUp
