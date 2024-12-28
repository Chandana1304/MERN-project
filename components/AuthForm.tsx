import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { SpotifyLogo } from './icons/SpotifyLogo';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

interface AuthFormProps {
  mode: 'login' | 'register';
  onSubmit: (data: { email: string; password: string }) => void;
}

export function AuthForm({ mode, onSubmit }: AuthFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <SpotifyLogo />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            {mode === 'login' ? 'Log in to Spotify' : 'Sign up for Spotify'}
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 rounded-md">
            <Input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              placeholder="Email address"
              error={errors.email?.message as string}
            />

            <Input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
              type="password"
              placeholder="Password"
              error={errors.password?.message as string}
            />
          </div>

          <Button type="submit" fullWidth>
            {mode === 'login' ? 'Log In' : 'Sign Up'}
          </Button>
        </form>

        <div className="text-center">
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-black px-4 text-sm text-gray-400">or</span>
            </div>
          </div>

          <p className="text-gray-400">
            {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
            <Link
              to={mode === 'login' ? '/register' : '/login'}
              className="text-white hover:text-[#1DB954]"
            >
              {mode === 'login' ? 'Sign up' : 'Log in'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}