import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthForm } from '../components/AuthForm';
import { signUp } from '../lib/auth';

export function Register() {
  const navigate = useNavigate();

  const handleRegister = async (data: { email: string; password: string }) => {
    const response = await signUp(data.email, data.password);
    
    if (response.success) {
      toast.success('Registration successful! Please log in.');
      navigate('/login');
    } else {
      toast.error(response.error || 'Failed to register');
    }
  };

  return <AuthForm mode="register" onSubmit={handleRegister} />;
}