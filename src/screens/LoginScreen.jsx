import React from 'react'
import { Link } from 'react-router-dom';
import { GiNotebook } from "react-icons/gi";
import { FcGoogle } from "react-icons/fc";
import light from '../asset/light.jpg'


const LoginScreen = () => {
  return (
    <>
        <div className='flex max-h-80 min-h-fit '>
            <section className='border-solid  p-[10px] max-w-[50%] w-[50%] sm:hidden md:block bg-primary-100 h-[100vh] '>
                <GiNotebook size={300} style={{
                    textAlign: 'center',
                    margin: 'auto'
                }}/>

                <div className='w-[70%] text-center mt-[15px] mx-[30px]'>
                    {/* <img src={light}  className='w-5 h-5 translate-x-'/> */}
                    <h1 className='text-center font-bold'>Todo Online<span></span></h1>
                    <p className='w-[20]'>Save and create descriptive document around your daily activities on the fly , no hassles , login or register</p>
                </div>
            </section>


            <section className='justify-self-center items-center justify-items-center '>
                <h1 className='text-center font-bold text-2xl translate-x-[20%] mt-[20px]'>Todo Online</h1>

                <div className='flex flex-col gap-[5] mt-[40px] translate-x-[30%]'>
                    <label>Username or email</label>
                    <input type='text' className='w-[30vw] h-[7vh] border-solid border-2 px-3'  />
                    
                    <label>Password</label>
                    <input type='password' className='w-[30vw] h-[7vh] border-solid border-2 px-3' />

                    <p className=' text-right p-[10px] cursor-pointer text-primary-50'><Link to='/forgotscreen'>Forgot Password</Link></p>

                    <p className='text-center p-[10px] px-[30px] border-double border-2 cursor-pointer bg-primary-200 hover:bg-primary-100 transition-all duration-500'>Sign in</p>

                    <p className='text-center p-[10px]'> or </p>

                    <div className='flex translate-x-[25%]'>
                        
                        <FcGoogle size={40} style={{paddingRight: '10px', marginTop: '-3px'}}/>
                        <p className='flex text-center justify-self-center'>  Sign in with google</p>
                    </div>

                    <p className='mt-[10px] text-center text-primary-50'> Are you new? <span className='cursor-pointer'><Link to='/register'>Create Account</Link></span></p>
                </div>
            </section>

        </div>
    </>
  )
}

export default LoginScreen