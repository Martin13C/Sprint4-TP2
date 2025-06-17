import { useState } from 'react'
import Header from '../components/Header'
import WatchlistModal from '../components/WatchlistModal'
import MovieList from '../components/MovieList'
import useWatchlist from '../hooks/useWatchlist'

function Home() {
  // importacion de useWatchlist para poder usar el contexto de la watchlist
   const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist()
  // useState para enviar stado de modal abierto o no 
  const [isModalOpen, setisModalOpen] = useState(false)
  return (
    <div>
      {/* envio de props en forma de funcion para abrir modal  */}
        <Header   
        onOpenModal={() => setisModalOpen(true)} 
        watchlist={watchlist}
        />

        {/* modal visible solo si isModalOpen === true */}
        {isModalOpen && (
          // envio de prop en forma de funcion para cerrar modal 
          <WatchlistModal 
          watchlist={watchlist}
          removeFromWatchlist={removeFromWatchlist}
          onClose={() => setisModalOpen(false)} 
          />    
        )}
        <MovieList 
        watchlist={watchlist}
        addToWatchlist={addToWatchlist} 
         />
    </div>
  )
}

export default Home