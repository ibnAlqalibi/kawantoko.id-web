import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="flex-1 w-full min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-xl rounded-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
