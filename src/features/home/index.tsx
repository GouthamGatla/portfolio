import React from 'react'
import { RetroGrid } from "../../components/magicui/retro-grid";

const Home:React.FC = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <RetroGrid opacity={0.5} />
      <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent text-center ml-10 mr-10">
        Hello, I'am Goutham a Frontend Developer
      </h1>

    </div>
  )
}

export default Home