import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { PageProps } from '@inertiajs/inertia';
import { FormEvent } from 'react';
import toast from 'react-hot-toast';
import { usePage } from '@inertiajs/react';
type BodyTypeProp = {
    id: number;
    title: string;
    slug: string;
    image: string;
    description: string;
    created_at: string;
    updated_at: string;
};
type typeProps = PageProps & {
    bodyTypes:BodyTypeProp[];
};
const CarCreate = () => {
        const { bodyTypes } = usePage<typeProps>().props;
    
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        features: '',
        images: null,
        make: '',
        model: '',
        year: '',
        mileage: '',
        price: '',
        fuel_type: '',
        transmission: '',
        body_type: '',
        color: '',
        condition: '',
        engine_size: '',
        location: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/admin/cars/store', {
            onSuccess: () => {
                toast.success('Car added successfully')
                // You can add a success notification here
                console.log('Car added successfully');
            },
        });
    };

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Car List',
            href: '/admin/cars',
        },
        {
            title: 'add new car',
            href: 'admin/car/',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add new car" />

            <div className="container">
                <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6">
                    <div className="grid grid-cols-2 gap-6 items-start">
                        <div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {/* Title */}
                                <div className="col-span-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        type="text"
                                        id="title"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        placeholder="2018 Toyota Corolla - Excellent Condition"
                                    />
                                    {errors.title && <div className="mt-1 text-sm text-red-500">{errors.title}</div>}
                                </div>
                                

                                {/* Description */}
                                <div className="col-span-2">
                                    <Label htmlFor="description">Description</Label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows={8}
                                        className="focus-visible:border-ring focus-visible:ring-ring/50 mt-1 block w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                                    />
                                    {errors.description && <div className="mt-1 text-sm text-red-500">{errors.description}</div>}
                                </div>

                                {/* Features */}
                                <div className="col-span-2">
                                    <Label htmlFor="features">Features</Label>
                                    <textarea
                                        id="features"
                                        value={data.features}
                                        onChange={(e) => setData('features', e.target.value)}
                                        rows={2}
                                        className="focus-visible:border-ring focus-visible:ring-ring/50 mt-1 block w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                                        placeholder='Enter features separated by commas (e.g., "Airbags, Sunroof, GPS")'
                                    />
                                    {errors.features && <div className="mt-1 text-sm text-red-500">{errors.features}</div>}
                                </div>

                                <div>
                                <Label htmlFor="make">Make</Label>
                                <Input
                                    type="text"
                                    id="make"
                                    value={data.make}
                                    onChange={(e) => setData('make', e.target.value)}
                                    placeholder="Toyota"
                                />
                                {errors.make && <div className="mt-1 text-sm text-red-500">{errors.make}</div>}
                            </div>

                            {/* Model */}
                            <div>
                                <Label htmlFor="model">Model</Label>
                                <Input
                                    type="text"
                                    id="model"
                                    value={data.model}
                                    onChange={(e) => setData('model', e.target.value)}
                                    placeholder="Corolla"
                                />
                                {errors.model && <div className="mt-1 text-sm text-red-500">{errors.model}</div>}
                            </div>

                                {/* Images Upload */}
                                <div className="col-span-2">
                                    <Label htmlFor="images">Images</Label>
                                    <Input type="file" id="images" onChange={(e) => setData('images', e.target.files)} multiple />
                                    {errors.images && <div className="mt-1 text-sm text-red-500">{errors.images}</div>}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full cursor-pointer rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
                                >
                                    {processing ? 'Adding Car...' : 'Add Car'}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Year */}
                            <div>
                                <Label htmlFor="year">Year</Label>
                                <Input
                                    type="number"
                                    id="year"
                                    value={data.year}
                                    onChange={(e) => setData('year', e.target.value)}
                                    placeholder="2018"
                                />
                                {errors.year && <div className="mt-1 text-sm text-red-500">{errors.year}</div>}
                            </div>

                            {/* Mileage */}
                            <div>
                                <Label htmlFor="mileage">Mileage</Label>
                                <Input
                                    type="text"
                                    id="mileage"
                                    value={data.mileage}
                                    onChange={(e) => setData('mileage', e.target.value)}
                                    placeholder="50000"
                                />
                                {errors.mileage && <div className="mt-1 text-sm text-red-500">{errors.mileage}</div>}
                            </div>

                            {/* Price */}
                            <div>
                                <Label htmlFor="price">Price</Label>
                                <Input
                                    type="number"
                                    step="0.01"
                                    id="price"
                                    value={data.price}
                                    onChange={(e) => setData('price', e.target.value)}
                                    placeholder="25000.00"
                                />
                                {errors.price && <div className="mt-1 text-sm text-red-500">{errors.price}</div>}
                            </div>

                            {/* Fuel Type */}
                            <div>
                                <Label htmlFor="fuel_type">Fuel Type</Label>
                                <select
                                    id="fuel_type"
                                    value={data.fuel_type}
                                    onChange={(e) => setData('fuel_type', e.target.value)}
                                    className="focus-visible:border-ring focus-visible:ring-ring/50 mt-1 block w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                                >
                                    <option value="">Select fuel type</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Electric">Electric</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                                {errors.fuel_type && <div className="mt-1 text-sm text-red-500">{errors.fuel_type}</div>}
                            </div>

                            {/* Transmission */}
                            <div>
                                <Label htmlFor="transmission">Transmission</Label>
                                <select
                                    id="transmission"
                                    value={data.transmission}
                                    onChange={(e) => setData('transmission', e.target.value)}
                                    className="focus-visible:border-ring focus-visible:ring-ring/50 mt-1 block w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                                >
                                    <option value="">Select transmission</option>
                                    <option value="Automatic">Automatic</option>
                                    <option value="Manual">Manual</option>
                                </select>
                                {errors.transmission && <div className="mt-1 text-sm text-red-500">{errors.transmission}</div>}
                            </div>

                            {/* Body Type */}
                            <div>
                                <Label htmlFor="body_type">Body Type</Label>
                                <select
                                    id="body_type"
                                    value={data.body_type}
                                    onChange={(e) => setData('body_type', e.target.value)}
                                    className="focus-visible:border-ring focus-visible:ring-ring/50 mt-1 block w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                                >
                                    <option value="">Select body type</option>
                                    {
                                        bodyTypes.map((bodyType) => (
                                            <option key={bodyType.id} value={bodyType.id}>
                                                {bodyType.title}
                                            </option>
                                        ))
                                    }
                                </select>
                                {errors.body_type && <div className="mt-1 text-sm text-red-500">{errors.body_type}</div>}
                            </div>

                            {/* Color */}
                            <div>
                                <Label htmlFor="color">Color</Label>
                                <Input type="text" id="color" value={data.color} onChange={(e) => setData('color', e.target.value)} />
                                {errors.color && <div className="mt-1 text-sm text-red-500">{errors.color}</div>}
                            </div>

                            {/* Condition */}
                            <div>
                                <Label htmlFor="condition">Condition</Label>
                                <select
                                    id="condition"
                                    value={data.condition}
                                    onChange={(e) => setData('condition', e.target.value)}
                                    className="focus-visible:border-ring focus-visible:ring-ring/50 mt-1 block w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                                >
                                    <option value="">Select condition</option>
                                    <option value="New">New</option>
                                    <option value="Used">Used</option>
                                    <option value="Reconditioned">Reconditioned</option>
                                </select>
                                {errors.condition && <div className="mt-1 text-sm text-red-500">{errors.condition}</div>}
                            </div>

                            {/* Engine Size */}
                            <div>
                                <Label htmlFor="engine_size">Engine Size</Label>
                                <Input
                                    type="text"
                                    id="engine_size"
                                    value={data.engine_size}
                                    onChange={(e) => setData('engine_size', e.target.value)}
                                    placeholder="2.0L"
                                />
                                {errors.engine_size && <div className="mt-1 text-sm text-red-500">{errors.engine_size}</div>}
                            </div>

                            {/* Location */}
                            <div>
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    type="text"
                                    id="location"
                                    value={data.location}
                                    onChange={(e) => setData('location', e.target.value)}
                                    placeholder="Sydney"
                                />
                                {errors.location && <div className="mt-1 text-sm text-red-500">{errors.location}</div>}
                            </div>

                            <div className='border col-span-2'>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
};

export default CarCreate;
