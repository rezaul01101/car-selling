import CarComponent from '@/components/ui/car-component';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';

const CarsPage = () => {
        const { cars } = usePage().props;

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
               
                <div className="grid grid-cols-4 space-y-6 space-x-6">
                    <CarComponent data={cars}/>
                    {/* <Cars /> */}
                </div>
            </div>
        </AppLayout>
    );
};

export default CarsPage;
