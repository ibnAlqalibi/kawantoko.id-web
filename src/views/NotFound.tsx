import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 w-full bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="animate-bounce text-9xl font-extrabold text-indigo-600 mb-4">404</div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-indigo-600 rounded-full animate-ping opacity-75"></div>
            </div>
            <div className="relative z-10">
              <svg className="w-24 h-24 mx-auto text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Halaman Tidak Ditemukan</h1>
        <p className="text-lg text-gray-600 mb-8">
          Ups! Halaman yang Anda cari sepertinya tidak ada atau telah dipindahkan.
        </p>
        
        <div className="space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            ← Kembali
          </button>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Ke Beranda
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
