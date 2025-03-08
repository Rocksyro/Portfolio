import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100 p-6 gap-6'>
            <p className='uppercase font-extrabold text-4xl md:text-6xl text-center mb-8 md:mb-12'>Hi, I'm Rocio Carle!</p>
            <p className='text-lg md:text-xl text-center mb-12'>Detail-oriented Front-End Developer who loves bringing designs to life with clean, modern, and user-friendly interfaces.</p>
            <Link to="/projects"><button className='uppercase bg-emerald-500 hover:text-black text-white hover:bg-emerald-400 font-bold p-4 w-xs md:w-lg lg:w-xl rounded-2xl shadow-xl'>Projects</button></Link>
        </div>
    )
}

export default Banner