import { routers } from "@/routes/router";
import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import * as PhosphorIcons from "@phosphor-icons/react";

interface MenuItem {
  path: string;
  label: string;
  icon: string;
}

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, [location]);

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        window.innerWidth < 1024 &&
        isSidebarOpen &&
        !(event.target as Element).closest("[data-sidebar]")
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const menuItems: MenuItem[] =
    (routers.find((router) => router.path === "/app")
      ?.children as MenuItem[]) || [];

  const renderIcon = (iconName: string, isActive: boolean = false) => {
    const Icon = (PhosphorIcons as any)[iconName];
    return Icon ? (
      <Icon
        size={24}
        weight={isActive ? "fill" : "regular"}
        className={isActive ? "text-green-600" : "text-gray-500"}
      />
    ) : null;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        data-sidebar
        className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 w-[280px]`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <span className="text-xl font-semibold text-gray-800">
              KawanToko.ID
            </span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
            >
              <PhosphorIcons.X
                size={24}
                className="text-gray-600"
                weight="bold"
              />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path === "" ? "/app" : `/app/${item.path}`}
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-green-50 text-green-700 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="mr-3">
                      {renderIcon(item.icon, isActive)}
                    </span>
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* User Profile */}
          <div className="border-t p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold">
                UT
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">User Toko</p>
                <p className="text-xs text-gray-500">user@kawantoko.id</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-[280px]" : ""
        }`}
      >
        {/* Top Bar */}
        <header className="bg-white border-b shadow-sm sticky top-0 z-20">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 -ml-2"
              >
                <PhosphorIcons.List
                  size={24}
                  className="text-gray-600"
                  weight="bold"
                />
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <PhosphorIcons.Bell
                  size={24}
                  className="text-gray-600"
                  weight="bold"
                />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-x-hidden bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
