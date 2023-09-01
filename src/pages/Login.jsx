import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    email: '',
    password: '',
    otp: '',
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
    alert('OTP Submitted');
  };

  return (
    <div>
      <form onSubmit={handlePasswordSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send OTP</button>
      </form>

      {showOtpSection && (
        <form onSubmit={handleOtpSubmit}>
          <div>
            <label>Enter OTP:</label>
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit OTP</button>
        </form>
      )}
    </div>
  );
};

export default Login;
