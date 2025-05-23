import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Dash/Layout";

const Profile = () => {
    const navigate = useNavigate();

    const user = {
        firstName: "Johnson",
        lastName: "Masino",
        personalEmail: "john@gmail.com",
        phone: "09036206457",
        address: "Enugu Enugu Enugu",
        city: "Enugu",
        postalCode: "400283",
        country: "Andorra",
        securityEmail: "kenrich@outlook.com",
    };

    return (
        <Layout>
            <div className="justify-center text-softGray">
                <div className="mb-16 bg-gradient-to-r from-navy via-greenGray to-navy p-8 rounded-xl shadow-md">
                    <div className="flex justify-between items-center mb-8 gap-4">
                        <h2 className="text-3xl font-heading font-bold text-softGray">User Profile</h2>
                        <button
                            onClick={() => navigate("/profile/edit")}
                            className="bg-navy text-softGray font-semibold px-4 py-2 rounded-md hover:bg-greenGray transition"
                        >
                            Edit Profile
                        </button>
                    </div>

                    {/* Personal Information */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 border-b border-softGray pb-1">Personal Information</h3>
                        <p className="mb-1"><strong>First Name:</strong> {user.firstName}</p>
                        <p className="mb-1"><strong>Last Name:</strong> {user.lastName}</p>
                        <p className="mb-1"><strong>Email:</strong> {user.personalEmail}</p>
                        <p className="mb-1"><strong>Phone:</strong> {user.phone}</p>
                    </div>

                    {/* Address Information */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2 border-b border-softGray pb-1">Address Information</h3>
                        <p className="mb-1"><strong>Address:</strong> {user.address}</p>
                        <p className="mb-1"><strong>City:</strong> {user.city}</p>
                        <p className="mb-1"><strong>Postal Code:</strong> {user.postalCode}</p>
                        <p className="mb-1"><strong>Country:</strong> {user.country}</p>
                    </div>

                    {/* Security */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2 border-b border-softGray pb-1">Security</h3>
                        <p className="mb-1"><strong>Security Email:</strong> {user.securityEmail}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;

