import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Dash/Layout";

const EditProfile = () => {
  const navigate = useNavigate();
  const [successPopup, setSuccessPopup] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "Johnson",
    lastName: "Masino",
    personalEmail: "john@gmail.com",
    phone: "09036206457",
    address: "Enugu Enugu Enugu",
    city: "Enugu",
    postalCode: "400283",
    country: "Andorra",
    securityEmail: "kenrich@outlook.com",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic (e.g., API call) would go here
    console.log("Updated profile:", formData);

    // Show success popup
    setSuccessPopup(true);

    // Redirect after 2.5 seconds
    setTimeout(() => {
      setSuccessPopup(false);
      navigate("/profile/me");
    }, 2500);
  };

  return (
    <Layout>
      {successPopup && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-4 rounded-md shadow-md text-center w-[90%] max-w-lg">
          Profile updated successfully!
          <p className="mt-1 flex items-center justify-center gap-2">
            Redirecting to your profile...
            <span className="animate-spin border-2 border-t-2 border-white rounded-full w-4 h-4 inline-block"></span>
          </p>
        </div>
      )}

      <div className="justify-center text-softGray">
        <div className="mb-16 bg-gradient-to-r from-navy via-greenGray to-navy p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">Edit Profile</h2>

          <form onSubmit={handleSubmit}>
            {/* Personal Info */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-lightGray text-dark rounded-md placeholder-mediumGray"
                />
              </div>
              <div>
                <label className="block mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-lightGray text-dark rounded-md placeholder-mediumGray"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="personalEmail"
                  value={formData.personalEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-lightGray text-dark rounded-md placeholder-mediumGray"
                />
              </div>
              <div>
                <label className="block mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-lightGray text-dark rounded-md placeholder-mediumGray"
                />
              </div>
            </div>

            {/* Address Info */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-lightGray text-dark rounded-md placeholder-mediumGray"
                />
              </div>
              <div>
                <label className="block mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-lightGray text-dark rounded-md placeholder-mediumGray"
                />
              </div>
              <div>
                <label className="block mb-1">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-lightGray text-dark rounded-md placeholder-mediumGray"
                />
              </div>
              <div>
                <label className="block mb-1">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-lightGray text-dark rounded-md placeholder-mediumGray"
                />
              </div>
            </div>

            {/* Security Email */}
            <div className="mb-6">
              <label className="block mb-1">Security Email</label>
              <input
                type="email"
                name="securityEmail"
                value={formData.securityEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-lightGray text-dark rounded-md placeholder-mediumGray"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-navy text-softGray font-semibold py-3 rounded-md hover:bg-greenGray transition duration-300"
            >
              Save Changes
            </button>
          </form>

          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/reset-password")}
              className="text-softGray underline text-sm hover:text-indigo-300 transition"
            >
              Change Password?
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;

