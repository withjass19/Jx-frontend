import React from 'react'
import GPay from '../../assets/gpay.png'
import UPI from '../../assets/upi.png'
import Paytm from '../../assets/paytm.png'
import Skrill from '../../assets/skrill.png'
import Netseller from '../../assets/netseller.png'
import AstroPay from '../../assets/astro.png'
import Bitcoin from '../../assets/bitcoin.png'
import Insta from '../../assets/insta-icon.png'
import FB from '../../assets/facebook-icon.png'
import Twitter from '../../assets/twitternew.png'

export default function Footer() {
  return (
    <div className='grid grid-rows-2 w-[100%] h-[550px] md:h-[550px] sm:h-[100%]" sm:grid-rows-1 sm:gap-y-8 sm:mt-4'>
      <div className='row-span-1 flex flex-col justify-center items-center md:px-20 md:py-0 sm:py-20 text-center gap-4'>
        <p className='text-2xl font-bold'>Where Predictions Meet Rewards!</p>
        <p>Step into the electrifying arena of Indibet,India's ultimate destination for cricket and casino enthusiasts.<br/> Get ready to be greeted with the most exciting Welcome Offer in the world of online gaming!</p>
        <p className='mb-5'>Make your first addition and unlock a staggering 400% Welcome Bonus of upto INR 25,000*!</p>
      </div>
      <div className='row-span-1'>
        <div className="grid grid-rows-1 grid-cols-12 ">
            <div className="md:col-span-6 sm:col-span-12 col-span-12 flex flex-col justify-center items-center w-[100%] md:h-[200px] min-h-[200px] sm:h-[100%]">
                <p className='text-2xl font-bold mb-5'>PAYMENT PARTNERS</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-4 justify-center flex-wrap'>
                        <div className='bg-white rounded-md shadow-lg px-4 py-2 flex justify-center items-center'>
                            <img className='w-[80px]' src={GPay} alt="" />
                        </div>
                        <div className='bg-white rounded-md shadow-lg px-4 py-2 flex justify-center items-center'>
                            <img src={UPI} className='w-[80px]' alt="" />
                        </div>
                        <div className='bg-white rounded-md shadow-lg px-4 py-2 flex justify-center items-center'>
                            <img src={Paytm} className='w-[80px]' alt="" />
                        </div>
                        <div className='bg-white rounded-md shadow-lg px-4 py-2 flex justify-center items-center md:flex sm:hidden'>
                            <img src={Skrill} className='w-[80px]' alt="" />
                        </div>
                    </div>
                    <div className='flex gap-4 justify-center flex-wrap'>
                        <div className='bg-white rounded-md shadow-lg px-4 py-2 justify-center items-center hidden md:hidden sm:flex'>
                            <img src={Skrill} className='w-[80px]' alt="" />
                        </div>
                        <div className='bg-white rounded-md shadow-lg px-4 py-2 flex justify-center items-center'>
                            <img src={Netseller} className='w-[90px]' alt="" />
                        </div>
                        <div className='bg-white rounded-md shadow-lg px-4 py-2 flex justify-center items-center'>
                            <img src={AstroPay} className='w-[90px]' alt="" />
                        </div>
                        <div className='bg-white rounded-md shadow-lg px-4 py-2 flex justify-center items-center'>
                            <img src={Bitcoin} className='w-[90px]' alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="md:col-span-6 sm:col-span-12 col-span-12 py-5 flex flex-col items-center w-[100%] md:h-[300px] sm:h-[100%]">
                <p className='text-2xl font-bold mb-5'>SOCIAL MEDIA</p>
                <div className='flex gap-4 justify-center'>
                    <div className='px-4 py-2 flex justify-center items-center'>
                        <img src={Insta} className='w-[60px]' alt="" />
                    </div>
                    <div className='px-4 py-2 flex justify-center items-center'>
                        <img src={FB} className='w-[60px]' alt="" />
                    </div>
                    <div className='px-4 py-2 flex justify-center items-center'>
                        <img src={Twitter} className='w-[60px]' alt="" />
                    </div>
                </div>
                <p className='text-lg mt-5'>Privacy Policy</p>
            </div>
        </div>
      </div>
    </div>
  )
}
