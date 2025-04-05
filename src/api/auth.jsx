// src/api/auth.js
import axiosInstance from './axiosInstance';

export const register = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;  // Javobni qaytarish
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;  // Xatoni qaytarish
  }
};
