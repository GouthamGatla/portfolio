import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className='w-full h-[50px] flex items-center justify-center fixed top-0 bg-white-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100'>
        <p className='text-2xl font-bold'>Navbar</p>
    </div>
  )
}

export default Navbar