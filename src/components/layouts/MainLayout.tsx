import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <React.Fragment>
      <div className="app-container">
        <header className="app-header">
          {/* Add your header content here */}
        </header>

        <main className="app-main">
          <Outlet />
        </main>

        <footer className="app-footer">
          {/* Add your footer content here */}
        </footer>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
