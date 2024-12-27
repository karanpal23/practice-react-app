import {movies} from './data/movies.js';

import MovieModal from './Movie.jsx'

const MovieComponent=()=>{
    return (
    
    <div>
        <h2>Movies</h2>
        <ul>
            {
                movies.map((Movie)=>(
                    <MovieModal key={Movie.id} movie={Movie} />
                ))
            }
        </ul>
    </div>
    );
}

export default MovieComponent;