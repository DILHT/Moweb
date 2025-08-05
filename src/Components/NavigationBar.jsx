import {Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { menu } from '../lib/menu'


const NavigationBar = () => {
    
    return (
        <header className="bg-[#121212]   px-6 py-4 shadow-md">
            <nav className='flex flex-row justify-between items-center max-w-10xl mx-auto'>
            <h1 className='text-2xl font-bold text-[#0EF] drop-shadow-[0_0_0px_#0ef]'>Moweb</h1>
            <FiSearch className='text-[#0EF] text-2xl' />
            <input 
                type="text"
                placeholder="Search movies, actors.."
                className='bg-gray-700 w-100 text-white px-4 py-2 rounded-md border border-none focus:outline-none focus:ring-1 focus:ring-[#0EF]'

            />

            <ul className='flex space-x-6 text-white'>
                {menu.map(({to,icon, label}) => {

                    return (
                        <li key={to}>
                            <Link 
                                to={to}
                                className="flex items-center text-white hover:text-[#FFC107] transition"
                            >
                                {icon}
                                <span>{label}</span>
                            </Link>
                        </li>
                    );
                })}


            </ul>
        
            </nav>

        </header>
    )
}

export default NavigationBar