function WatchlistModal({ onClose, watchlist, removeFromWatchlist, clearWatchlist }) {


  return (
    <>
      {/* div por encima de las opciones traseras del la pagina  */}
      <section className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 opacity-100">
        <div className="bg-gray-950 rounded-xl shadow-xl w-11/12 max-w-md overflow-hidden" >
          {/* cabecera de la seccion de  */}
          <header className="bg-gray-800 text-white flex justify-between items-center p-4">

            {/* titutlo y logo del modal  */}
            <h2 className="text-xl font-bold flex items-center">
              <svg
                className="mr-2 text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M232,216H183.36A103.95,103.95,0,1,0,128,232H232a8,8,0,0,0,0-16ZM40,128a88,88,0,1,1,88,88A88.1,88.1,0,0,1,40,128Zm88-24a24,24,0,1,0-24-24A24,24,0,0,0,128,104Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,128,72Zm24,104a24,24,0,1,0-24,24A24,24,0,0,0,152,176Zm-32,0a8,8,0,1,1,8,8A8,8,0,0,1,120,176Zm56-24a24,24,0,1,0-24-24A24,24,0,0,0,176,152Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,176,120ZM80,104a24,24,0,1,0,24,24A24,24,0,0,0,80,104Zm0,32a8,8,0,1,1,8-8A8,8,0,0,1,80,136Z"
                ></path>
              </svg>
              Mi Watchlist</h2>


            {watchlist.length > 1 && (
              /* boton para eliminar todas la peliculas de la watchlist */
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                onClick={() => {
                  if (window.confirm("¿Estás seguro de que quieres eliminar todas las películas de tu watchlist?")) {
                    clearWatchlist();
                  }
                }}>
                Eliminar todas
              </button>
            )}


            {/* boton para cerrar el modal */}
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-transform duration-200 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </button>
          </header>

          {/* contenido dinamico de las peliculas */}
          <div className="p-6">
            {watchlist.length === 0 ? (

              // contenido por si no hay peliculas 
              <div className="flex flex-col items-center justify-center text-gray-400 py-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-gray-300 mb-2"
                >
                  <path d="M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"></path>
                </svg>

                <p className="text-lg font-semibold text-yellow-400">Tu watchlist está vacía</p>
                <p className="text-sm text-gray-400">Agrega tus películas favoritas desde la lista principal</p>
              </div>
            ) : (

              // contenido por si hay peliculas en la watchlist 
              <div className="space-y-3">
                {
                  watchlist.map((movie) => (
                    // la generacion dinamica debe enviar una key dentro del componente a generar 
                    <div key={movie.id} className="flex items-center bg-gray-800 rounded-xl p-3 shadow-md border border-yellow-300">
                      <img className="w-16 h-24 object-cover rounded-lg shadow-sm" src={movie.url} alt={movie.title} />
                      <div className="ml-4 flex-grow">
                        <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
                      </div>

                      <button
                        onClick={() => removeFromWatchlist(movie.id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg flex items-center cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                          className="mr-2"
                        >
                          <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                        </svg>
                        Quitar</button>
                    </div>
                  ))}
              </div>
            )
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default WatchlistModal