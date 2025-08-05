import NavigationBar from "../Components/NavigationBar";
import MovieList from "../Components/MovieList";
import HeroSection from "../Components/HeroSection";


const HomePage = () => {
    return (
        <main>
            <NavigationBar />
            <HeroSection />
            <MovieList />
        </main>
    )
}

export default HomePage;