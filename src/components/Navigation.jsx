import React from 'react'
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose,AiFillHeart,AiFillQuestionCircle  } from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaWallet, FaUserFriends} from 'react-icons/fa'
import {ImPriceTag} from 'react-icons/im'
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
                    xxs:w-[90%] xs:w-[250px] sm:w-[400px] lg:w-[50%]
                    medium:w-[90%] mediumEnd:w-[90%] mx-2'> 
            <AiOutlineSearch className='cursor-pointer' size={20}></AiOutlineSearch>
            <input className='outline-none bg-transparent p-1 xxs:w-[100%]' type="text" placeholder='Search here' />
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
                    onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose>

    <ul className='flex flex-col p-4 mt-[50px]'>
      <li className='flex py-4 items-center'><TbTruckDelivery className='mr-4' size={25}></TbTruckDelivery><span className='xxs:text-xl mediumEnd:text-lg lg:text-lg'>Orders</span> </li>
      <li className='flex py-4 items-center'><AiFillHeart className='mr-4' size={25}></AiFillHeart><span className='xxs:text-xl mediumEnd:text-lg lg:text-lg'>Favorites</span></li>
      <li className='flex py-4 items-center'><FaWallet className='mr-4' size={25}></FaWallet><span className='xxs:text-xl mediumEnd:text-lg lg:text-lg'>Wallet</span></li>
      <li className='flex py-4 items-center'><AiFillQuestionCircle className='mr-4' size={25}></AiFillQuestionCircle><span className='xxs:text-xl mediumEnd:text-lg lg:text-lg'>Help</span></li>
      <li className='flex py-4 items-center'><ImPriceTag className='mr-4' size={25}></ImPriceTag><span className='xxs:text-xl mediumEnd:text-lg lg:text-lg'>Promotions</span></li>
      <li className='flex py-4 items-center'><FaUserFriends className='mr-4' size={25}></FaUserFriends><span className='xxs:text-xl mediumEnd:text-lg lg:text-lg'>Invite Friends</span></li>
    </ul>
    </div>
    </div>
  )
}

export default Navigation