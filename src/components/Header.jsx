import useWatchlist from "../hooks/useWatchlist"


function Header({ onOpenModal }) {

  const { watchlist } = useWatchlist()
  const watchlistCount = watchlist.length


  return (
    // navbar para la app 
    <nav className='bg-gray-800 text-white p-4 flex justify-between items-center shadow-md px-4 sm:px-10 lg:px-30 xl:px-40'>
      <div className='flex items-center justify-center '>
        <img width="50" src="/src/assets/logoTicket.svg" alt="Logo" />
        <h1 className='ml-2.5 text-2xl font-bold'>Watchlist</h1>
      </div>

      {/* boton hamburguesa */}
      <button
        onClick={onOpenModal}
        className="flex text-white py-2 px-4 rounded cursor-pointer transition-transform duration-300 hover:text-yellow-400 hover:scale-110">
        My Watchlist

        {/* simbolo para el boton  */}
        <span className="relative ml-2 opacity: 1 transform: none ">
          {watchlistCount > 0 ? (
            // icono mas contador 
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256">
                <path d="M128,232a8,8,0,0,1-5.65-2.34C115.31,222.63,48,159.1,48,104A56,56,0,0,1,160,104c0,55.1-67.31,118.63-74.35,125.66A8,8,0,0,1,128,232Z"></path>
              </svg>
              <span className="absolute -top-2  bg-yellow-500 text-black text-xs font-bold rounded-full px-2">
                {watchlistCount}
              </span>
            </>
          ) : (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm112-24a8,8,0,0,1-3.76,6.78l-64,40A8,8,0,0,1,168,200V120a8,8,0,0,1,12.24-6.78l64,40A8,8,0,0,1,248,160Zm-23.09,0L184,134.43v51.14Z"></path>
            </svg>
          )}
        </span>
      </button>
    </nav>
  )
}

export default Header