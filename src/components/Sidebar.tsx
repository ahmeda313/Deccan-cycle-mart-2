import React, { useState } from 'react';
import { Home, Search, Library, PlusSquare, Heart, Menu, X } from 'lucide-react';

const playlists = [
  'Chill Vibes',
  'Workout Mix',
  'Study Session',
  'Road Trip',
  'Party Hits'
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const SidebarContent = () => (
    <>
      <div className="text-white font-bold text-2xl mb-8">Spotify</div>
      
      <nav className="space-y-4">
        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
          <Home size={24} />
          Home
        </a>
        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
          <Search size={24} />
          Search
        </a>
        <a href="#" className="text-gray-300 hover:text-white flex items-center gap-4 transition">
          <Library size={24} />
          Your Library
        </a>
      </nav>

      <div className="mt-8 space-y-4">
        <button className="text-gray-300 hover:text-white flex items-center gap-4 transition">
          <PlusSquare size={24} />
          Create Playlist
        </button>
        <button className="text-gray-300 hover:text-white flex items-center gap-4 transition">
          <Heart size={24} />
          Liked Songs
        </button>
      </div>

      <div className="mt-6 border-t border-gray-800 pt-6">
        <div className="space-y-3">
          {playlists.map((playlist) => (
            <a
              key={playlist}
              href="#"
              className="text-gray-300 hover:text-white block transition text-sm"
            >
              {playlist}
            </a>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 text-white p-2 rounded-md"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-0 bg-black z-40 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="p-6 pt-16">
          <SidebarContent />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-black w-64 h-full p-6 flex-shrink-0">
        <SidebarContent />
      </div>
    </>
  );
}