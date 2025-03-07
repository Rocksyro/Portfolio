import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            <div className='flex flex-row justify-between items-center p-4 px-6 h-16 bg-white text-xs md:text-sm lg:text-xl shadow-sm'>
                <div className='flex items-center gap-4'>
                    <img src="/Perfil-circ.png" alt="Profile photo" width={50} />
                    <Link to="/" className="font-bold hover:text-emerald-500 transition-colors">ROCIO CARLE</Link>
                </div>
                <div className='md:hidden font-bold text-lg'>
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="p-1 rounded hover:bg-gray-100 hover:text-emerald-500 transition-colors"
                    >
                        {isMenuOpen ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}
                    </button>
                </div>
                <div className='hidden md:!block'>
                    <div className='md:flex md:gap-6 font-bold lg:gap-8 lg:pr-20'>
                        <Link to="/" className="hover:text-emerald-500 transition-colors">HOME</Link>
                        <Link to="#about" className="hover:text-emerald-500 transition-colors">ABOUT</Link>
                        <Link to="/projects" className="hover:text-emerald-500 transition-colors">PROJECTS</Link>
                        <Link to="/contact" className="hover:text-emerald-500 transition-colors">CONTACT</Link>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white md:hidden shadow-md z-10 transition-all">
                    <div className='flex flex-col py-4 px-6'>
                        <Link
                            to="/"
                            className="py-2 px-2 hover:bg-gray-100 hover:text-emerald-500 font-bold transition-colors rounded"
                            onClick={toggleMenu}
                        >
                            HOME
                        </Link>
                        <Link
                            to="#about"
                            className="py-2 px-2 hover:bg-gray-100 hover:text-emerald-500 font-bold transition-colors rounded"
                            onClick={toggleMenu}
                        >
                            ABOUT
                        </Link>
                        <Link
                            to="/projects"
                            className="py-2 px-2 hover:bg-gray-100 hover:text-emerald-500 font-bold transition-colors rounded"
                            onClick={toggleMenu}
                        >
                            PROJECTS
                        </Link>
                        <Link
                            to="/contact"
                            className="py-2 px-2 hover:bg-gray-100 hover:text-emerald-500 font-bold transition-colors rounded"
                            onClick={toggleMenu}
                        >
                            CONTACT
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}