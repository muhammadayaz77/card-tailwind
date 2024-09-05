import React from 'react'

function App() {
  return (
    <>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-[10%]'>
      <div className='h-[500px] w-[100%] border-2 relative overflow-hidden'>
        <img className='w-[100%] h-[100%] object-cover hover:scale-50' id='img1' src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='absolute top-0 m-auto border-2 h-[100%] px-10 flex flex-col items-center text-white overflow-hidden' id='card'>
          <h1 className='text-4xl font-semibold font-serif text-center mt-[28rem]' id='head'>Beauty</h1>
          <p className='font-light text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima consequuntur tempore dignissimos magn</p>
        <button className='bg-gray-800 text-white px-3 py-2 rounded-xl mt-2'>See More</button>
        </div>
      </div>
      <div className='h-[500px] w-[100%] border-2 relative overflow-hidden'>
        <img className='w-[100%] h-[100%] object-cover hover:scale-50' id='img1' src="https://images.pexels.com/photos/36469/woman-person-flowers-wreaths.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='absolute top-0 m-auto border-2 h-[100%] px-10 flex flex-col items-center text-white overflow-hidden' id='card'>
          <h1 className='text-4xl font-semibold font-serif text-center mt-[28rem]' id='head'>Beyond World</h1>
          <p className='font-light text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima consequuntur tempore dignissimos magn</p>
        <button className='bg-gray-800 text-white px-3 py-2 rounded-xl mt-2'>See More</button>
        </div>
      </div>
      <div className='h-[500px] w-[100%] border-2 relative overflow-hidden'>
        <img className='w-[100%] h-[100%] object-cover hover:scale-50' id='img1' src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='absolute top-0 m-auto border-2 h-[100%] px-10 flex flex-col items-center text-white overflow-hidden' id='card'>
          <h1 className='text-4xl font-semibold font-serif text-center mt-[28rem]' id='head'>Shooting Star</h1>
          <p className='font-light text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima consequuntur tempore dignissimos magn</p>
        <button className='bg-gray-800 text-white px-3 py-2 rounded-xl mt-2'>See More</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App