import React from 'react';
import { Play, Clock3 } from 'lucide-react';

const tracks = [
  {
    title: "Summer Nights",
    artist: "The Midnight",
    album: "Days of Thunder",
    duration: "3:45",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "Crystalline",
    artist: "The Midnight",
    album: "Monsters",
    duration: "4:12",
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    title: "Lost Boy",
    artist: "The Midnight",
    album: "Kids",
    duration: "5:01",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

export default function MainContent() {
  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 to-black overflow-auto">
      <div className="p-4 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Playlist cover"
            className="w-48 h-48 md:w-60 md:h-60 shadow-lg mx-auto md:mx-0"
          />
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-300 uppercase">Playlist</p>
            <h1 className="text-4xl md:text-7xl font-bold text-white mt-2 mb-6">Synthwave Mix</h1>
            <p className="text-gray-300">Created by Spotify • 50 songs, 2 hr 35 min</p>
          </div>
        </div>

        <div className="mb-8 text-center md:text-left">
          <button className="bg-green-500 text-black rounded-full p-4 hover:bg-green-400 transition">
            <Play size={24} fill="black" />
          </button>
        </div>

        <div className="text-gray-300">
          {/* Desktop Header */}
          <div className="hidden md:grid grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-4 px-4 py-2 border-b border-gray-800 text-sm">
            <div>#</div>
            <div>Title</div>
            <div>Album</div>
            <div>Artist</div>
            <div className="flex justify-end">
              <Clock3 size={16} />
            </div>
          </div>

          {/* Tracks */}
          {tracks.map((track, index) => (
            <div
              key={track.title}
              className="flex flex-col md:grid md:grid-cols-[16px_4fr_3fr_2fr_minmax(120px,1fr)] gap-2 md:gap-4 px-4 py-2 hover:bg-white/10 rounded-md transition group"
            >
              <div className="hidden md:flex items-center">{index + 1}</div>
              <div className="flex items-center gap-4">
                <img src={track.image} alt={track.title} className="w-10 h-10" />
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="font-medium">{track.title}</span>
                  <span className="text-sm text-gray-400 md:hidden">
                    {track.artist} • {track.album}
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center">{track.album}</div>
              <div className="hidden md:flex items-center">{track.artist}</div>
              <div className="hidden md:flex items-center justify-end">{track.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}