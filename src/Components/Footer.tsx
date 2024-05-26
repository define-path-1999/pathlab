import React from 'react';

interface FooterProps {
    handleservices: () => void, // Define handleservices prop
    handleappointment:()=>void;
}

export const Footer: React.FC<FooterProps> = ({ handleservices,handleappointment }) => {
    const phoneNumber = '+91 8920020464';
    return (
        <footer className="bg-black py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between flex-col md:flex-row">
                    <div className="flex space-x-4">
                        {/* Change <div> to <a> for consistency */}
                        <a onClick={handleservices} className="text-gray-300 hover:text-white">About</a>
                        <a onClick={handleappointment} className="text-gray-300 hover:text-white">Appointment</a>
                        <a href={`tel:${phoneNumber}`} className="text-gray-300 hover:text-white">Contact</a>
                    </div>
                    <div>
                        <p className="text-gray-300">&copy; 2024 Pathlab. All rights reserved.</p>
                        <p className="text-gray-300">Main Dadri road,Agahpur, sec-41, Noida(U.P) 201301</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
