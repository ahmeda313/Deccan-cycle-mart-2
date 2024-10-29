import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`h-16 pt-3 sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-2xl shadow-lg w-10/12 rounded-lg mx-auto' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Deccan
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Bikes', 'Accessories', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:text-blue-600 transition-colors duration-300 relative group">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                0
              </span>
            </button>
            <button className="p-2 hover:text-blue-600 transition-colors duration-300">
              <User size={24} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          isOpen ? 'h-auto opacity-100' : 'hidden h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {['Home', 'Bikes', 'Accessories', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}