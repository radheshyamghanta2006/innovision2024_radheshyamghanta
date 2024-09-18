'use client'

import { useState } from 'react'
import { Search, Disc } from 'lucide-react'

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResults, setSearchResults] = useState<any>([])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would fetch data from an API here
    setSearchResults([
      { id: 1, name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera' },
      { id: 2, name: 'Imagine', artist: 'John Lennon', album: 'Imagine' },
      { id: 3, name: 'Billie Jean', artist: 'Michael Jackson', album: 'Thriller' },
    ])
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl text-black font-bold">Search for Music</h1>
      <form onSubmit={handleSearch} className="text-black flex gap-2 ">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for songs, artists, or albums"
          className="flex-grow p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button type="submit" className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
          <Search className="w-6 h-6" />
        </button>
      </form>
      <div className="space-y-4">
        {searchResults.map((result: any) => (
          <div key={result.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
            <div className="bg-gray-300 rounded-full p-2">
              <Disc className="w-8 h-8 text-gray-600" />
            </div>
            <div>
              <h2 className="font-bold">{result.name}</h2>
              <p className="text-gray-600">{result.artist} - {result.album}</p>
            </div>
            <button className="ml-auto bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Play
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}