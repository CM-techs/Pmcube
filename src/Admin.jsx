import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Admin({ setIsAdmin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const adminlogin = (e) => {
    e.preventDefault();

    // 🔥 empty check
    if (!formData.username || !formData.password) {
      alert("Fill all fields");
      return;
    }

    axios.post("http://localhost:3000/admin/login", formData)
      .then((res) => {
        console.log(res.data);

        if (res.data.success) {
          localStorage.setItem("isAdmin", "true");
          if (setIsAdmin) setIsAdmin(true);
          navigate("/adhome");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Server error");
      });
  };

  return (
    <div className="login-container">

      <div className="login-card">
        <h2>Admin Login</h2>

        <form onSubmit={adminlogin}>

          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>
      </div>

    </div>
  );
}

export default Admin;