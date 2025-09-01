import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-black text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Hotel Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">L</span>
                            </div>
                            <h3 className="text-xl font-bold">LuxuryStay</h3>
                        </div>
                        <p className="text-gray-400">
                            Experience unparalleled luxury and comfort in the heart of the city. Your perfect getaway awaits.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="/rooms" className="hover:text-white transition-colors">Rooms & Suites</a></li>
                            <li><a href="/booking" className="hover:text-white transition-colors">Book Now</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="/login" className="hover:text-white transition-colors">Login</a></li>
                            <li><a href="/signup" className="hover:text-white transition-colors">Signup</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white transition-colors">24/7 Concierge</li>
                            <li className="hover:text-white transition-colors">Spa & Wellness</li>
                            <li className="hover:text-white transition-colors">Fine Dining</li>
                            <li className="hover:text-white transition-colors">Airport Transfer</li>
                            <li className="hover:text-white transition-colors">Business Center</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contact Info</h4>
                        <div className="space-y-3 text-gray-400">
                            <div className="flex items-start space-x-2">
                                <MapPin className="w-5 h-5 mt-0.5 text-blue-400" />
                                <span>123 Luxury Avenue<br />Karachi District<br />Karachi 10001</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span>+92 (308) 897-7132</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span>hamzanasar144@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 LuxuryStay Hotel. All rights reserved. | Privacy Policy | Terms of Service</p>
                </div>
            </div>
        </footer>
    );
}