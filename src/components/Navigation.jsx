import React from 'react'
import {AiOutlineMenu, AiOutlineSearch  } from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

const Navigation = () => {
  return (
    <div className='min-w-[95%]  max-w-[100%] mx-auto flex justify-between items-center bg-purple-400 p-3'>

        {/* left side */}
        <div className='flex items-center'>
        <AiOutlineMenu className='mx-2 cursor-pointer' size={20}></AiOutlineMenu>
        <h1 className='sm:text-3xl lg:text-xl flex'>Best <span className='font-bold'>Eats</span></h1>
        
        {/* button wrapper */}
        <div className='ml-2 bg-gray-200 rounded-full p-1 text-sm cursor-pointer hidden sm:flex'>
        <button className='bg-black text-white p-1 rounded-full '>Delivery</button>
        <button className='p-1'>Pickup</button>
        </div>

        </div>

        {/* input */}
        <div className='flex items-center bg-gray-200 px-2 rounded-full 
                    xss:w-[90%] xs:w-[250px] sm:w-[400px] lg:w-[500px]
                    medium:w-[90%] mediumEnd:w-[90%] mx-2'> 
            <AiOutlineSearch className='cursor-pointer' size={20}></AiOutlineSearch>
            <input className='outline-none bg-transparent p-1 xss:w-[100%]' type="text" placeholder='Search here' />
        </div>

        {/* cart button */}
        <div className='flex items-center justify-center bg-black rounded-full p-1 text-white w-[50px] sm:w-[100px] cursor-pointer'> 
            <BsFillCartFill size={20}></BsFillCartFill>
            <button className='ml-2 hidden sm:flex'>Cart</button>
        </div>
    </div>
  )
}

export default Navigation