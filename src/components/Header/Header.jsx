import React from 'react'
import WebBg from '../../assets/Banner-main.jpg'
import WebBg1 from '../../assets/banner-main-mob.jpg'
import Form from '../Form/Form'

export default function Header() {
  return (
    <div>
      <div className="">
        {/* <div className="md:backgroundUrl h-[730px] md:h-[730px] sm:h-[100%] w-[100%]">
            <div className='grid grid-cols-12 grid-rows-1 md:grid-rows-1 sm:grid-rows-2 h-[100%]'>
                <div className='col-span-7 sm:row-span-1 md:col-span-7 sm:col-span-12 flex justify-center items-center'>
                    <img className='rounded-[15px] h-[420px] hidden md:block' src={WebBg} alt="" />
                </div>
                <div className='col-span-5 sm:row-span-1 md:col-span-5 sm:col-span-12 flex justify-center items-center bg-red-300'>
                    <Form/>
                </div>
            </div>
        </div> */}
        <div className="md:backgroundUrl h-[1030px] md:h-[730px] sm:h-[100%] w-[100%]">
            <div className='grid grid-cols-12 grid-rows-1 md:grid-rows-1 sm:grid-rows-2 h-[100%]'>
                <div className='col-span-12 row-span-1 sm:row-span-1 md:col-span-7 sm:col-span-12 flex justify-center items-center'>
                    <img className='rounded-[15px] h-[420px] hidden md:block' src={WebBg} alt="" />
                    <img className='h-[100%] w-[100%] md:hidden' src={WebBg1} alt="" />
                </div>
                <div className='col-span-12 sm:row-span-1 md:col-span-5 sm:col-span-12 flex justify-center items-center'>
                    <Form/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
