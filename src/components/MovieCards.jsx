
function MovieCards({ movie, watchlist, addToWatchlist }) {
  // desestructuracion del objeto movie 
  const { id, image, title } = movie;


  // anular boton de agregar si una pelicula esta ya en la lista, evitando duplicados
  const isInWatchlist = watchlist.some((movie) => movie.id === id)

  return (

    <div className='bg-gray-800 py-4 px-2 rounded-xl shadow-3xl text-center max-w-[350px]'>
      <div className="w-full h-96 overflow-hidden rounded-xl">
        <img src={`/src/assets/img/${image}`} alt={title} className="w-full h-full object-contain" />
      </div>

      <h3 className="text-lg font-semibold text-white mt-3">{title}</h3>

      {/* bootn de agregar peliculas con funcion en el boton,
      con envios de datos al LocalStorage,
      con className condicional por si la pelicula ya esta agregada  */}
      <button
        className={`mt-3 text-white font-medium py-2 px-4 rounded-full transition-colors cursor-pointer ${isInWatchlist ? "bg-gray-950 cursor-not-allowed " : "bg-yellow-500 hover:bg-yellow-600"}  `}

        disabled={isInWatchlist}
        onClick={() => addToWatchlist({ id, title, url: `/src/assets/img/${image}` })}
      >
        {isInWatchlist ? "Ya en la lista" : "Agregar a la lista"}
      </button>
    </div>
  )
}

export default MovieCards