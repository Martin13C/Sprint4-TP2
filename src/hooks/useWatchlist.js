import { useEffect, useState } from 'react'

export const useWatchlist = () => {
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(stored)
  }, []);
  
  const addToWatchlist = (movie)  => {
    if (!watchlist.find(item => item.id === movie.id)) {
      const updated = [...watchlist, movie];
      setWatchlist(updated);
      localStorage.setItem("watchlist", JSON.stringify(updated));
    }
  };

 const removeFromWatchlist = (id) => {
    const updated = watchlist.filter(movie => movie.id !== id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  const clearWatchlist = () => {
    setWatchlist([]);
    localStorage.removeItem("watchlist");
  };

  return {watchlist, addToWatchlist, removeFromWatchlist, clearWatchlist}
}

export default useWatchlist