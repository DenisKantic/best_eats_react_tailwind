import React from 'react'
import {AiOutlineMenu, AiOutlineSearch  } from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

const Navigation = () => {
  return (
    <div className='max-w-[95%] mx-auto flex justify-between p-3'>

        {/* left side */}
        <div className='flex items-center'>
        <AiOutlineMenu className='mx-2 cursor-pointer' size={30}></AiOutlineMenu>
        <h1 className='text-3xl'>Best <span className='font-bold'>Eats</span></h1>
        
        {/* button wrapper */}
        <div className='ml-2 bg-gray-200 rounded-full p-1 text-sm cursor-pointer'>
        <button className='bg-black text-white p-1 rounded-full'>Delivery</button>
        <button className='p-1'>Pickup</button>
        </div>

        </div>

        {/* input */}
        <div className='flex items-center bg-gray-200 px-2 rounded-full w-[400px]'> 
            <AiOutlineSearch className='cursor-pointer' size={20}></AiOutlineSearch>
            <input className='outline-none bg-transparent p-1 w-100%' type="text" placeholder='enter your search here' />
        </div>

        {/* cart button */}
        <div className='flex items-center justify-center bg-black rounded-full text-white w-[100px] cursor-pointer'> 
            <BsFillCartFill size={20}></BsFillCartFill>
            <button className='text-lg ml-2'>Cart</button>
        </div>
    </div>
  )
}

export default Navigation