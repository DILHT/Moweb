import { MdAdd, MdPlayArrow } from 'react-icons/md';
import { useEffect, useState } from "react";

const movies = [
    {
        title: "The Dark Knight",
        description:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.",
        backdrop: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
        title: "Inception",
        description:
        "A thief who steals corporate secrets through dream-sharing is given the inverse task of planting an idea into the mind of a C.E.O.",
        backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    },
    {
        title: "Interstellar",
        description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        backdrop: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    },
];

const HeroSection = () => {
    const [ current, setCurrent] = useState(0);

    //Auto-Slide every 6 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % movies.length);
        }, 6000); //6 sec

        return () => clearInterval(interval);
    }, []);

    const {title, description, backdrop} = movies[current];

    return ( 
        <section
        className="relative h-[80vh] w-full bg-cover bg-center text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${backdrop})` }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        {/* Content Fo header*/}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 space-y-4 max-w-xl z-10">
            <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
            <p className="text-md md:text-lg text-gray-200">
            {description}
            </p>
            <div className="flex space-x-4 mt-4">
            <button className="bg-[#0EF] flex items-center text-black px-6 py-4 rounded-xl hover:scale-105 transition drop-shadow-[0_0_2px_#0ef]">
                <MdPlayArrow className='space-x-2'/> <span className='ml-2 tracking-wide'>Watch Now</span>
            </button>
            <button className="bg-trasparent flex items-center text-white border-1 border-white px-7 py-4 rounded-xl hover:[#FFC107] hover:scale-105 transition">
                <MdAdd className='space-x-2'/> <span className='ml-2 tracking-wider'>Watchlist</span>
            </button>
            </div>
        </div>

        {/* pagination dot */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {movies.map((_, index) => (
            <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-[#0EF] scale-125' : 'bg-white/40'
            }`}
            />
        ))}
</div>


        </section>
    );
};

export default HeroSection;
