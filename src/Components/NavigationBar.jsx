import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { menu } from '../lib/menu';
import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';

const NavigationBar = ({searchQuery, setSearchQuery}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#121212] px-6 py-4 shadow-md sticky top-0 z-50">
            <nav role='navigation' className='flex flex-wrap justify-between items-center max-w-10xl mx-auto relative'>

                <h1 className='text-2xl font-bold text-[#0EF] drop-shadow-[0_0_0px_#0ef]'>Moweb</h1>

                <div className='relative text-white hidden sm:block'>
                    <FiSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0EF] text-2xl' />
                    <input 
                        type="text"
                        placeholder="Search movies, actors.."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='bg-gray-700 w-100 text-white px-4 py-2 rounded-md border border-none focus:outline-none focus:ring-1 focus:ring-[#0EF]'
                    />
                </div>

                {/* Mobile menu button */}
                <button aria-label='Toggle Menu'
                    onClick={() => setIsOpen(!isOpen)} 
                    className='md:hidden text-3xl text-white cursor-pointer z-50 '
                >
                    {isOpen ? <MdClose /> : <MdMenu />}
                </button>

                {/* Menu items */}
                <ul className={`
                    md:flex 
                    ${isOpen ? 'flex flex-col' : 'hidden'} 
                    absolute md:static 
                    top-full left-0 
                    w-full md:w-auto 
                    bg-[#121212] 
                    md:bg-transparent 
                    p-4 md:p-0 
                    space-y-4 md:space-y-0 md:space-x-6 
                    text-white 
                    z-40
                    shadow-lg md:shadow-none
                    transition-all duration-300 ease-in-out
                `}>
                    {menu.map(({to, icon, label}) => (
                        <li key={to}>
                            <Link 
                                to={to}
                                className="flex items-center text-white hover:text-[#FFC107] transition-all duration-300 ease-in-out px-4 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {icon}
                                <span className="ml-2">{label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar;