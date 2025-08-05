const HeroSection = () => {
    const bgImage =
        'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg'; // The Dark Knight backdrop

    return (
        <section
        className="relative h-[80vh] w-full bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bgImage})` }}
        >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

        {/* Content */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 space-y-4 max-w-xl z-10">
            <h1 className="text-4xl md:text-6xl font-bold">The Dark Knight</h1>
            <p className="text-md md:text-lg text-gray-200">
            Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent,
            Batman sets out to dismantle the remaining criminal organizations that plague the streets.
            </p>
            <div className="flex space-x-4 mt-4">
            <button className="bg-[#0EF] text-black px-6 py-4 rounded-xl hover:scale-105 transition">
                ▶ Watch Now
            </button>
            <button className="bg-trasparent text-white border-1 border-white px-7 py-4 rounded-xl hover:[#FFC107] hover:scale-105 transition">
                + Watchlist
            </button>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;
