const API_URL = 'http://localhost:5000/api';

const api = {
  get: async (path) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}${path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },

  put: async (path, data) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}${path}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  },

  post: async (path, data) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error('API error:', error);
      throw error;
    }
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Failed to connect to server. Please try again later.');
  }
};

export default api;
