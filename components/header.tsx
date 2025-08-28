"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent text-white py-4 px-8 z-30">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src="/logo.png"
              alt="BrahmAstra Logo"
              width={120} // Increased logo size
              height={120} // Increased logo size
              className="object-cover"
            />
          </div>
        </Link>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isMenuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex space-x-8 text-lg">
          <ul className="flex space-x-8 text-lg">
            <li>
              <Link href="/" className="text-blue-400 hover:text-white font-bold transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-400 hover:text-white font-bold transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-400 hover:text-white font-bold transition-colors duration-300">Contact</Link>
            </li>
            <li>
              <Link href="/packages" className="text-blue-400 hover:text-white font-bold  transition-colors duration-300">Packages</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <nav className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white py-4`}>
        <ul className="space-y-4 text-center">
          <li>
            <Link href="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
