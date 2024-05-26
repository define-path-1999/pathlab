import React from 'react';

interface BookingDetailsProps {
  name: string;
  contactNumber: string;
  formatedDate: string;
  flatNumber: string;
  buildingNumber: string;
  landmark: string;
  city: string;
  backgroundImageUrl: string; // Add a new prop for background image URL
}

const Teamplate: React.FC<BookingDetailsProps> = ({
  name,
  contactNumber,
  formatedDate,
  flatNumber,
  buildingNumber,
  landmark,
  city,
  backgroundImageUrl // Receive the background image URL as a prop
}) => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        margin: '20px',
        padding: '20px',
        backgroundColor: '#ffffff',
        maxWidth: '600px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e0e0e0',
        backgroundImage: `url(${backgroundImageUrl})`, // Set the background image
        backgroundSize: 'cover', // Ensure the background image covers the entire div
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
      }}
    >
      <h2
        style={{
          color: '#4CAF50',
          borderBottom: '2px solid #4CAF50',
          paddingBottom: '10px',
          marginBottom: '20px'
        }}
      >
        Booking Details
      </h2>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ margin: '10px 0' }}>
          <strong>Name:</strong> <span style={{ color: '#333333' }}>{name}</span>
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Contact Number:</strong>{' '}
          <span style={{ color: '#333333' }}>{contactNumber}</span>
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Booking Time:</strong>{' '}
          <span style={{ color: '#333333' }}>{formatedDate}</span>
        </p>
      </div>
      <h3
        style={{
          color: '#4CAF50',
          borderBottom: '2px solid #4CAF50',
          paddingBottom: '10px',
          marginBottom: '20px'
        }}
      >
        Address
      </h3>
      <div style={{ marginBottom: '20px' }}>
        <p style={{ margin: '10px 0' }}>
          <strong>Flat Number:</strong>{' '}
          <span style={{ color: '#333333' }}>{flatNumber}</span>
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Building Number:</strong>{' '}
          <span style={{ color: '#333333' }}>{buildingNumber}</span>
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>Landmark:</strong> <span style={{ color: '#333333' }}>{landmark}</span>
        </p>
        <p style={{ margin: '10px 0' }}>
          <strong>City:</strong> <span style={{ color: '#333333' }}>{city}</span>
        </p>
      </div>
    </div>
  );
};

export default Teamplate;
