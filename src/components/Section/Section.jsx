import React from 'react'
import Img from '../../assets/KPI.jpg'
import Img1 from '../../assets/KPI-mob.jpg'

export default function Section() {
  return (
    <div>
        <div className='h-[100%] lg:h-[450px] py-5'>
            <img className='h-[450px] hidden md:block md:h-[100%]' src={Img} alt="" />
            <img className='h-[260px] block md:hidden sm:block md:h-[100%] pt-10' src={Img1} alt="" />
        </div>
    </div>
  )
}
