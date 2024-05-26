import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const ConfirmationPage: React.FC = () => {
  const router = useRouter();
  const { status } = router.query; // Get the status from the query parameter

  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (status === 'success') {
      setMessage('Your appointment is booked successfully.');
    } else if (status === 'error') {
      setMessage('Booking failed, please try again.');
    }
  }, [status]);

  const handleRetry = () => {
    router.push('/'); // Redirect back to the homepage to retry booking
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Appointment Status</h1>
        <p className="mb-6">{message}</p>
        {status === 'error' && (
          <Button variant="contained" color="secondary" onClick={handleRetry}>
            Retry
          </Button>
        )}
        <Button variant="contained" color="primary" onClick={() => router.push('/')}>
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
