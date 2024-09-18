import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Home, Search, Heart, Music } from 'lucide-react'
import Footer from './Footer'

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
      <body className={`${inter.className} bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900`}>
        <div className="min-h-screen flex relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-repeat bg-center opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M29.75 20.75V38.5L15 43V25.25L29.75 20.75zM31.25 20.75L46 25.25V43L31.25 38.5V20.75z' fill='%23ffffff'/%3E%3C/svg%3E\")" }}></div>
          </div>
          
          {/* Content */}
          <div className="flex flex-1 z-10">
            <nav className="w-64 bg-black bg-opacity-50 text-white p-6 space-y-6 backdrop-blur-md">
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
            <main className="flex-1 overflow-y-auto p-8 text-white">
              {children}
            </main>
          </div>
        </div>
        
        <Footer />
      </body>
      
    </html>
  )
}