
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top bar */}
            <div className="bg-brand-primary text-white text-xs py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <span>Welcome to South Indian Handicrafts</span>
                    <div className="flex items-center space-x-4">
                        <a href="tel:+911234567890" className="hover:text-brand-secondary">Call Us: +91-1234567890</a>
                        <a href="mailto:info@sih.com" className="hover:text-brand-secondary hidden md:block">info@sih.com</a>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl lg:text-3xl font-serif font-bold text-brand-primary">
                    SI<span className="text-brand-secondary">Handicrafts</span>
                </Link>

                <div className="hidden lg:flex items-center space-x-4 border rounded-full px-4 py-2 flex-1 max-w-lg">
                    <input type="text" placeholder="Search for products..." className="outline-none w-full bg-transparent"/>
                    <button className="text-gray-500 hover:text-brand-primary"><SearchIcon className="w-5 h-5"/></button>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-brand-primary"><UserIcon className="w-6 h-6"/></button>
                    <button className="text-gray-600 hover:text-brand-primary relative">
                        <CartIcon className="w-6 h-6"/>
                        <span className="absolute -top-2 -right-2 bg-brand-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                    </button>
                    <button className="lg:hidden" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                        <MenuIcon className="w-6 h-6"/>
                    </button>
                </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden lg:block bg-brand-dark text-white">
                <div className="container mx-auto px-4">
                    <ul className="flex justify-center items-center space-x-8">
                        {NAV_LINKS.map((link: NavLink) => (
                             <li key={link.name} className="py-3">
                                <Link to={link.path} className="hover:text-brand-secondary transition-colors duration-300 uppercase text-sm font-medium">{link.name}</Link>
                             </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                 <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="font-bold text-brand-primary">Menu</h2>
                    <button onClick={() => setMobileMenuOpen(false)}><CloseIcon className="w-6 h-6" /></button>
                 </div>
                 <nav className="p-4">
                    <ul>
                        {NAV_LINKS.map((link: NavLink) => (
                           <li key={link.name} className="py-2 border-b">
                             <Link to={link.path} onClick={() => setMobileMenuOpen(false)} className="block hover:text-brand-secondary transition-colors duration-300">{link.name}</Link>
                           </li>
                        ))}
                    </ul>
                 </nav>
            </div>
        </header>
    );
};

export default Header;
