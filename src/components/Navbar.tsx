import React, { useState } from 'react';
import { Heart, Coffee, Candy, Camera, Music, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Heart, label: 'Our Story', href: '#story' },
    { icon: Candy, label: 'Sweet Moments', href: '#moments' },
    { icon: Camera, label: 'Photos', href: '#photos' },
    { icon: Music, label: 'Our Playlist', href: '#playlist' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Candy className="w-6 h-6 text-pink-500" />
            <span className="font-bold text-xl text-pink-600">Sweet Love</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 text-purple-700 hover:text-pink-500 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 py-2 text-purple-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};