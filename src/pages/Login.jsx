import React, { useState } from "react";
import { Link } from "react-router-dom";
import Mpin from "./Mpin";

const OtpForm = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    email: "",
    password: "",
    otp: "",
  });

  const [showOtpSection, setShowOtpSection] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setShowOtpSection(true);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    alert("OTP Submitted");
  };

  return (
    <div>
      <h1 className="text-red-700 text-3xl mt-10 text-center">LOGIN</h1>
      <div className="container mt-10 mx-auto p-4 w-96 bg-slate-300 shadow-lg rounded-lg">
        <form onSubmit={handlePasswordSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-gray-600">User ID:</label>
            <input
              type="text"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Send OTP
          </button>
        </form>

        {showOtpSection && (
          <form onSubmit={handleOtpSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600">Enter OTP:</label>
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
              />
            </div>
            {formData.otp && (
              <Link to="/mpin">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                  Submit OTP
                </button>
              </Link>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default OtpForm;
