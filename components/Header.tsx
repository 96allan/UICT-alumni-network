import React, { useState } from 'react';

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
);

interface HeaderProps {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#benefits' },
    { name: 'Directory', href: '#directory' },
    { name: 'Events & News', href: '#events' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary">UICT Alumni</a>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary transition-colors duration-300">{link.name}</a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
            {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)} className="px-5 py-2 text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                    Logout
                </button>
            ) : (
                <button onClick={() => setIsLoggedIn(true)} className="px-5 py-2 text-white bg-primary rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md">
                    Login / Sign Up
                </button>
            )}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary focus:outline-none">
            {isMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 w-full bg-white shadow-lg`}>
        <div className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
          ))}
          <div className="pt-4">
            {isLoggedIn ? (
                <button onClick={() => { setIsLoggedIn(false); setIsMenuOpen(false); }} className="px-5 py-2 text-primary border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                    Logout
                </button>
            ) : (
                <button onClick={() => { setIsLoggedIn(true); setIsMenuOpen(false); }} className="px-5 py-2 text-white bg-primary rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md">
                    Login / Sign Up
                </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
