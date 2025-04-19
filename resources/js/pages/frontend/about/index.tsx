import FrontendLayout from '@/layouts/frontend-layout';
import { Head } from '@inertiajs/react';

const AboutUs = () => {
    return (
        <FrontendLayout>
            <Head title="About Us" />
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">About Us</h1>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
};

export default AboutUs;
