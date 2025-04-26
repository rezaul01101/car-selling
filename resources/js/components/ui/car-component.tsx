import { SquarePen,Trash } from 'lucide-react';
import DeleteData from '../delete-data';
import { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import toast from 'react-hot-toast';

interface CarsProps {
    data: {
        id: number;
        images: string;
        name: string;
        condition: 'New' | 'Used';
        title: string;
        transmission: string;
        mileage: string;
        model: string;
        fuel_type: string;
        price: number;
    }[];
}

const CarComponent = ({ data }: CarsProps) => {
        const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
        const [selectedId, setSelectedDeleteId] = useState<number | null>(null);
    const imageData = (img: string) => {
        const imagesArray: string[] = JSON.parse(img);
        return `/${imagesArray[0]}`;
    };

     const { post } = useForm();

    const handleDelete = (id: number) => {
        setIsDeleteModalOpen(true);
        setSelectedDeleteId(id);
    };

    const handleDeleteConfirm = () => {
        post(`/admin/cars/delete/${selectedId}`, {
            onSuccess: () => {
                toast.success('Car deleted successfully');
                setIsDeleteModalOpen(false);
            },
            onError: () => {
                toast.error('Failed to delete car');
            },
        });
    };

    return (
        <>
            {data?.map((car) => [
                <div key={car.id} className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                    {/* Car Image Container */}
                    <div className="relative">
                        <img src={imageData(car.images)} alt={car.name} className="h-48 w-full object-cover" />
                        <span
                            className={`absolute top-4 left-4 rounded-md px-3 py-1 text-sm font-medium text-white ${
                                car.condition === 'New' ? 'bg-emerald-500' : 'bg-red-500'
                            }`}
                        >
                            {car.condition}
                        </span>
                        <div className="absolute top-4 right-4 flex items-center space-x-2">
                            <span className='bg-gray-200 cursor-pointer text-blue-300 hover:text-blue-400 p-1 rounded-sm'>
                                <Link href={`/admin/cars/edit/${car.id}`}> <SquarePen size={18} /></Link>
                            </span>
                            <span onClick={()=>handleDelete(car.id)} className='bg-gray-200 cursor-pointer text-red-300 hover:text-red-400 p-1 rounded-sm'> <Trash size={18} /></span>
                        </div>
                    </div>

                    {/* Car Details */}
                    <div className="p-4">
                        <div className="mb-3">
                            <h3 className="mb-2 text-xl font-semibold">{car.title}</h3>
                            <div className="mb-2 flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                                    </svg>
                                ))}
                                {/* <span className="ml-2 text-gray-500">
                                    {car.rating} ({car.reviews}k Review)
                                </span> */}
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
                                {car.fuel_type}
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
                </div>,
            ])}

            <DeleteData isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={handleDeleteConfirm} />
            
        </>
    );
};

export default CarComponent;
