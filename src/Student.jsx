import React from 'react'

function Student() {
  return (
    <>
    <div className='flex justify-center mt-5'>
      <div className='text-center w-full flex flex-col items-center'>
        <h3 className='text-indigo-800 font-bold text-xl md:text-3xl'>"Pure Hardwork,No Shortcut"</h3>
        <div className='border-yellow-400 border-b-4 h-1 w-20 md:w-28 text-center mt-2 md:mt-3'></div>
      </div>
    </div>
    <div className='flex justify-evenly flex-wrap mt-10 h-auto'>
      <div className='flex flex-col items-center w-44 mt-5 sm:mt-0'>
        <img src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="No Found" />
        <p className='font-bold text-2xl text-white'>6000+</p>
        <p className='font-bold text-2xl text-gray-500'>Create Card</p>
      </div>
      <div className='flex flex-col items-center w-44 mt-5 sm:mt-0'>
        <img src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="No Found" />
        <p className='font-bold text-2xl text-white'>6000+</p>
        <p className='font-bold text-2xl text-gray-500'>Create Card</p>
      </div>
      <div className='flex flex-col items-center w-44 mt-5 md:mt-0'>
        <img src="https://pwskills.com/images/landing-page/statistics/books-icon.svg" alt="No Found" />
        <p className='font-bold text-2xl text-white'>6000+</p>
        <p className='font-bold text-2xl text-gray-500'>Create Card</p>
      </div>
    </div>
    </>
  )
}

export default Student