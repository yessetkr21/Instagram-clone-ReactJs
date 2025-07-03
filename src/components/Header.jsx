import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Search, Home, PlusSquare, User } from 'lucide-react';

// Componente Header
const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-300 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-black bg-clip-text text-transparent">
          Instagram
        </h1>
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-500,"
            />
          </div>
        </div>
        <nav className="flex space-x-6">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`p-1 ${currentPage === 'home' ? 'text-black' : 'text-gray-600'},hover:scale-110 transition-transform duration-200`}
          >
            <Home className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setCurrentPage('create')}
            className={`p-1 ${currentPage === 'create' ? 'text-black' : 'text-gray-600'}`}
          >
            <PlusSquare className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setCurrentPage('profile')}
            className={`p-1 ${currentPage === 'profile' ? 'text-black' : 'text-gray-600'}`}
          >
            <User className="w-6 h-6" />
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;