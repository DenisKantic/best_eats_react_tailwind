import React from 'react'
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose  } from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import { useState } from 'react'


const Navigation = () => {

    const [nav,setNav] = useState(false);


  return (
    <div className='max-w-[95%] mx-auto flex justify-between items-center p-3'>

        {/* left side */}
        <div className='flex items-center'>

        <AiOutlineMenu className='mx-2 cursor-pointer' size={20} onClick={()=> setNav(!nav)}></AiOutlineMenu>
        
        <h1 className='sm:text-3xl lg:text-xl flex'>Best <span className='font-bold'>Eats</span></h1>
        
        {/* button wrapper */}
        <div className='ml-2 bg-gray-200 rounded-full p-1 text-sm cursor-pointer hidden sm:flex'>
        <button className='bg-black text-white p-1 rounded-full '>Delivery</button>
        <button className='p-1'>Pickup</button>
        </div>

        </div>

        {/* input */}
        <div className='flex items-center bg-gray-200 px-2 rounded-full 
                    xss:w-[90%] xs:w-[250px] sm:w-[400px] lg:w-[50%]
                    medium:w-[90%] mediumEnd:w-[90%] mx-2'> 
            <AiOutlineSearch className='cursor-pointer' size={20}></AiOutlineSearch>
            <input className='outline-none bg-transparent p-1 xss:w-[100%]' type="text" placeholder='Search here' />
        </div>

        {/* cart button */}
        <div className='flex items-center justify-center bg-black rounded-full p-1 text-white w-[50px] sm:w-[100px] cursor-pointer'> 
            <BsFillCartFill size={20}></BsFillCartFill>
            <button className='ml-2 hidden sm:flex'>Cart</button>
        </div>
    {/* menu selection overlay */}
    <div className={ nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0 duration-300' : 'fixed'}></div>


    {/* menu drawer menu */}
    <div className={nav ? 'bg-white w-[300px] fixed top-0 left-0 z-10 h-screen duration-300' : 'fixed left-[-100%] w-[-300px] top-0 duration-300'}>

    <h1 className='sm:text-3xl lg:text-xl absolute top-4 left-4'>Best <span className='font-bold'>Eats</span></h1>
    <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
    onClick={()=> setNav(!nav)}
    size={30}></AiOutlineClose>
    </div>
    </div>
  )
}

export default Navigation