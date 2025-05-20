import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faPhone, faMapMarkerAlt, faGlobe, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    zipCode: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        const countryNames = data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.userName.trim()) newErrors.userName = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.address.trim()) newErrors.address = "Home address is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip/Postal Code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setLoading(true);

    try {
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setSuccessPopup(true);
        setTimeout(() => {
          setSuccessPopup(false);
          navigate("/login");
        }, 3000);
      }, 1000);
    } catch (err) {
      console.error("Signup error:", err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark text-softGray px-4 relative">
      {successPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-4 rounded-md shadow-md text-center w-[90%] max-w-lg">
          Account created successfully!
          <p className="mt-1 flex items-center justify-center gap-2">
            Redirecting to login page...
            <span className="animate-spin border-2 border-t-2 border-white rounded-full w-4 h-4 inline-block"></span>
          </p>
        </div>
      )}

      <div className="w-full mt-16 mb-16 max-w-3xl bg-gray-900 p-8 rounded-xl shadow-md">
        <h2 className="text-4xl font-heading text-indigo font-bold mb-8 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <h3 className="text-xl font-semibold mb-4 text-indigo">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <FontAwesomeIcon icon={faUser} className="text-indigo mb-2 text-xl" />
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <FontAwesomeIcon icon={faUser} className="text-indigo mb-2 text-xl" />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>

            <div>
              <FontAwesomeIcon icon={faUser} className="text-indigo mb-2 text-xl" />
              <input
                name="userName"
                type="text"
                placeholder="Username"
                value={formData.userName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
              />
              {errors.userName && <p className="text-red-500 text-xs mt-1">{errors.userName}</p>}
            </div>

            <div>
              <FontAwesomeIcon icon={faPhone} className="text-indigo mb-2 text-xl" />
              <input
                name="phone"
                type="text"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
              />
            </div>
          </div>

          {/* Address Information */}
          <h3 className="text-xl font-semibold mb-4 mt-16 text-indigo">Address Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo mb-2 text-xl" />
              <input
                name="address"
                type="text"
                placeholder="Home Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
              />
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>

            <div>
              <FontAwesomeIcon icon={faLocationArrow} className="text-indigo mb-2 text-xl" />
              <input
                name="state"
                type="text"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
              />
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>

            <div>
              <FontAwesomeIcon icon={faLocationArrow} className="text-indigo mb-2 text-xl" />
              <input
                name="zipCode"
                type="text"
                placeholder="Zip / Postal Code"
                value={formData.zipCode}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
              />
              {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
            </div>

            <div>
              <FontAwesomeIcon icon={faGlobe} className="text-indigo mb-2 text-xl" />
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
              >
                <option value="">Select Country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
            </div>
          </div>

          {/* Security */}
          <h3 className="text-xl font-semibold mt-16 mb-4 text-indigo">Security</h3>
          <div className="mb-6">
            <FontAwesomeIcon icon={faEnvelope} className="text-indigo mb-2 text-xl" />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <FontAwesomeIcon icon={faLock} className="text-indigo mb-2 text-xl" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="mb-6">
            <FontAwesomeIcon icon={faLock} className="text-indigo mb-2 text-xl" />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-md placeholder-gray-400"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-dark transition duration-300"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <span
            className="text-indigo underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </p>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/")}
            className="text-indigo underline text-sm"
          >
            ← Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;