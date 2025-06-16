import { movies } from '../data/movies'
import MovieCards from './MovieCards'

function MovieList() {
  return (
    <div className='p-6 xl:px-40 flex flex-wrap justify-center gap-4'>
      {movies.map((movie) => (
        <MovieCards key={movie.id} movie={movie}/>
      ))}
    </div>
    
  )
}

export default MovieList