import React from 'react'

const TopRatedItems = () => {
  return (
    <div className='max-w-[90%] mx-auto p-4'>
    <h1 className='text-3xl text-center p-[30px] bg-orange-400'>Top Rated Menu Items</h1>
    
    <div className="button-area flex justify-between">
        <div className="left-side">
        <h3 className='text-xl pb-2'>Filter Type</h3> 
        <button className='text-orange-600  border border-orange-600 rounded-xl py-1 px-4 mr-2 hover:bg-orange-600 hover:text-white'>All</button>
        <button className='text-orange-600  border border-orange-600 rounded-xl py-1 px-4 mr-2 hover:bg-orange-600 hover:text-white'>Burgers</button>
        <button className='text-orange-600  border border-orange-600 rounded-xl py-1 px-4 mr-2 hover:bg-orange-600 hover:text-white'>Pizza</button>
        <button className='text-orange-600  border border-orange-600 rounded-xl py-1 px-4 mr-2 hover:bg-orange-600 hover:text-white'>Salads</button>
        <button className='text-orange-600  border border-orange-600 rounded-xl py-1 px-4 mr-2 hover:bg-orange-600 hover:text-white'>Chicken</button>

        </div>

        <div className="right-side">
            <h3 className='text-xl text-right pb-2'>Filter Price</h3>
            <button className='text-orange-600  border border-orange-600 rounded-xl py-1 px-4  ml-2 hover:bg-orange-600 hover:text-white'>$</button>
            <button className='text-orange-600  border border-orange-600 rounded-xl py-1 px-4  ml-2 hover:bg-orange-600 hover:text-white'>$$</button>
            <button className='text-orange-600  border border-orange-600 rounded-xl py-1 px-4  ml-2 hover:bg-orange-600 hover:text-white'>$$$</button>
            <button className='text-orange-600  border border-orange-600 rounded-xl py-1 px-4  ml-2 hover:bg-orange-600 hover:text-white'>$$$$</button>
        </div>
    </div>

    </div>
  )
}

export default TopRatedItems