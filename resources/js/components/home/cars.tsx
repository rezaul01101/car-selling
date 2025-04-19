interface CarType {
    id: number;
    name: string;
    image: string;
    rating: number;
    reviews: number;
    transmission: string;
    mileage: string;
    model: string;
    fuelType: string;
    price: number;
    status: 'NEW' | 'USED';
}

const Cars = () => {
    const cars: CarType[] = [
        {
            id: 1,
            name: 'Mercedes Benz Car',
            image: '/images/cars/01.jpg',
            rating: 5.0,
            reviews: 58.5,
            transmission: 'Automatic',
            mileage: '10.15km / 1-litre',
            model: '2023',
            fuelType: 'Hybrid',
            price: 45620,
            status: 'USED',
        },
        {
            id: 2,
            name: 'Yellow Ferrari 458',
            image: '/images/cars/02.jpg',
            rating: 5.0,
            reviews: 58.5,
            transmission: 'Automatic',
            mileage: '10.15km / 1-litre',
            model: '2023',
            fuelType: 'Hybrid',
            price: 90250,
            status: 'NEW',
        },
        {
            id: 3,
            name: 'Black Audi Q7',
            image: '/images/cars/03.jpg',
            rating: 5.0,
            reviews: 58.5,
            transmission: 'Automatic',
            mileage: '10.15km / 1-litre',
            model: '2023',
            fuelType: 'Hybrid',
            price: 44350,
            status: 'NEW',
        },
        {
            id: 4,
            name: 'BMW Sports Car',
            image: '/images/cars/04.jpg',
            rating: 5.0,
            reviews: 58.5,
            transmission: 'Automatic',
            mileage: '10.15km / 1-litre',
            model: '2023',
            fuelType: 'Hybrid',
            price: 78760,
            status: 'NEW',
        },
        {
            id: 5,
            name: 'Red Porsche 911',
            image: '/images/cars/05.jpg',
            rating: 5.0,
            reviews: 58.5,
            transmission: 'Automatic',
            mileage: '10.15km / 1-litre',
            model: '2023',
            fuelType: 'Hybrid',
            price: 92450,
            status: 'NEW',
        },
        {
            id: 6,
            name: 'Tesla Model S',
            image: '/images/cars/06.jpg',
            rating: 5.0,
            reviews: 58.5,
            transmission: 'Automatic',
            mileage: '10.15km / 1-litre',
            model: '2023',
            fuelType: 'Electric',
            price: 85600,
            status: 'NEW',
        },
        {
            id: 7,
            name: 'Lexus RX 350',
            image: '/images/cars/07.jpg',
            rating: 5.0,
            reviews: 58.5,
            transmission: 'Automatic',
            mileage: '10.15km / 1-litre',
            model: '2023',
            fuelType: 'Hybrid',
            price: 52300,
            status: 'USED',
        },
        {
            id: 8,
            name: 'Range Rover Sport',
            image: '/images/cars/08.jpg',
            rating: 5.0,
            reviews: 58.5,
            transmission: 'Automatic',
            mileage: '10.15km / 1-litre',
            model: '2023',
            fuelType: 'Hybrid',
            price: 88750,
            status: 'NEW',
        },
    ];

    return (
        <>
            {cars.map((car) => (
                <div key={car.id} className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                    {/* Car Image Container */}
                    <div className="relative">
                        <img src={car.image} alt={car.name} className="h-48 w-full object-cover" />
                        <span
                            className={`absolute top-4 left-4 rounded-md px-3 py-1 text-sm font-medium text-white ${
                                car.status === 'NEW' ? 'bg-emerald-500' : 'bg-red-500'
                            }`}
                        >
                            {car.status}
                        </span>
                    </div>

                    {/* Car Details */}
                    <div className="p-4">
                        <div className="mb-3">
                            <h3 className="mb-2 text-xl font-semibold">{car.name}</h3>
                            <div className="mb-2 flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-gray-500">
                                    {car.rating} ({car.reviews}k Review)
                                </span>
                            </div>
                        </div>

                        {/* Car Specifications */}
                        <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
                            <div className="flex items-center">
                                <svg className="mr-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                    />
                                </svg>
                                {car.transmission}
                            </div>
                            <div className="flex items-center">
                                <svg className="mr-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                {car.mileage}
                            </div>
                            <div className="flex items-center">
                                <svg className="mr-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                Model: {car.model}
                            </div>
                            <div className="flex items-center">
                                <svg className="mr-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                {car.fuelType}
                            </div>
                        </div>

                        {/* Price and Details Button */}
                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-xl font-bold text-red-600">${car.price.toLocaleString()}</span>
                            <button className="rounded-md bg-red-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-red-700">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cars;
