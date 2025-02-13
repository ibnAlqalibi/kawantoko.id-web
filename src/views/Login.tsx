import { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setError(''); // Clear error when user types
    // Only allow if empty or starts with 8
    if (value === '' || (value.charAt(0) === '8')) {
      // Only allow numbers
      const numbersOnly = value.replace(/[^0-9]/g, '');
      setPhoneNumber(numbersOnly);
    }
  };

  const validateAndLogin = () => {
    if (!phoneNumber) {
      setError('Nomor WhatsApp tidak boleh kosong');
      return false;
    }
    if (phoneNumber.length < 9) {
      setError('Nomor WhatsApp minimal 9 digit');
      return false;
    }
    if (phoneNumber.length > 12) {
      setError('Nomor WhatsApp maksimal 12 digit');
      return false;
    }
    if (!phoneNumber.startsWith('8')) {
      setError('Nomor WhatsApp harus dimulai dengan angka 8');
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (validateAndLogin()) {
      navigate('/verify-otp', { state: { phoneNumber } });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="p-8">
      {/* Logo and Title */}
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Selamat Datang!
        </h2>
        <p className="text-sm text-gray-600">
          Silakan masukkan nomor WhatsApp Anda untuk melanjutkan
        </p>
      </div>

      {/* Input Form */}
      <div className="mt-8">
        <div className="relative">
          {/* Country Code Flag */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <div className="flex items-center space-x-1">
              <span className="text-gray-500 text-sm font-medium">🇮🇩</span>
              <span className="text-gray-500 text-sm font-medium">+62</span>
            </div>
          </div>

          {/* Phone Input */}
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            onKeyPress={handleKeyPress}
            className={`block w-full pl-20 pr-4 py-3 text-lg border rounded-lg text-gray-900 transition-colors duration-200
              ${error 
                ? 'border-red-500 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500'
              }`}
            placeholder="8xx xxxx xxxx"
            maxLength={12}
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}

        {/* Helper Text */}
        <p className="mt-2 text-sm text-gray-500">
          Contoh: 812 3456 7890
        </p>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
        >
          Lanjutkan dengan WhatsApp
        </button>
      </div>

      {/* Additional Info */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Dengan melanjutkan, Anda menyetujui Syarat dan Ketentuan serta Kebijakan Privasi kami
        </p>
      </div>
    </div>
  );
};

export default Login;
