import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
} from "./routes";
import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
  ShopInboxPage,
} from "./routes/ShopRoutes";
import {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw,
} from "./routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import { ShopHomePage } from "./ShopRoutes";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";

import "./index.css";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./redux/store";
import App from "./App";

const router = createBrowserRouter([
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
      <Route
        path="/activation/:activation_token"
        element={<ActivationPage />}
      />
      <Route
        path="/seller/activation/:activation_token"
        element={<SellerActivationPage />}
      />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/best-selling" element={<BestSellingPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Route>

    <Route path="" element={<ProtectedRoute />}>
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/order/success" element={<OrderSuccessPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/inbox" element={<UserInbox />} />
      <Route path="/user/order/:id" element={<OrderDetailsPage />} />
      <Route path="/user/track/order/:id" element={<TrackOrderPage />} />
      <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Route>

    {/* shop Routes */}

    <Route path="/shop-create" element={<ShopCreatePage />} />
    <Route path="/shop-login" element={<ShopLoginPage />} />
    <Route path="" element={<SellerProtectedRoute />}>
      <Route path="/shop/:id" element={<ShopHomePage />} />
      <Route path="/settings" element={<ShopSettingsPage />} />
      <Route path="/dashboard" element={<ShopDashboardPage />} />
      <Route path="/dashboard-create-product" element={<ShopCreateProduct />} />
      <Route path="/dashboard-orders" element={<ShopAllOrders />} />
      <Route path="/dashboard-refunds" element={<ShopAllRefunds />} />

      <Route path="/order/:id" element={<ShopOrderDetails />} />
      <Route path="/dashboard-products" element={<ShopAllProducts />} />
      <Route path="/dashboard-create-event" element={<ShopCreateEvents />} />
      <Route path="/dashboard-events" element={<ShopAllEvents />} />
      <Route path="/dashboard-coupouns" element={<ShopAllCoupouns />} />
      <Route
        path="/dashboard-withdraw-money"
        element={<ShopWithDrawMoneyPage />}
      />
      <Route path="/dashboard-messages" element={<ShopInboxPage />} />
    </Route>

    {/* Admin Routes */}
    <Route path="" element={<ProtectedAdminRoute />}>
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="/admin-users" element={<AdminDashboardUsers />} />
      <Route path="/admin-sellers" element={<AdminDashboardSellers />} />
      <Route path="/admin-orders" element={<AdminDashboardOrders />} />
      <Route path="/admin-products" element={<AdminDashboardProducts />} />
      <Route path="/admin-events" element={<AdminDashboardEvents />} />
      <Route
        path="/admin-withdraw-request"
        element={<AdminDashboardWithdraw />}
      />
    </Route>
  </Routes>,
]);
createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <Provider store={Store}>
        <ToastContainer />
        <App />
      </Provider>
    </React.StrictMode>
  </>
);
