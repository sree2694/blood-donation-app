import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Emergency from "./pages/Emergency";
import DonorDashboard from "./components/dashboard/DonorDashboard";
import RecipientDashboard from "./components/dashboard/RecipientDashboard";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import BloodRequestForm from "./components/blood/BloodRequestForm";
import BloodBankLocator from "./components/blood/BloodBankLocator";
import DonationHistory from "./components/blood/DonationHistory";
import ChatBox from "./components/chat/ChatBox";
import Profile from "./pages/Profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Logout from "./components/auth/Logout";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

   {/* Protected Routes */}
   <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/admin-dashboard" element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route index element={<AdminDashboard />} />
        </Route>
        <Route path="/donor-dashboard" element={<ProtectedRoute allowedRoles={["donor"]} />}>
          <Route index element={<DonorDashboard />} />
        </Route>
        <Route path="/recipient-dashboard" element={<ProtectedRoute allowedRoles={["recipient"]} />}>
          <Route index element={<RecipientDashboard />} />
        </Route>
        <Route path="/blood-request" element={<BloodRequestForm />} />
        <Route path="/blood-locator" element={<BloodBankLocator />} />
        <Route path="/donation-history" element={<DonationHistory />} />
        <Route path="/chat" element={<ChatBox />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
