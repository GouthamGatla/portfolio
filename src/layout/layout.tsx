import React from 'react'
import Home from '../features/home'
import Navbar from '../components/Navbar/Navbar'

const Layout: React.FC = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <Navbar />
            <Home />
        </div>
    )
}

export default Layout