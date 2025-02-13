import { createBrowserRouter } from "react-router";

// Layouts
import AuthLayout from "@/layouts/AuthLayout";
import AppLayout from "@/layouts/AppLayout";

// Landing Pages
import Home from "@/views/Home";

// Auth Pages
import Login from "@/views/Login";
import OTPVerification from "@/views/OTPVerification";

// App Pages
import Dashboard from "@/views/app/Dashboard";
import Products from "@/views/app/Products";
import Transactions from "@/views/app/Transactions";
import ProductValidation from "@/views/app/ProductValidation";
import ProductCategories from "@/views/app/ProductCategories";
import Merchants from "@/views/app/Merchants";
import Reports from "@/views/app/Reports";
import Indications from "@/views/app/Indications";

// Errors Page
import NotFound from "@/views/NotFound";

export const routers = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "verify-otp",
        element: <OTPVerification />,
      },
    ],
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      // Common for all roles
      {
        path: "",
        label: "Dashboard",
        icon: "ChartLineUp",
        element: <Dashboard />,
      },

      // Admin only
      {
        path: "product-categories",
        label: "Kategori Produk",
        icon: "Folders",
        element: <ProductCategories />,
        role: "admin",
      },
      {
        path: "product-validation",
        label: "Validasi Produk",
        icon: "CheckCircle",
        element: <ProductValidation />,
        role: "admin",
      },
      {
        path: "merchants",
        label: "Toko",
        icon: "Storefront",
        element: <Merchants />,
        role: "admin",
      },

      // Merchant only
      {
        path: "products",
        label: "Produk",
        icon: "Package",
        element: <Products />,
        role: "merchant",
      },

      // Customer Service only
      {
        path: "indications",
        label: "Indikasi",
        icon: "Warning",
        element: <Indications />,
        role: "cs",
      },

      // Common for all roles
      {
        path: "transactions",
        label: "Transaksi",
        icon: "CurrencyDollar",
        element: <Transactions />,
      },
      {
        path: "reports",
        label: "Laporan",
        icon: "ChartBar",
        element: <Reports />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routers);
