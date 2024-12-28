import React from 'react';
import './Componet.css';
import logo from './DrawKit Vector Illustration Real Estate & Homeowner Illustrations (11).png';
import { Link, useNavigate } from 'react-router-dom';

export default function Navigationbar() {
  const navigate = useNavigate(); // Ensure useNavigate is called here

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <div className='nav'>
      <img src={logo} alt="Logo" />
      <h3>Live Luxury</h3>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About Us</li> </Link>
        <Link to="/contact"><li>Contact Us</li></Link>
      </ul>
    </div>
  );
}
