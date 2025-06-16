import { useState } from 'react'
import Header from '../components/Header'
import WatchlistModal from '../components/WatchlistModal'
import MovieList from '../components/MovieList'

function Home() {
  // useState para enviar stado de modal abierto o no 
  const [isModalOpen, setisModalOpen] = useState(false)
  return (
    <div>
      {/* envio de props en forma de funcion para abrir modal  */}
        <Header   
        onOpenModal={() => setisModalOpen(true)} 
        />

        {/* modal visible solo si isModalOpen === true */}
        {isModalOpen && (
          // envio de prop en forma de funcion para cerrar modal 
          <WatchlistModal 
          onClose={() => setisModalOpen(false)} 
          />    
        )}
        <MovieList />
    </div>
  )
}

export default Home