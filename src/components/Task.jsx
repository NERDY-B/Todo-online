import React from 'react'
import '../App.css';

const Task = () => {
  return (
    <>
      <div className='container-task drop-shadow relative top-[-30px] bg-midPrimary  h-[91px] p-[22.4px] mb-[7px]'>
            <div className='ml-[5px] flex content-between justify-between '>
                  <div className='flex   '>
                      <input type='checkbox' className='pl-[10] mx-[10px] border rounded-full h-[32px] w-[32px]'/>
                      <p className=' h-[16px] w-[140px]'>Train in the Gym</p>
                  </div>

                    <p className='w-[51px] h-[45px] border-solid border-2 border-primary-50 ml-[-10] relative top-[] left-[] text-center cursor-pointer'>Edit</p>

              </div>
      </div>
        
    </>
  )
}

export default Task