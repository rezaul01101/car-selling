import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
const Header = () => {
    const { auth } = usePage<SharedData>().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
 {/* Top Bar */}
 <div className="bg-red-600 px-4 py-2 text-white">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                            <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            info@example.com
                        </span>
                        <span className="flex items-center">
                            <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            +2 123 654 7898
                        </span>
                        <span className="flex items-center">
                            <svg className="mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                            Sun - Fri (08AM - 10PM)
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                            {
                                auth.user ?
                                    <Link href={route('dashboard')} className="hover:text-gray-200">
                                        Dashboard
                                    </Link>
                                :(
                                <div className='flex items-center space-x-4'>
                                <Link href={route('login')} className="hover:text-gray-200">
                                        Login
                                    </Link>
                                    <Link href={route('register')} className="hover:text-gray-200">
                                        Register
                                    </Link>
                                </div>

                                )

                            }
                        {/* <div className="flex items-center space-x-2">
                            <span>Follow Us:</span>
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="hover:text-gray-200">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/">
                                <img src="/images/logo.png" alt="Motex" className="h-12" />
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-red-600">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden items-center space-x-8 md:flex">
                            <Link href="/" className="text-red-600">
                                Home
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-red-600">
                                About
                            </Link>
                            <Link href="/inventory" className="text-gray-700 hover:text-red-600">
                                Inventory
                            </Link>
                            <Link href="/pages" className="text-gray-700 hover:text-red-600">
                                Pages
                            </Link>
                            <Link href="/shop" className="text-gray-700 hover:text-red-600">
                                Shop
                            </Link>
                            <Link href="/blog" className="text-gray-700 hover:text-red-600">
                                Blog
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-red-600">
                                Contact
                            </Link>
                        </div>

                        <div className="hidden items-center md:flex">
                            <Link href="/add-listing" className="rounded-md bg-red-600 px-6 py-2 text-white transition duration-300 hover:bg-red-700">
                                Add Listing
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
                        <div className="flex flex-col space-y-4">
                            <Link href="/" className="text-red-600">
                                Home
                            </Link>
                            <Link href="/about" className="text-gray-700 hover:text-red-600">
                                About
                            </Link>
                            <Link href="/inventory" className="text-gray-700 hover:text-red-600">
                                Inventory
                            </Link>
                            <Link href="/pages" className="text-gray-700 hover:text-red-600">
                                Pages
                            </Link>
                            <Link href="/shop" className="text-gray-700 hover:text-red-600">
                                Shop
                            </Link>
                            <Link href="/blog" className="text-gray-700 hover:text-red-600">
                                Blog
                            </Link>
                            <Link href="/contact" className="text-gray-700 hover:text-red-600">
                                Contact
                            </Link>
                            <Link
                                href="/add-listing"
                                className="rounded-md bg-red-600 px-6 py-2 text-center text-white transition duration-300 hover:bg-red-700"
                            >
                                Add Listing
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;