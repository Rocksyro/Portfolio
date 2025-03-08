import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const AboutMe = () => {
    return (
        <>
            <section className='flex flex-col items-center'>
                <p className='uppercase text-3xl font-bold m-5'>About me</p>
                <hr className='w-4 border-2 rounded-2xl text-emerald-500' />
                <p className='p-6'>Here you will find more information about me, what I do, and my current skills</p>
            </section>
            <div className='flex flex-col w-full lg:flex-row! lg:px-20 xl:px-40'>
                <div className='flex flex-col p-6 lg:w-1/2'>
                    <p className='font-bold text-xl '>Get to know me!</p>
                    <p className='mt-5'>I'm a Front-End Developer passionate about building modern, user-friendly, and accessible web experiences. With a keen eye for detail, I bring designs to life using technologies like React, JavaScript, and Tailwind CSS.
                    </p>
                    <p>
                        Beyond coding, I love teaching and mentoring aspiring developers. I've had the opportunity to guide students in web development through various courses and bootcamps, helping them take their first steps in the tech industry.
                    </p>
                    <p>
                        I'm always eager to learn and stay up to date with the latest front-end technologies, ensuring that I deliver high-quality and innovative solutions. Let’s build something great together!
                    </p>
                    <Link to="/projects" className='my-10 flex items-start'>
                        <button className='uppercase bg-emerald-500 hover:text-black text-white hover:bg-emerald-400 font-bold p-4 w-3xs rounded-2xl shadow-xl '>Contact</button>
                    </Link>
                </div>
                <div className='flex flex-col p-6 lg:w-1/2'>
                    <p className='font-bold mb-4 text-xl'>My Skills</p>
                    <section className='flex flex-wrap justify-center mt-2'>
                        <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>Tailwind CSS</span><span>GIT</span><span>Github</span><span>Trello</span><span>Responsive Design</span>
                        <span>Teamwork</span><span>Communication</span><span>Leadership</span><span>Adaptability</span><span>Self-motivation</span><span>Attention to Detail</span>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AboutMe