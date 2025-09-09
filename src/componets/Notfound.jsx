import React from 'react'
import { Link } from 'react-router-dom'
import "./stylings/notfound.css"

const Notfound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="error-code display-1 fw-bold">404</h1>
        <p className="lead">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary mt-3">Go Back Home</Link>
      </div>
    </div>
  );
}

export default Notfound