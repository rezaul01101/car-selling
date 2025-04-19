const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo and Description Section */}
                    <div className="space-y-6">
                        <div className="flex items-center">
                            <img src="/images/logo.png" alt="Motex" className="h-8" />
                            <span className="ml-2 text-2xl font-bold text-white">MOTEX</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            We are many variations of passages available but the majority have suffered alteration in some form by injected humour
                            words believable.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <span className="ml-3">+2 123 654 7898</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="ml-3">25/B Milford Road, New York</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <span className="ml-3">info@example.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    About Us
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Update News
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Testimonials
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Terms Of Service
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Our Dealers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Center Section */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold">Support Center</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    FAQ's
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Affiliates
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Booking Tips
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Sell Vehicles
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Contact Us
                                </a>
                            </li>
                            <li className="flex items-center">
                                <svg className="mr-2 h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.293 3.293a1 1 0 011.414 0L16 11.586V8a1 1 0 012 0v6a1 1 0 01-1 1H11a1 1 0 110-2h3.586l-8.293-8.293a1 1 0 010-1.414z" />
                                </svg>
                                <a href="#" className="transition-colors hover:text-red-600">
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="mb-6 text-xl font-semibold">Newsletter</h3>
                        <p className="mb-6 text-gray-400">Subscribe Our Newsletter To Get Latest Update And News</p>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full rounded-md bg-white px-4 py-3 text-black focus:ring-2 focus:ring-red-600 focus:outline-none"
                            />
                            <button className="flex w-full items-center justify-center rounded-md bg-red-600 px-4 py-3 text-white transition-colors hover:bg-red-700">
                                Subscribe Now
                                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <p className="text-gray-400">
                            © Copyright {currentYear} <span className="text-red-600">MOTEX</span> All Rights Reserved.
                        </p>
                        <div className="mt-4 flex space-x-4 md:mt-0">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-red-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-red-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-red-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-red-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
