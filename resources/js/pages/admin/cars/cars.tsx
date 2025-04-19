import Cars from '@/components/home/cars';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const CarsPage = () => {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Car List',
            href: '/cars',
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Car List" />
            <div className="container p-5">
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <select className="rounded-md border border-red-600 px-4 py-2 focus:border-red-600 focus:outline-none">
                                <option value="">All Status</option>
                                <option value="NEW">New</option>
                                <option value="USED">Used</option>
                            </select>
                            <select className="rounded-md border border-red-600 px-4 py-2 focus:border-red-600 focus:outline-none">
                                <option value="">All Fuel Types</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Electric">Electric</option>
                            </select>
                            <select className="rounded-md border border-red-600 px-4 py-2 focus:border-red-600 focus:outline-none">
                                <option value="">All Models</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search cars..."
                                className="w-80 rounded-md border border-red-600 px-4 py-2 pr-10 focus:border-red-600 focus:outline-none"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <a
                        href="/admin/cars/create"
                        className="rounded-md border border-red-600 bg-red-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-red-700"
                    >
                        Add New Car
                    </a>
                </div>
                <div className="grid grid-cols-4 space-y-6 space-x-6">
                    <Cars />
                </div>
            </div>
        </AppLayout>
    );
};

export default CarsPage;
