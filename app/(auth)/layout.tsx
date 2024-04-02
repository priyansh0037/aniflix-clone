import Image from 'next/image'
import React from 'react'
import backgroundImage from "../../public/anime-collage-1920-x-1080-wallpaper-fwx8xyvh2rd4ju8n.jpg"

function authLayout({ children }:{ children: React.ReactNode}) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent ">
    <Image src={backgroundImage} alt='backgroundImage' className='hidden  sm:flex sm:cover z-[-10] brightness-50' priority fill />
        <h2 className='text-[#E50914] text-3xl font-semibold absolute left-4 top-4 md:left-10 md:top-6 '>AnimeFlix</h2>
        
    {children}
    </div>
  )
}

export default authLayout