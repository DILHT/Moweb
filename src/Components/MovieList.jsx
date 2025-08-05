import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ( {searchQuery}) => {

    const [movies, setMovies] = useState([])


    //setting up the api
    const url = import.meta.env.VITE_TMDB_MOVIE_URL;


    useEffect( () =>{
    /**
     * Fetches movies from the TMDB API and stores them in the state
     * 
     * @function fetchMovies
     * @async
     * @returns {Promise<void>}
     */
        const fetchMovies = async () =>{

            const options={
                method: "GET",
                headers:{
                    accept:"application/json",
                    Authorization:`Bearer ${import.meta.env.VITE_TMDB_MOVIE_TOKEN}`,
                }
            }

            try{
                const response = await fetch(url,options);

                const data = await response.json();
                
                if(!data.results){
                    console.error("Unexpected API response =/n", data);
                }

                console.log("Movies fetched Successfully:", data );
                setMovies(data.results || []);

            }catch(error){
                console.error("Error Fetching Movies", error)
            }
        };
        fetchMovies();
    },[]);
    
    const filterMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gray-900 text-white max-w-10xl mx-auto px-6 py-8">
            <h1 className="font-bold  text-4xl mb-6" >Popular Movies</h1>
            <ul className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        
                {filterMovies.map((movie) => (
                    <MovieCard 
                    key={movie.id}
                    title={movie.title}
                    posterPath={movie.poster_path}
                    vote={movie.vote_average}
                    release={movie.release_date}
                    />
                ))}
            </ul>
        </div>
    )
}

export default MovieList;