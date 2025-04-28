import PageHeader from '@/components/ui/page-header';
import FrontendLayout from '@/layouts/frontend-layout';
import { Head, usePage } from '@inertiajs/react';

const DetailsPage = () => {
    const { car } = usePage().props;

    const handleImage = (data) => {
        if (!data) {
            return null;
        }
        const images = JSON.parse(data);
        console.log(images);
        return images;
    };

    return (
        <FrontendLayout>
            <Head title="About Us" />
            <PageHeader title={car.title} />
            <div className="bg-gray-100 py-25">
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-5">
                    {/* Car Details Section */}
                    <div className="col-span-3">
                        <div className="rounded-lg bg-white p-6 shadow">
                            <div>
                                <div className="mb-4">
                                    <h3 className="mr-2 inline-block rounded-full bg-red-500 px-4 py-2 text-xs font-bold text-white">
                                        {car.condition}
                                    </h3>
                                    <h2 className="my-3 text-3xl font-bold">{car.title}</h2>
                                </div>
                                <div className="mb-4 text-sm text-gray-500">
                                    <span className="mr-4">
                                        <svg
                                            className="mr-1 inline-block h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            ></path>
                                        </svg>
                                        Listed On: {new Date(car.created_at).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <svg
                                            className="mr-1 inline-block h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            ></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            ></path>
                                        </svg>
                                        Views: 850
                                    </span>
                                </div>
                                <img
                                    src={handleImage(car.images) ? '/' + handleImage(car.images)[0] : ''} // Replace with your main car image path
                                    alt="Mercedes Benz Car"
                                    className="mb-4 w-full rounded-md"
                                />
                                <div className="grid grid-cols-4 gap-2">
                                    <img
                                        src="https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your thumbnail image path
                                        alt="Thumbnail 1"
                                        className="h-20 w-full cursor-pointer rounded-md object-cover"
                                    />
                                    <img
                                        src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your thumbnail image path
                                        alt="Thumbnail 2"
                                        className="h-20 w-full cursor-pointer rounded-md object-cover"
                                    />
                                    <img
                                        src="https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your thumbnail image path
                                        alt="Thumbnail 3"
                                        className="h-20 w-full cursor-pointer rounded-md object-cover"
                                    />
                                    <img
                                        src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your thumbnail image path
                                        alt="Thumbnail 4"
                                        className="h-20 w-full cursor-pointer rounded-md object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="my-5 rounded-lg bg-white p-6 shadow">
                            <h3 className="py-3 text-2xl font-bold">Description</h3>
                            <p>{car.description}</p>
                        </div>
                    </div>

                    {/* Seller Info and Contact Form Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-8 rounded-lg bg-white p-6 shadow">
                            <div>
                                <span className="text-xl font-semibold text-red-500">${car.price}</span>
                                <p className="text-sm text-gray-500">
                                    <svg
                                        className="mr-1 inline-block h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                    </svg>
                                    50k Miles | 25/B Milford, New York
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-white p-6 shadow">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
};

// const SellerInfo = () => {
//     return (
//         <div className="mb-6 flex items-center justify-between">
//             <div>
//                 <span className="text-xl font-semibold text-red-500">$50,560</span>
//                 <p className="text-sm text-gray-500">
//                     <svg
//                         className="mr-1 inline-block h-4 w-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                         ></path>
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                     </svg>
//                     50k Miles | 25/B Milford, New York
//                 </p>
//             </div>
//             <div className="text-right">
//                 <img
//                     src="/images/marid-anderson.jpg" // Replace with seller's profile image path
//                     alt="Marid Anderson"
//                     className="mx-auto mb-2 h-16 w-16 rounded-full"
//                 />
//                 <h3 className="text-sm font-semibold">Marid Anderson</h3>
//                 <p className="text-xs text-gray-500">Customer Advisor</p>
//                 <div className="mt-2 flex justify-end">
//                     <a href="#" className="mr-2 text-gray-500 hover:text-blue-500">
//                         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 fillRule="evenodd"
//                                 d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.897 3.777-3.897 1.094.196 2.283.304 3.189.304V8.359c-1.23-.185-2.45-.295-3.67-.295-1.86 0-3.104 1.107-3.104 3.08v1.96h-2.06v2.89h2.06v6.988A9.969 9.969 0 0022 12z"
//                                 clipRule="evenodd"
//                             ></path>
//                         </svg>
//                     </a>
//                     <a href="#" className="mr-2 text-gray-500 hover:text-blue-500">
//                         {/* <svg
//                 className="w-4 h-4"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.893-.951-2.168-1.55-3.591-1.55-3.179 0-5.515 2.966-4.797 5.532-3.99-194-6.331-2.139-8.342-3.37-1.096 1.85-2.03 3.407-3.197 4.617-2.069 2.144-3.284 4.635-3.284 7.346 0 2.54 1.301 4.747 3.285 6.364-1.218-.037-2.358-.376-3.408-1.007.441 1.387 1.701 2.395 3.222 2.48-1.595 1.242-3.604 1.999-5.786 1.999-1.199 0-2.362-.197-3.425-.561 2.18 6.922 7.184 11.908 13.41 12.111-1.823-7.945-14.006-7.7-14.006-7.7 0-.209.075-.399.212-.536.769-.992 1.799-1.562 2.912-1.724 1.022-.139 2.058-.007 2.924.395 1.172 1.635 2.008 3.452 2.379 5.411.118 1.043.456 2.086 1.03 2.914C17.4 20.525 19.737 21.8 22.4 21.995c-1.176-.685-2.016-1.724-2.708-2.905z"
//               ></svg> */}
//                     </a>
//                     <a href="#" className="text-gray-500 hover:text-blue-500">
//                         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 fillRule="evenodd"
//                                 d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10zm-3 0a1 1 0 00-1-1h-2v-2a1 1 0 00-1-1h-2a1 1 0 00-1 1v2h-2a1 1 0 00-1 1v2a1 1 0 001 1h2v2a1 1 0 001 1h2a1 1 0 001-1v-2h2a1 1 0 001-1v-2z"
//                                 clipRule="evenodd"
//                             ></path>
//                         </svg>
//                     </a>
//                     <a href="#" className="text-gray-500 hover:text-blue-500">
//                         <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 fillRule="evenodd"
//                                 d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 9a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1h-2zm2-5a2 2 0 110 4 2 2 0 010-4z"
//                                 clipRule="evenodd"
//                             ></path>
//                         </svg>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

const ContactForm = () => {
    return (
        <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Details</h4>
            <input
                type="text"
                placeholder="Enter Name"
                className="mb-3 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
            />
            <input
                type="email"
                placeholder="Enter Email"
                className="mb-3 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
            />
            <textarea
                placeholder="Write Message"
                rows="4"
                className="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none"
            ></textarea>
            <button className="rounded-md bg-red-500 px-6 py-3 font-semibold text-white hover:bg-red-600 focus:bg-red-600 focus:outline-none">
                Send Now →
            </button>
        </div>
    );
};

export default DetailsPage;
