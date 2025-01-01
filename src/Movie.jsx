const MovieModal=({movie})=>{
    return (
        <li key={movie.id}>
            <img src={movie.poster} alt="Movie poster" />
            <p>  Title:  {movie.title} by {movie.director} was released in year {movie.year}</p>
            <p>Rating : {movie.rating}</p>
        </li>
    );
}

export default MovieModal;