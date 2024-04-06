import React from 'react'
import trophy from '../asset/trophy.png'

const Trophy = () => {
  return (
    // <div className=''>
         <div className='ml-[2.5px] flex content-between  bg-lemon w-[414px] h-[116px] relative top-[-40px]'>
                  <div className='flex mt-[36px]'>
                      <img src={trophy} alt="" className='w-[53.1px] h-[40.89px] relative left-[24.93px]  '/>
                      <p className=' h-[19px] w-[198px] relative left-[] pe-[78] ps-[34.5px]'>Go Pro Upgrade Now</p>
                  </div>

                    <p className=' border-solid border-2 border-primary-50 relative top-[] left-[100px] w-[66.11px] h-[71px] bg-primary-200 text-center px-[22.76px] py-[19px] '>$1</p>

            </div>
    // </div>
  )
}

export default Trophy