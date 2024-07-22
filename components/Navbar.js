import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Portfolio</div>
        <div className="space-x-4 hidden md:flex">
          <Link href="#about">
            <span className="text-white cursor-pointer">About</span>
          </Link>
          <Link href="#projects">
            <span className="text-white cursor-pointer">Projects</span>
          </Link>
          <Link href="#contact">
            <span className="text-white cursor-pointer">Contact</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            Menu
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="#about">
            <span className="block text-white p-2">About</span>
          </Link>
          <Link href="#projects">
            <span className="block text-white p-2">Projects</span>
          </Link>
          <Link href="#contact">
            <span className="block text-white p-2">Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
