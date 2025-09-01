import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone, Mail } from 'lucide-react';
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [location] = useLocation();
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Rooms', href: '/rooms' },
        { name: 'Book Now', href: '/booking' },
        { name: 'Contact', href: '/contact' },
    ];
    return (_jsx("header", { className: "bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-200 dark:border-gray-700", children: [_jsxs("div", { className: "flex space-x-4", children: [_jsxs("div", { className: "flex items-center space-x-1 text-gray-600 dark:text-gray-300", children: [_jsx(Phone, { size: 14 }), _jsx("span", { children: "+1 (555) 123-4567" })] }), _jsxs("div", { className: "flex items-center space-x-1 text-gray-600 dark:text-gray-300", children: [_jsx(Mail, { size: 14 }), _jsx("span", { children: "info@luxuryhotel.com" })] })] }), _jsx("div", { className: "text-gray-600 dark:text-gray-300", children: "\u2728 Book direct and save up to 20%" })] }), _jsxs("nav", { className: "flex items-center justify-between py-4", children: [_jsx(Link, { href: "/", children: _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-white font-bold text-lg", children: "L" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "LuxuryStay" }), _jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Premium Hotel Experience" })] })] }) }), _jsx("div", { className: "hidden md:flex items-center space-x-8", children: navigation.map((item) => (_jsx(Link, { href: item.href, children: _jsx("span", { className: `font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${location === item.href
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-gray-700 dark:text-gray-200'}`, children: item.name }) }, item.name))) }), _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800", children: isMenuOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), isMenuOpen && (_jsx("div", { className: "md:hidden py-4 border-t border-gray-200 dark:border-gray-700", children: _jsx("div", { className: "flex flex-col space-y-3", children: navigation.map((item) => (_jsx(Link, { href: item.href, children: _jsx("span", { className: `block py-2 px-3 rounded-md font-medium transition-colors ${location === item.href
                                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'}`, onClick: () => setIsMenuOpen(false), children: item.name }) }, item.name))) }) }))] }) }));
}
