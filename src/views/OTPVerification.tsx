import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Button } from "@/components/ui";

const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(180); // 3 minutes in seconds
  const [showResend, setShowResend] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber;

  useEffect(() => {
    if (!phoneNumber) {
      navigate('/login', { replace: true });
      return;
    }

    // Initialize refs array
    inputRefs.current = inputRefs.current.slice(0, 6);

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phoneNumber, navigate]);

  const setInputRef = useCallback((index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    if (!/^\d*$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const pastedNumbers = pastedData.replace(/[^\d]/g, '').slice(0, 6);
    
    if (pastedNumbers) {
      const newOtp = [...otp];
      pastedNumbers.split('').forEach((char, index) => {
        if (index < 6) newOtp[index] = char;
      });
      setOtp(newOtp);
      
      const nextEmptyIndex = newOtp.findIndex(val => val === '');
      const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
      inputRefs.current[focusIndex]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setError('Masukkan 6 digit kode OTP');
      return;
    }

    // Demo: First two attempts fail, third succeeds
    if (attempts < 2) {
      setError('Kode OTP tidak valid. Silakan coba lagi.');
      setAttempts(prev => prev + 1);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } else {
      // Third attempt succeeds
      navigate('/app', { replace: true });
    }
  };

  const handleResend = () => {
    setShowResend(false);
    setCountdown(180);
    // Add your resend logic here
  };

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Verifikasi OTP
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Masukkan 6 digit kode yang telah dikirim ke WhatsApp Anda
        </p>
        {phoneNumber && (
          <p className="text-sm font-medium text-gray-800 mt-2">
            +62 {phoneNumber}
          </p>
        )}
      </div>

      <div className="space-y-6">
        <div className="flex justify-center space-x-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={setInputRef(index)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(index, e.target.value)}
              onKeyDown={e => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`w-12 h-12 text-center text-xl text-gray-800 font-semibold border-2 rounded-lg outline-none transition-colors duration-200 ${
                error ? 'border-red-500' : 'focus:border-green-500 focus:ring-2 focus:ring-green-500'
              }`}
            />
          ))}
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}

        <Button
          onClick={handleSubmit}
          disabled={otp.some((digit) => digit === "")}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200`}
        >
          Verifikasi
        </Button>

        <div className="text-center">
          {!showResend ? (
            <p className="text-sm text-gray-600">
              Kirim ulang kode dalam {formatTime(countdown)}
            </p>
          ) : (
            <button
              onClick={handleResend}
              className="text-sm text-green-600 hover:text-green-700 hover:underline"
            >
              Kirim Ulang Kode
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
