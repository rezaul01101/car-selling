import DeleteData from '@/components/delete-data';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { PageProps } from '@inertiajs/inertia';
import { Head, useForm, usePage } from '@inertiajs/react';
import { SquarePen, Trash } from 'lucide-react';
import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
type BodyTypeProp = {
    id: number;
    title: string;
    slug: string;
    image: string;
    description: string;
    created_at: string;
    updated_at: string;
};

type CustomPageProps = PageProps & {
    typesList: BodyTypeProp[];
};
const BodyTypes = () => {
    const { typesList } = usePage<CustomPageProps>().props;
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedId, setSelectedDeleteId] = useState<number | null>(null);

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Body Types',
            href: '/',
        },
    ];

    const { data, setData, processing, post, errors } = useForm<{
        title: string;
        description: string;
        image: File | null; // ✅ This allows both File and null
    }>({
        title: '',
        description: '',
        image: null,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post('/admin/body-types/store', {
            onSuccess: () => {
                toast.success('Body type added successfully');
            },
        });
    };

    const handleDelete = (id: number) => {
        setIsDeleteModalOpen(true);
        setSelectedDeleteId(id);
    };

    const handleDeleteConfirm = () => {
        post(`/admin/body-types/delete/${selectedId}`, {
            onSuccess: () => {
                toast.success('Body type deleted successfully');
                setIsDeleteModalOpen(false);
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Car body types" />
            <div className="container p-5">
                <div className="grid grid-cols-3">
                    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6">
                        <div>
                            <Label htmlFor="title">Name</Label>
                            <Input
                                type="text"
                                id="title"
                                value={data.title}
                                name="title"
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="Body Type eg. SUV"
                            />
                            {errors.title && <div className="mt-1 text-sm text-red-500">{errors.title}</div>}
                        </div>
                        <div className="my-2">
                            <Label htmlFor="image">Image</Label>
                            <Input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                            />
                            {errors.title && <div className="mt-1 text-sm text-red-500">{errors.title}</div>}
                        </div>
                        <div className="my-2">
                            <Label htmlFor="description">Description</Label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                rows={8}
                                className="focus-visible:border-ring focus-visible:ring-ring/50 mt-1 block w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px]"
                            />
                            {errors.description && <div className="mt-1 text-sm text-red-500">{errors.description}</div>}
                        </div>
                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
                            >
                                {processing ? 'Adding Body type...' : 'Add Body Type'}
                            </button>
                        </div>
                    </form>
                    <div className="col-span-2">
                        <div className="px-4 py-16 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-7xl">
                                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
                                    {typesList.map((type: BodyTypeProp, index: number) => (
                                        <div
                                            key={index}
                                            className="relative cursor-pointer rounded-lg bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                                        >
                                            <div className="aspect-w-16 aspect-h-12 mb-4">
                                                <img
                                                    src={`${window.location.origin}/${type.image}`}
                                                    alt={`${type.title} car`}
                                                    className="h-full w-full object-contain"
                                                />
                                                {/* <img src={type.image} alt={`${type.type} car`} className="h-full w-full object-contain" /> */}
                                            </div>
                                            <h3 className="text-center font-medium text-gray-800">{type.title}</h3>

                                            <div className="absolute top-2 right-2">
                                                <div className="mb-1 text-xs text-gray-300 hover:text-blue-400">
                                                    {' '}
                                                    <SquarePen size={20} />
                                                </div>
                                                <div onClick={() => handleDelete(type.id)} className="text-xs text-gray-300 hover:text-red-400">
                                                    {' '}
                                                    <Trash size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DeleteData isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} onConfirm={handleDeleteConfirm} />
        </AppLayout>
    );
};

export default BodyTypes;
