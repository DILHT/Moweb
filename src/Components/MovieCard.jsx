/**
 * A card component to display a movie's information
 * @param {Object} props Component props
 * @param {string} props.title The movie's title
 * @param {string} props.posterPath The movie's poster path
 * @param {number} props.vote The movie's vote average
 * @param {string} props.release The movie's release year
 * @returns {ReactElement} The movie card element
 */
const MovieCard = ({title, posterPath, vote, release}) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-200">
            <img src={`https://image.tmdb.org/t/p/w200${posterPath}`} 
            alt={title}
            className="w-full h-[300px] object-cover"
            />
            <div className="p-1">
                <h2 className="text-lg font-semibold mb-1">{title}</h2>
                <div className="flex justify-between items-center text-sm text-gray-400">
                <span className="bg-yellow-500 p-1 rounded text-black font-bold">⭐ {vote}</span>
                <span>{release}</span>
            </div>
            </div>

            
        </div>
    );

}

export default MovieCard;