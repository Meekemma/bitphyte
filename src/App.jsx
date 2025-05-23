import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Faq from "./pages/Faq";
import Signup from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Logout from "./pages/Auth/Logout";

// Dashboard Imports(Logged In User)
import DashHome from "./pages/Dashboard/Home";
import Deposit from "./pages/Dashboard/Deposit";
import Withdraw from "./pages/Dashboard/Withdraw";
import Overview from "./pages/Dashboard/Overview";
import Refferals from "./pages/Dashboard/Referrals";
import Transactions from "./pages/Dashboard/Transactions";

import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/Edit";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/logout" element={<Logout />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard/home" element={<DashHome />} />
        <Route path="/dashboard/invest" element={<Deposit />} />
        <Route path="/dashboard/withdraw" element={<Withdraw />} />
        <Route path="/dashboard/overview" element={<Overview />} />
        <Route path="/dashboard/referrals" element={<Refferals />} />
        <Route path="/dashboard/transactions" element={<Transactions />} />

        {/* Profile */}
        <Route path="/profile/me" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
