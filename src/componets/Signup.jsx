import axios from 'axios';
import React, { useState } from 'react';
import './stylings/Signup.css'; // Make sure this contains both the loader and hero CSS

const Loader = () => {
  return (
    <div className="section-center">
      <div className="section-path">
        <div className="globe">
          <div className="wrapper">
            {[...Array(16)].map((_, i) => (
              <span key={i}></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    const data = new FormData();
    data.append('username', username);
    data.append('email', email);
    data.append('phone', phone);
    data.append('password', password);

    try {
      const response = await axios.post('https://aarondev.pythonanywhere.com/api/signup', data);
      setLoading(false);
      setSuccess(response.data.message);

      setUsername('');
      setEmail('');
      setPhone('');
      setPassword('');
    } catch (error) {
      setLoading(false);
      setError('Sorry, registration was not successful. An error occurred...');
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Create Your Account</h1>
          <p className="lead">Join us and start your journey today. Signing up is quick and easy!</p>
        </div>
      </section>

      {/* SIGNUP FORM SECTION */}
      <div className="row justify-content-center mt-4">
        {loading && <Loader />}
        <div className="col-md-6 card shadow p-4">
          <h2 className="text-center">Signup Form</h2>
          <hr />

          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={submit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter the username here"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />

            <input
              type="email"
              className="form-control"
              placeholder="Enter email address here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />

            <input
              type="number"
              className="form-control"
              placeholder="Enter your phone number here"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <br />

            <input
              type="password"
              className="form-control"
              placeholder="Enter your password here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />

            <button type="submit" className="cta w-100">
  <span className="span">Submit</span>
  <span className="second">
    <svg
      width="50px"
      height="20px"
      viewBox="0 0 66 43"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none">
        <path
          className="one"
          d="M40.1543933,3.89485454 ..."
          fill="#FFFFFF"
        ></path>
        <path
          className="two"
          d="M20.1543933,3.89485454 ..."
          fill="#FFFFFF"
        ></path>
        <path
          className="three"
          d="M0.154393339,3.89485454 ..."
          fill="#FFFFFF"
        ></path>
      </g>
    </svg>
  </span>
</button>

          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
