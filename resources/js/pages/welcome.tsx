import Cars from '@/components/home/cars';
import Category from '@/components/home/category';
import Footer from '@/components/home/footer';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Head title="Welcome to Motex" />

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
                        <Link href={route('login')} className="hover:text-gray-200">
                            Login
                        </Link>
                        <Link href={route('register')} className="hover:text-gray-200">
                            Register
                        </Link>
                        <div className="flex items-center space-x-2">
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
                        </div>
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

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-pink-50 to-pink-100">
                <div className="container mx-auto px-4 py-20">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <div className="space-y-6">
                            <h2 className="text-sm font-semibold text-red-600">WELCOME TO MOTEX!</h2>
                            <h1 className="text-5xl leading-tight font-bold">
                                Best Way To Find
                                <br />
                                Your <span className="text-red-600">Dream</span> Car
                            </h1>
                            <p className="max-w-lg text-gray-600">
                                There are many variations of passages orem ipsum available but the majority have suffered alteration in some form by
                                injected humour.
                            </p>
                            <div className="flex space-x-4">
                                <Link href="/about" className="rounded-md bg-red-600 px-6 py-3 text-white transition duration-300 hover:bg-red-700">
                                    About More
                                </Link>
                                <Link
                                    href="/learn"
                                    className="rounded-md border border-gray-300 px-6 py-3 text-gray-700 transition duration-300 hover:bg-gray-50"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute right-0 bottom-0 h-3/4 w-3/4 rounded-full bg-red-600 opacity-20"></div>
                            <img src="/images/yellow-car.png" alt="Dream Car" className="relative z-10 w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <Category />
            <Cars />
            {/* Marketplace Banner Section */}
            <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        {/* Left Image Column */}
                        <div className="relative">
                            <div className="absolute -left-4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-red-600 opacity-10"></div>
                            <div className="relative">
                                <img
                                    src="/images/about-us.png"
                                    alt="Marketplace Car"
                                    className="relative z-10 w-full"
                                />
                            </div>
                        </div>

                        {/* Right Content Column */}
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <svg className="mr-2 h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z" />
                                </svg>
                                <span className="text-sm font-semibold text-red-600 uppercase">About Us</span>
                            </div>
                            <h2 className="text-4xl font-bold">
                                World Largest Car <span className="text-red-600">Dealer</span> Marketplace
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <div className="flex items-center">
                                    <svg className="mr-2 h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p>We sell the most trusted and best quality cars in the world</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="mr-2 h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p>Available both new and used cars with best deals</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="mr-2 h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <p>We offer a wide range of cars for all budgets and preferences</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Link href="/about" className="rounded-md bg-red-600 px-6 py-3 text-white transition duration-300 hover:bg-red-700">
                                    About More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
