import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  BestSellingPage,
  CheckoutPage,
  EventsPage,
  FAQPage,
  LoginPage,
  OrderDetailsPage,
  OrderSuccessPage,
  PaymentPage,
  ProductDetailsPage,
  ProductsPage,
  ProfilePage,
  SellerActivationPage,
  ShopCreatePage,
  ShopLoginPage,
  SignupPage,
  TrackOrderPage,
  UserInbox,
} from "./routes";
import { Provider } from "react-redux";
import Store from "./redux/store";
import axios from "axios";
import App from "./App";
import { ShopAllCoupouns, ShopAllEvents, ShopAllOrders, ShopAllProducts, ShopAllRefunds, ShopCreateEvents, ShopCreateProduct, ShopDashboardPage, ShopInboxPage, ShopOrderDetails, ShopPreviewPage, ShopSettingsPage, ShopWithDrawMoneyPage } from "./routes/ShopRoutes";
import ProtectedRoute from "./routes/ProtectedRoute";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import { ShopHomePage } from "./ShopRoutes";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import AdminDashboardEvents from "./pages/AdminDashboardEvents";
import AdminDashboardOrders from "./pages/AdminDashboardOrders";
import AdminDashboardProducts from "./pages/AdminDashboardProducts";
import AdminDashboardSellers from "./pages/AdminDashboardSellers";
import AdminDashboardUsers from "./pages/AdminDashboardUsers";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <SignupPage />,
      },
      {
        path: "/seller/activation/:activation_token",
        element: <SellerActivationPage />,
      },
      { path: "/products", element: <ProductsPage /> },
      { path: "/product/:id", element: <ProductDetailsPage /> },
      { path: "/best-selling", element: <BestSellingPage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "/faq", element: <FAQPage /> },

      {
        /* shop Routes */
      },
      { path: "/shop-create", element: <ShopCreatePage /> },
      { path: "/shop-login", element: <ShopLoginPage /> },
    
  

  {
    path: "",
    element: <ProtectedRoute />,
    children: [
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/order/success", element: <OrderSuccessPage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/inbox", element: <UserInbox /> },
      { path: "/user/order/:id", element: <OrderDetailsPage /> },
      { path: "/user/track/order/:id", element: <TrackOrderPage /> },
      { path: "/shop/preview/:id", element: <ShopPreviewPage /> },
      { path: "/payment", element: <PaymentPage /> },
    ],
  },

  {
    path: "",
    element: <SellerProtectedRoute />,
    children: [
      { path: "/shop/:id", element: <ShopHomePage /> },
      { path: "/settings", element: <ShopSettingsPage /> },
      { path: "/dashboard", element: <ShopDashboardPage /> },
      { path: "/dashboard-create-product", element: <ShopCreateProduct /> },
      { path: "/dashboard-orders", element: <ShopAllOrders /> },
      { path: "/dashboard-refunds", element: <ShopAllRefunds /> },
      { path: "/order/:id", element: <ShopOrderDetails /> },
      { path: "/dashboard-products", element: <ShopAllProducts /> },
      { path: "/dashboard-create-event", element: <ShopCreateEvents /> },
      { path: "/dashboard-events", element: <ShopAllEvents /> },
      { path: "/dashboard-coupouns", element: <ShopAllCoupouns /> },
      {
        path: "/dashboard-withdraw-money",
        element: <ShopWithDrawMoneyPage />
        ,
      },
      { path: "/dashboard-messages", element: <ShopInboxPage /> },
    ],
  },
  {
    /* Admin Routes */
  },
  {
    path: "",
    element: <ProtectedAdminRoute />,
    children: [
      { path: "/admin/dashboard", element: <AdminDashboardPage /> },
      { path: "/admin-users", element: <AdminDashboardUsers /> },
      { path: "/admin-sellers", element: <AdminDashboardSellers /> },
      { path: "/admin-orders", element: <AdminDashboardOrders /> },
      { path: "/admin-products", element: <AdminDashboardProducts /> },
      { path: "/admin-events", element: <AdminDashboardEvents /> },
     {/*
     {
        path: "/admin-withdraw-request",
        element: <AdminDashboardWithdraw />, }
    */  },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
