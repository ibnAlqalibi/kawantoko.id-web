import { useState } from 'react';

export const useLoginViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validatePhoneNumber = (phone: string): boolean => {
    return phone.length >= 9 && phone.length <= 13 && phone.startsWith('8');
  };

  const handleLogin = async (phoneNumber: string) => {
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number');
      return false;
    }

    try {
      setLoading(true);
      setError(null);
      
      // Add your API call here
      // const response = await loginApi.login(phoneNumber);
      
      return true;
    } catch (err) {
      setError('Login failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleLogin,
    validatePhoneNumber,
  };
};
