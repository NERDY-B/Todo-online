import React from 'react'

const RegisterScreen = () => {
  return (
    <div className='overflow-hidden'>
        <h1 className='font-bold w-[100%] text-center mt-[30px] text-2xl'>You are some steps to go!!</h1>

        <form className='flex flex-col w-[100%] mt-[30px] translate-x-[35%]'>

            <label>First Name</label>
            <input type='text' className='w-[30vw] h-[7vh] border-solid border-2 px-3'  />
                    
             <label>Last Name</label>
            <input type='text' className='w-[30vw] h-[7vh] border-solid border-2 px-3'  />

            <label>Username</label>
            <input type='text' className='w-[30vw] h-[7vh] border-solid border-2 px-3'  />

            <label>Email</label>
            <input type='text' className='w-[30vw] h-[7vh] border-solid border-2 px-3'  />

            <label>Password</label>
            <input type='password' className='w-[30vw] h-[7vh] border-solid border-2 px-3' />

            <label>Confirm Password</label>
            <input type='password' className='w-[30vw] h-[7vh] border-solid border-2 px-3' />
            <p className='text-center text-white hover:bg-primary-100 transition-all duration-500 mt-[10px] p-[10px] bg-primary-200 w-[30vw] pointer ps-[10px] cursor-pointer '>Create</p>
        </form>
    </div>
  )
}

export default RegisterScreen