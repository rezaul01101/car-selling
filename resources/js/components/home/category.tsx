const Category = () => {
    const categories = [
        { type: 'Sedan', image: '/images/categories/1.png' },
        { type: 'Compact', image: '/images/categories/2.png' },
        { type: 'Convertible', image: '/images/categories/3.png' },
        { type: 'SUV', image: '/images/categories/4.png' },
        { type: 'Crossover', image: '/images/categories/5.png' },
        { type: 'Wagon', image: '/images/categories/6.png' },
        { type: 'Sports', image: '/images/categories/7.png' },
        { type: 'Pickup', image: '/images/categories/8.png' },
        { type: 'Family MPV', image: '/images/categories/9.png' },
        { type: 'Coupe', image: '/images/categories/10.png' },
        { type: 'Electric', image: '/images/categories/11.png' },
        { type: 'Luxury', image: '/images/categories/12.png' },
    ];

    return (
        <div className="px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <div className="mb-4 flex items-center justify-center">
                        <svg className="mr-2 h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.09 20.21,11.09 20.42,11.3L21.7,12.58C21.91,12.79 21.91,13.14 21.7,13.35M12,18.94L18.06,12.88L20.11,14.93L14.06,21H12V18.94M12,14C7.58,14 4,15.79 4,18V20H10V18.11L14,14.11C13.34,14.03 12.67,14 12,14M12,4A4,4 0 0,0 8,8A4,4 0 0,0 12,12A4,4 0 0,0 16,8A4,4 0 0,0 12,4Z" />
                        </svg>
                        <span className="text-sm font-semibold text-red-600 uppercase">Car Category</span>
                    </div>
                    <h2 className="mb-2 text-4xl font-bold">
                        Car By Body <span className="text-red-600">Types</span>
                    </h2>
                    <div className="flex justify-center">
                        <div className="h-1 w-20 rounded bg-red-600"></div>
                    </div>
                </div>

                {/* Grid of Categories */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {categories.map((category, index) => (
                        <div key={index} className="cursor-pointer rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md">
                            <div className="aspect-w-16 aspect-h-12 mb-4">
                                <img src={category.image} alt={`${category.type} car`} className="h-full w-full object-contain" />
                            </div>
                            <h3 className="text-center font-medium text-gray-800">{category.type}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
