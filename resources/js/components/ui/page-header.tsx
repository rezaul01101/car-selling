import React from 'react';

const PageHeader = ({title}:{title:string}) => {
    return (
        <div className="relative bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')` }} // Replace with your image path
        ></div>
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
  
        {/* Content */}
        <div className="relative py-32 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>{' '}
            <span className="text-gray-300 mx-1">»</span>{' '}
            <span className="text-red-500">Car Details</span>
          </p>
        </div>
      </div>
    );
};

export default PageHeader;