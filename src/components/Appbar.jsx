import React, { useState } from 'react';
import { IoMenuOutline, IoCloseOutline, IoPersonOutline, IoBriefcaseOutline, IoReaderOutline, IoLibraryOutline, IoReceiptOutline, IoHomeOutline } from "react-icons/io5";

const AppBar = () => {
    const handleScroll = (id) => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav
            className={`fixed w-[800px] p-5 border-solid border-2 border-white rounded-full shadow-lg mt-10 z-10 bg-neutral-800 invisible sm:visible`}
            style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
                <div className='flex flex-row justify-between'>
                    <a href="#main-section" className='flex flex-row items-center gap-2 dark:text-white text-white'><IoHomeOutline /></a>
                    <div className='flex flex-row gap-3 transition-all'>
                        <a href="#aboutme-section" className='flex flex-row items-center gap-2 text-white'>About me</a>
                        <a href="#work-section" className='flex flex-row items-center gap-2 text-white'>Experience</a>
                        <a href="#tech-section" className='flex flex-row items-center gap-2 text-white'>Technologies</a>
                        <a href="#courses-section" className='flex flex-row items-center gap-2 text-white'>Certificates</a>
                        <a href="#projects-section" className='flex flex-row items-center gap-2 text-white'>Projects</a>
                    </div>
                </div>
            </nav>

            <button
                className="fixed top-5 right-5 z-20 md:hidden bg-white rounded-md"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <IoCloseOutline color='black' size={30} /> : <IoMenuOutline color='black' size={30} />}
            </button>

            <div
                className={`fixed top-0 right-0 h-full w-full bg-neutral-800 z-10 transform transition-transform duration-300 ease-in-out md:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="flex flex-col h-full gap-10 text-white justify-center items-end mr-7">
                    <a href="#main-section" className='text-5xl flex gap-2' onClick={() => handleScroll('main-section')}><IoHomeOutline />Home</a>
                    <a href="#aboutme-section" className='text-5xl flex gap-2' onClick={() => handleScroll('aboutme-section')}><IoPersonOutline />About Me</a>
                    <a href="#work-section" className='text-5xl flex gap-2' onClick={() => handleScroll('work-section')}><IoBriefcaseOutline />Experience</a>
                    <a href="#tech-section" className='text-5xl flex gap-2' onClick={() => handleScroll('tech-section')}><IoLibraryOutline />Technologies</a>
                    <a href="#courses-section" className='text-5xl flex gap-2' onClick={() => handleScroll('courses-section')}><IoReceiptOutline />Certificates</a>
                    <a href="#projects-section" className='text-5xl flex gap-2' onClick={() => handleScroll('projects-section')}><IoReaderOutline />Projects</a>
                </nav>
            </div>
        </>
    );
};

export default AppBar;