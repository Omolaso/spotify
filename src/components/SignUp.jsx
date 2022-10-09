import React from 'react';
import { Link } from 'react-router-dom';
import google from '../images/google.png';
// import facebook from '../images/facebook.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useFormik } from 'formik';
import validate from './Validate';



const SignUp = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      window.location.reload();
      alert('Your details are now saved to your browser local storage');
      window.localStorage.setItem("Email", `${values.email}`);
      window.localStorage.setItem("Password", `${values.password}`);
      window.localStorage.setItem("Name", `${values.name}`);
    },
  });




  return (
    <main className='w-full max-w-4xl mx-auto text-center py-10 px-4'>
      <header>
        <Link to='/' className='hover:cursor-default'>
          <h1 className='text-lg md:text-2xl font-bold'><FontAwesomeIcon icon={faSpotify} className='text-3xl md:text-4xl align-middle'/> Spotify</h1>
        </Link>
        <h3 className='text-2xl md:text-4xl font-semibold mt-8'>Sign up for free to start <br /> listening.</h3>
      </header>

      <div
        id="signup-buttons"
        className='mt-10 flex flex-col items-center w-full max-w-xs lg:max-w-sm mx-auto'
        >
          <button className='flex items-center justify-center bg-facebookButton mb-4 w-full py-[12px] rounded-3xl hover:w-[105%] hover:py-[14px] hover:blur-[.5px]'>
              <FontAwesomeIcon icon={faFacebook} className='text-white mr-6 text-lg'/>
              <span className='font-semibold text-white'>Sign up with Facebook</span>
          </button>

          <button className='flex items-center justify-center border-2 border-darkGrey mb-4 w-full py-[10px] rounded-3xl hover:w-[105%] hover:py-[14px]'>
            <img 
              src={google} 
              alt="google"
              className='w-5 mr-8'
              />
             <span className='font-semibold'> Sign up with Google </span>
          </button>

      </div>

      <div id="breaker" className='flex items-center justify-between w-full mx-auto max-w-md lg:max-w-sm mt-2 text-darkGrey'>
        <div className='w-[40%]'>
          <hr/>
        </div>

        <p className='text-bold text-lg'>or</p>

        <div className='w-[40%]'>
          <hr/>
        </div>
      </div>


      <form 
        className='mt-4 text-left w-full mx-auto max-w-lg'
        onSubmit={formik.handleSubmit}
      >

        <div className='flex flex-col mb-6'>
          <label htmlFor="email" className='text-sm font-bold mb-1'>What's your email?</label>
          <input 
            type="email" 
            id='email' 
            name='email' 
            placeholder='Enter your email' 
            className='border w-full py-3 px-3 hover:border-black rounded'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email} 
          />
          {formik.touched.email && formik.errors.email ? <div className='text-red-500 text-sm font-bold'>{formik.errors.email}</div> : null}
          <a href="spotify.com" className='underline text-green-700'>Use phone number instead.</a>
        </div>

        <div className='flex flex-col mb-6'>
          <label htmlFor="password" className='text-sm font-bold mb-1'>Create a password</label>
          <input 
            type="password" 
            id='password' 
            name='password' 
            placeholder='Create a password' 
            className='border w-full py-3 px-3 hover:border-black rounded'
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? <div className='text-red-500 text-sm font-bold'>{formik.errors.password}</div> : null}
        </div>

        <div id="confirm-password" className='flex flex-col mb-6'>
          <label htmlFor="confirmPassword" className='text-sm font-bold mb-1'>Confirm your password</label>
          <input 
            type="password" 
            id='confirmPassword' 
            name='confirmPassword' 
            placeholder='Confirm your password' 
            className='border w-full py-3 px-3 hover:border-black rounded'
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must match password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='text-red-500 text-sm font-bold'>{formik.errors.confirmPassword}</div> : null}
        </div>

        <div className='flex flex-col mb-6'>
          <label htmlFor="name" className='text-sm font-bold mb-1'>What should we call you?</label>
          <input
            type="text" 
            id="name" 
            name="name" 
            placeholder='Enter a profile name' 
            className='border w-full py-3 px-3 hover:border-black rounded'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <p className='text-sm mt-1'>This appears on your profile.</p>
          {formik.touched.name && formik.errors.name ? <div className='text-red-500 text-sm font-bold'>{formik.errors.name}</div> : null}

        </div>

        <div id="DOB" className='mb-6'>
          <label htmlFor="DOB" className='text-sm font-bold mb-1'>What's your date of birth?</label>
          <section id="dob-inputs" className='flex flex-row gap-x-4 mt-2'>
             
            <div className='flex-[0.2]'>
              <label htmlFor="day" className='text-sm font-bold mb-1'>Day</label>
              <input 
                type="number" 
                id='day' 
                name='day' 
                placeholder='DD' 
                className='border w-full py-3 px-3 hover:border-black rounded'
                min="1"
                max="31"
              />
            </div>

            <div className='flex-[0.5]'>
              <label htmlFor="month" className='text-sm font-bold mb-1'>Month</label>
              <select id="month" className='border w-full py-3 px-3 hover:border-black rounded' placeholder='Month'>
                <option disabled selected className='text-normalGrey'>Month</option>
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

            <div className='flex-[0.3]'>
              <label htmlFor="year" className='text-sm font-bold mb-1'>Year</label>
              <input 
                type="number" 
                id='year' 
                name='year' 
                placeholder='YYYY' 
                className='border w-full py-3 px-3 hover:border-black rounded'
                min="1980"
                max="2022"
              />
            </div>
          </section>
        </div>

        <div id='radio' className='mb-6'>
          <label htmlFor="gender" className='text-sm font-bold mb-1'>What's your gender?</label>
          <section className='flex flex-row gap-x-4 mt-2 flex-wrap'>

            <div id='male'>
              <input type="radio" name="gender" id='male-gender' value='male'/> <label htmlFor="male-gender">Male</label>
            </div>
            
            <div id="female">
              <input type="radio" name="gender" id='female-gender' value='female'/> <label htmlFor="female-gender"> Female</label>
            </div>
            
            <div id="non">
              <input type="radio" name="gender" id='trans-gender' value='Not saying'/><label htmlFor="trans-gender"> Prefer not to say</label>
            </div>
          </section>
        </div>

        <div id="checkbox">

          <section id='marketing-messages' className='flex flex-row items-start gap-x-2 text-sm mb-6'>
            <input type="checkbox" id='marketing' value="marketing"/>
            <label htmlFor="marketing">I would prefer not to receive marketing messages from Spotify</label>
          </section>
          
          <section id='registration-data' className='flex flex-row items-start gap-x-2 text-sm'>
            <input type="checkbox" id='registration' value="registration"/>
            <label htmlFor="registration" className=''> Share my registration data with Spotify's content providers for marketing purposes.</label>
          </section>
        </div>

        <div id='conditions' className='flex flex-col items-center gap-y-3 mt-6'>
          <p className='text-sm text-center'> By clicking on sign-up, you agree to the 
            <a href="https://www.spotify.com" className='hover:opacity-80 underline text-green-700'> Spotify Terms and Conditions</a> and 
            <a href="https://www.spotify.com" className='hover:opacity-80 underline text-green-700'> Privacy Policy.</a> 
          </p>
          <button type="submit" className='bg-green-500 py-4 px-10 rounded-3xl font-bold'> Sign Up</button>
        </div>
      </form>
      <p> Have an account? <Link to='/login' className='hover:opacity-80 underline text-green-700'> Log in.</Link> </p>
    </main>
  )
}

export default SignUp
