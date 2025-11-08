
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-secondary transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-white mb-4">SI<span className="text-brand-secondary">Handicrafts</span></h3>
                        <p className="text-sm">
                            Preserving the rich heritage of South Indian art by bringing authentic, handcrafted masterpieces to the world. Each piece tells a story of tradition, skill, and devotion.
                        </p>
                        <div className="flex space-x-4 mt-6">
                           <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.494v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z"/></svg></SocialIcon>
                           <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.067.087.616 1.9 2.396 3.281 4.5 3.315-2.053 1.6-4.573 2.541-7.24 2.182 2.118 1.365 4.633 2.162 7.34 2.162 8.807 0 13.61-7.277 13.61-13.61 0-.207-.005-.414-.014-.621.936-.676 1.742-1.52 2.384-2.471z"/></svg></SocialIcon>
                           <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg></SocialIcon>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-brand-secondary">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-secondary">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-brand-secondary">FAQ</Link></li>
                            <li><Link to="/privacy" className="hover:text-brand-secondary">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/products" className="hover:text-brand-secondary">Bronze Statues</Link></li>
                            <li><Link to="/products" className="hover:text-brand-secondary">Wooden Sculptures</Link></li>
                            <li><Link to="/products" className="hover:text-brand-secondary">Brass Lamps</Link></li>
                            <li><Link to="/products" className="hover:text-brand-secondary">Tanjore Paintings</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <address className="text-sm not-italic space-y-3">
                            <p>123 Temple Street, Chennai, Tamil Nadu, India - 600001</p>
                            <p>Email: <a href="mailto:info@sih.com" className="hover:text-brand-secondary">info@sih.com</a></p>
                            <p>Phone: <a href="tel:+911234567890" className="hover:text-brand-secondary">+91-1234567890</a></p>
                        </address>
                    </div>
                </div>
            </div>
            <div className="bg-black bg-opacity-20 py-4">
                <div className="container mx-auto px-4 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} South Indian Handicrafts Clone. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
