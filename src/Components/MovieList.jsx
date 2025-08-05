import { useEffect, useState } from "react";

const MovieList = () => {

    const [movies, setMovies] = useState([])


    //setting up the api
    const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    

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
    


    return (
        <div>
            <h1 >Popular Movies</h1>
            <ul className="grid grid-cols-4">

                {movies.map((movie) => (
                    <li key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}  alt={movie.title}/>
                        <span>{movie.vote_average}</span>
                        <strong>{movie.title}</strong> - {movie.release_date}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieList;