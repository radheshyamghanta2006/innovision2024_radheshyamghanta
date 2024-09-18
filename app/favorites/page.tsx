'use client'

import { useState } from 'react'
import { Heart, Trash2, Play } from 'lucide-react'

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Shape of You', artist: 'Ed Sheeran', album: '÷' },
    { id: 2, name: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', album: 'Uptown Special' },
    { id: 3, name: 'Someone Like You', artist: 'Adele', album: '21' },
  ])

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(fav => fav.id !== id))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Favorites</h1>
      <div className="space-y-4">
        {favorites.map((favorite) => (
          <div key={favorite.id} className="bg-white p-4 rounded-lg shadow flex items-center space-x-4">
            <div className="bg-purple-100 rounded-full p-2">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-grow">
              <h2 className="font-bold">{favorite.name}</h2>
              <p className="text-gray-600">{favorite.artist} - {favorite.album}</p>
            </div>
            <button className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
              <Play className="w-5 h-5" />
            </button>
            <button 
              onClick={() => removeFavorite(favorite.id)}
              className="text-red-500 p-2 rounded-full hover:bg-red-100 transition-colors"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
      {favorites.length === 0 && (
        <p className="text-center text-gray-500 mt-8">You haven't added any favorites yet.</p>
      )}
    </div>
  )
}