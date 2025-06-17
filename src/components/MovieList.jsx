import { movies } from '../data/movies'
import MovieCards from './MovieCards'

function MovieList({ watchlist, addToWatchlist }) {
  return (
    <div className='p-6 xl:px-40 flex flex-wrap justify-center gap-4'>
      {movies.map((movie) => (
        <MovieCards 
        key={movie.id} 
        movie={movie}
        watchlist={watchlist}
        addToWatchlist={addToWatchlist}
        />
      ))}
    </div>
    
  )
}

export default MovieList