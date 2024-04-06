import React from 'react'
import {useState} from 'react'
import { FaRegUser } from "react-icons/fa6";
import '../App.css'
import Task from './Task';
import Trophy from './Trophy';
import { FaCirclePlus } from "react-icons/fa6";


const SideSection = () => {
    const [user, setuser] = useState('')
  return (
    <>
       <div className='flex'>
            
            <div>
        
                <div className='h-[123px] w-[424px] bg-primary-200 min-h-fit flex drop-shadow'>
                        <FaRegUser className='w-[50px] h-[50px] relative top-[19px] left-[32px]' />
                

                        <div className='block text-white w-[221px] h-[52px] relative top-[24px] left-[103px]'>
                            <p>Hello {user} ,<br/>
                                <span className='italic text-2xl font-sans font-thin'>What are your plans for today ?</span>
                            </p>
                        </div>

                    

                    </div> 

                    <section className='w-[424px] h-[90vh] min-h-fit drop-shadow border border-2 py-[10%]'>
                        <Trophy className = '' />
                        <Task />
                        <Task />
                        <Task />

                        <FaCirclePlus size={50} className=''/>
                        
                    </section>
            </div>


            <div className=' w-[100vw] min-w-[67vw] drop-shadow'>
                <h1 className='text-bold text-white text-center h-[123px] pt-[30px] bg-primary-200 text-2xl'>Edit Task</h1>
                
                <div className='ml-[20px]'>

                <p>Task Name</p>
                <input type="text" className='w-[596px] h-[7vh] border-solid border-2 px-3' />
                </div>


                <div className=' flex mb-[10px] relative top-[350px] ml-[20px] '>
                    
                    <p className='h-[61px] w-[121px] bg-redPrimary border border-redSecondary text-center text-white py-[15.5px] inner-shadow rounded'>Delete</p>
                    <p className='h-[61px] w-[436px] bg-primary-200 border border-primary-300 text-center text-white py-[15.5px] ml-[25px] inner-shadow rounded'>Save</p>
                </div>
            </div>

       </div>


    </>
  )
}

export default SideSection