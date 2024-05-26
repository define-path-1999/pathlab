"use client";
// components/Login.tsx
import React, { useState, FormEvent } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Your login logic here
        console.log('Logging in...', { email, password });
    };

    return (
        <div className="h-screen bg-gray-100 overflow-hidden">
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-semibold text-xl">PathLab</div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white hover:text-gray-200">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-200">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-200">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="w-full  flex justify-center items-center h-full ">
                {/* Left side with the image */}
                <div className="hidden lg:block w-1/2 h-full">
                    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="PathLab" className="h-full w-full object-cover" />
                </div>
                {/* Right side with the form */}
                <div className="w-full lg:w-1/2 p-6 flex items-center justify-center h-full">
                    <Container maxWidth="sm">
                        <Typography variant="h4" gutterBottom>
                            Login
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                type="email"
                                fullWidth
                                className="mb-4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                type="password"
                                fullWidth
                                className="mb-4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button variant="contained" color="primary" type="submit" fullWidth>
                                Login
                            </Button>
                        </form>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Login;
