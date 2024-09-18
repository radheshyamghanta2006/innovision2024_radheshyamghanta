import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Home, Search, Heart, Music } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MusicStream',
  description: 'A stylish music streaming application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="flex h-screen">
          <nav className="w-64 bg-purple-900 text-white p-6 space-y-6">
            <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
              <Music size={24} />
              <span>MusicStream</span>
            </Link>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="flex items-center space-x-2 hover:text-purple-300 transition-colors">
                  <Home size={20} />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/search" className="flex items-center space-x-2 hover:text-purple-300 transition-colors">
                  <Search size={20} />
                  <span>Search</span>
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="flex items-center space-x-2 hover:text-purple-300 transition-colors">
                  <Heart size={20} />
                  <span>Favorites</span>
                </Link>
              </li>
            </ul>
          </nav>
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}