import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthForm } from '../components/AuthForm';
import { signIn } from '../lib/auth';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = async (data: { email: string; password: string }) => {
    const response = await signIn(data.email, data.password);
    
    if (response.success) {
      toast.success('Logged in successfully!');
      navigate('/dashboard');
    } else {
      toast.error(response.error || 'Failed to log in');
    }
  };

  return <AuthForm mode="login" onSubmit={handleLogin} />;
}