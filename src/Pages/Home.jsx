import NavigationBar from "../Components/NavigationBar";
import MovieList from "../Components/MovieList";
import HeroSection from "../Components/HeroSection";
import { useState } from "react";

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <main>
            <NavigationBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <HeroSection />
            <MovieList searchQuery={searchQuery} />
        </main>
    )
}

export default HomePage;