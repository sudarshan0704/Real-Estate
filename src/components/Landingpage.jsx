import React from 'react';
import { Link } from 'react-router-dom';
import './Componet.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
