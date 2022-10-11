import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../images/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faSpotify, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import validate from './Validate';

const Login = () => {
  const navigate = useNavigate();

  const toSignup = () => {
    navigate('/signup');
  }

  // FORMIK

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email can not be blank'),
    }),
    // validate,
    onSubmit: (values, {resetForm}) => {
      // alert(JSON.stringify(values, null, 2));
      // window.location.reload();
      // alert('Your details are now saved to your browser local storage');
      // window.localStorage.setItem("Email", `${values.email}`);
      // window.localStorage.setItem("Password", `${values.password}`);
      console.log("Email", `${values.email}`);
      resetForm({values: ''});
    },
  });

  // FORMIK

  return (
      <main className='text-center'>
        <header className='py-3 md:py-6'>
          <Link to='/' className='hover:cursor-default text-2xl md:text-4xl font-bold'>
            <FontAwesomeIcon icon={faSpotify} className='text-5xl md:text-6xl align-middle'/> Spotify
          </Link>
        </header>

        <hr/>
   

        <section id="body-form" className='w-[100%] max-w-4xl mx-auto text-center py-10 px-4'>

          <p className='text-sm font-bold my-2'>To continue, log in to Spotify.</p>
          <div
            id="login-buttons"
            className='flex flex-col items-center max-w-lg mx-auto'
            >
              <button className='flex items-center justify-center bg-facebookButton mb-4 w-full py-[12px] rounded-3xl hover:scale-105 transition-all hover:cursor-auto'>
                  <FontAwesomeIcon icon={faFacebook} className='text-white mr-6 text-lg hidden md:block'/>
                  <span className='font-semibold text-white'>Continue with Facebook</span>
              </button>

              <button className='flex items-center justify-center bg-black mb-4 w-full py-[12px] rounded-3xl hover:scale-105 transition-all hover:cursor-auto'>
                  <FontAwesomeIcon icon={faApple} className='text-white mr-6 text-lg hidden md:block'/>
                  <span className='font-semibold text-white'>CONTINUE WITH APPLE</span>
              </button>

              <button className='flex items-center justify-center border border-darkGreyHover hover:border-black hover:scale-105 transition-all mb-4 w-full py-[10px] rounded-3xl hover:cursor-auto'>
                <img 
                  src={google} 
                  alt="google"
                  className='w-5 mr-2 hidden md:block'
                  />
                <span className='font-semibold text-darkGreyHover'> CONTINUE WITH GOOGLE </span>
              </button>

              <button className='border border-darkGreyHover hover:border-black mb-4 w-full py-[10px] hover:scale-105 transition-all rounded-3xl hover:cursor-auto'>
                  <span className='font-semibold text-darkGreyHover'>CONTINUE WITH PHONE NUMBER</span>
              </button>
          </div>

          <div id="breaker" className='flex items-center justify-between w-full mx-auto max-w-md mt-2 text-darkGrey'>
            <div className='w-[45%]'>
              <hr/>
            </div>

            <p className='font-bold text-xs text-black'>OR</p>

            <div className='w-[45%]'>
              <hr />
            </div>
          </div>


          <form
            onSubmit={formik.handleSubmit}
            onReset={formik.handleReset}
            className='mt-4 text-left w-full max-w-md mx-auto'
            >

            <div className='flex flex-col mb-6'>
              <label htmlFor="email" className='text-sm font-bold mb-1'>Email address or username</label>
              <input
                type="email" 
                id='email' 
                name='email' 
                placeholder='Email address or username' 
                className='border w-full py-3 px-3 hover:border-black rounded'
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? <div className='text-formErrorColor text-sm font-bold'>{formik.errors.email}</div> : null}
            </div>

            <div className='flex flex-col mb-6'>
              <label htmlFor="password" className='text-sm font-bold mb-1'>Password</label>
              <input 
                type="password" 
                id='password' 
                name='password' 
                placeholder='Password'
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                className='border w-full py-3 px-3 hover:border-black rounded'
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? <div className='text-red-500 text-sm font-bold'>{formik.errors.password}</div> : null}
            </div>
            <Link to='/forgotpassword' className='hover:underline hover:cursor-text'>Forgot your password?</Link>

            <div id='log-in' className='flex flex-col md:flex-row justify-between mt-4'>
              <div className='flex flex-row-reverse flex-[0.4] items-center md:justify-center justify-end md:my-0 my-3'>
                <label htmlFor="remember" className='ml-1'>Remember Me</label>
                <input type="checkbox" name="remember" id="remember" />
              </div>

              <button type="submit" className='bg-green-500 py-4 px-10 rounded-3xl font-bold '>Log in</button>
            </div>

          </form>

          <hr className='my-6 max-w-md mx-auto'/>

          <div id='login-footer' className='flex flex-col items-center gap-y-3 mt-6 max-w-md mx-auto'>
            <p className='text-base font-bold'>Don't have an account?</p>
            <button onClick={toSignup} className='border border-darkGreyHover hover:border-black mb-4 py-[10px] rounded-3xl hover:cursor-auto w-full'>
                <span className='font-semibold text-darkGreyHover'>SIGN UP FOR SPOTIFY</span>
            </button>
          </div>
        </section>
      </main>
  )
}

export default Login