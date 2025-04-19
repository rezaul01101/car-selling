import Cars from '@/components/home/cars';
import Category from '@/components/home/category';
import FrontendLayout from '@/layouts/frontend-layout';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <FrontendLayout>
            <Head title="Welcome to Motex" />
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
            <div className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Header Section */}
                    <div className="mb-12 text-center">
                        <div className="mb-4 flex items-center justify-center">
                            <svg className="mr-2 h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z" />
                            </svg>
                            <span className="text-sm font-semibold text-red-600 uppercase">NEW ARRIVALS</span>
                        </div>
                        <h2 className="mb-2 text-4xl font-bold">
                            Let's Check Latest <span className="text-red-600">Cars</span>
                        </h2>
                        <div className="flex justify-center">
                            <div className="h-1 w-20 rounded bg-red-600"></div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 space-x-6 space-y-6">
                        <Cars />
                        <Cars />
                    </div>
                </div>
            </div>

            {/* Marketplace Banner Section */}
            <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        {/* Left Image Column */}
                        <div className="relative">
                            <div className="absolute top-1/2 -left-4 h-48 w-48 -translate-y-1/2 rounded-full bg-red-600 opacity-10"></div>
                            <div className="relative">
                                <img src="/images/about-us.png" alt="Marketplace Car" className="relative z-10 w-full" />
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
        </FrontendLayout>
    );
}
