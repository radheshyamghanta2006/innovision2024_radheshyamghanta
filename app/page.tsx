'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Pause } from 'lucide-react'

const genres = [
  { name: 'Pop', color: 'bg-green-500' },
  { name: 'Rock', color: 'bg-red-500' },
  { name: 'Hip Hop', color: 'bg-yellow-500' },
  { name: 'Electronic', color: 'bg-blue-500' },
  { name: 'Classical', color: 'bg-green-500' },
  { name: 'Jazz', color: 'bg-purple-500' },
]

const playlists = [
  { id: 1, name: "Today's Top Hits", description: "The hottest tracks right now", imagePath: "/weekend.jpeg", song: "/hit.mp3" },
  { id: 2, name: "Chill Vibes", description: "Relax and unwind with these smooth tunes", imagePath: "/chill.jpeg", song: "/chill.mp3" },
  { id: 3, name: "Workout Motivation", description: "High-energy songs to fuel your fitness", imagePath: "/rock.jpeg", song: "/gym.mp3" },
]

export default function Home() {
  const [activePlaylist, setActivePlaylist] = useState<number | null>(null)
  const [hoveredGenre, setHoveredGenre] = useState<string | null>(null)
  const [welcomeVisible, setWelcomeVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    setWelcomeVisible(true)
  }, [])

  const handlePlayPause = (playlistId: number) => {
    if (activePlaylist === playlistId) {
      audioRef.current?.pause()
      setActivePlaylist(null)
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = playlists.find(p => p.id === playlistId)?.song || ''
        audioRef.current.play()
      }
      setActivePlaylist(playlistId)
    }
  }

  return (
    <div className="space-y-8">
      <h1 
        className={`text-4xl text-black font-bold transition-all duration-1000 ease-out ${
          welcomeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        Welcome to MusicStream
      </h1>
      <section>
        <h2 className="text-2xl text-black font-semibold mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                activePlaylist === playlist.id ? 'scale-105 shadow-lg' : 'hover:scale-102'
              }`}
            >
              <div className="h-40 relative overflow-hidden">
                <Image
                  src={playlist.imagePath}
                  alt={playlist.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div 
                  className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                    activePlaylist === playlist.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="animate-pulse">
                    <div className="w-3 h-10 bg-white mx-1 inline-block"></div>
                    <div className="w-3 h-16 bg-white mx-1 inline-block"></div>
                    <div className="w-3 h-12 bg-white mx-1 inline-block"></div>
                    <div className="w-3 h-8 bg-white mx-1 inline-block"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-black text-lg mb-2">{playlist.name}</h3>
                <p className="text-gray-600">{playlist.description}</p>
                <button 
                  className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-purple-700 transition-colors"
                  onClick={() => handlePlayPause(playlist.id)}
                >
                  {activePlaylist === playlist.id ? <Pause size={16} /> : <Play size={16} />}
                  <span>{activePlaylist === playlist.id ? 'Pause' : 'Play'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl text-black font-semibold mb-4">Browse by Genre</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre) => (
            <Link
              key={genre.name}
              href={`/genre/${genre.name.toLowerCase().replace(' ', '-')}`}
              className={`${genre.color} rounded-lg p-4 text-white text-center font-bold transition-all duration-300 ${
                hoveredGenre === genre.name ? 'scale-105 shadow-lg' : 'hover:scale-102'
              }`}
              onMouseEnter={() => setHoveredGenre(genre.name)}
              onMouseLeave={() => setHoveredGenre(null)}
            >
              <span className="transition-transform duration-300 inline-block">
                {genre.name}
              </span>
            </Link>
          ))}
        </div>
      </section>
      <audio ref={audioRef} />
    </div>
  )
}