import React from 'react'
import Logo from '../../assets/Logo.png'

export default function Nav() {
  return (
    <div>
      <nav className='bg-[#040D1C] py-5 px-5 md:px-10'>
        <div className="banner">
            <img src={Logo} alt="" className="logo w-[120px] md:w-[180px] sm:w-[120px]" />
        </div>
      </nav>
    </div>
  )
}
