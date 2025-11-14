import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });
  const navigate = useNavigate();
  const { login, register, loading } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (isLogin) {
        const success = await login({
          email: formData.email,
          password: formData.password,
        });
        if (success) {
          toast.success('Login successful!');
          navigate('/dashboard');
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          return toast.error('Passwords do not match');
        }
        const success = await register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        if (success) {
          toast.success('Registration successful! Please login.');
          setIsLogin(true);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
  <div className="min-h-screen bg-[#f0f2f5] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {/* Replace the logo section */}
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-3xl font-semibold">
            <span className="text-[#404e33] font-Peloric Bold">al</span>
            <span className="text-[#C9961A] font-Peloric Bold">ra</span>
            <span className="text-[#404e33] font-Peloric Bold">ms</span>
          </h1>
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          {isLogin ? 'Log In' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.password}
              onChange={e =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.confirmPassword}
                onChange={e =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </div>
          )}

          {isLogin && (
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-green-600 rounded border-gray-300"
                checked={formData.rememberMe}
                onChange={e =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#81634b] text-white py-3 rounded-lg hover:bg-[#6b5340] transition-colors disabled:opacity-50"
          >
            {loading ? 'Loading...' : isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#81634b] font-medium hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
