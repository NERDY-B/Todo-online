import React from 'react'
import background from '../asset/bgpattern.jpg'
import '../App.css'
const ForgotScreen = () => {
  return (
    <div className='bgpattern'>
        <div className='border border-black  h-[90vh] w-[60vw] relative left-[20%] top-[20px] bg-primary-100'>

            <div className='relative top-[70px]  '>

                <h1 className='text-center text-4xl font-bold '>Forgot Password</h1>
                <p className='text-center mt-[10px]'>Input your email or username to reset password</p>
            </div>

            <div className='min-w-[30%] w-[50vw] margin mt-[30px] translate-x-[-90px]'>
                <input type='text' placeholder='Email' className='w-[30vw] h-[7vh] border-solid border-2 px-3 mb-[10px]' />
                <p className='translate-x-[15vw]'><hr className='text-white w-[13vw] relative top-[15px] ml-[-15vw]'/>or <hr className='text-white w-[13vw] relative top-[-10px] left-[2vw]'/></p>
                <input type='text' placeholder='Username' className='w-[30vw] h-[7vh] border-solid border-2 px-3 mt-[10px]' />

                <p className='mt-[30px] text-center p-[10px] px-[20px] w-[30vw] border-double border-2 cursor-pointer bg-primary-200 hover:bg-primary-50 transition-all duration-500 hover:text-white hover:font-bold'>Reset</p>
            </div>
            
        </div>
    </div>
  )
}

export default ForgotScreen