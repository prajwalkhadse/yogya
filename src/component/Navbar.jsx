import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Navbar.css";

export default function Navbar({ user, logout }) {
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <section className='nav-bar'>
        <Link to="/" className='home-link'>
          <div className='brand-name'>Tuner</div>
        </Link>
        <div className='search-bar'>
          <form method='post' action='#'>
            <input
              type='text'
              placeholder='Search'
            />
          </form>
        </div>
        {user ? (
          <div className='user'>
            <span className='login'>My Videos</span>
            <span>|</span>
            <span className='login'>Upload</span>
            <span>|</span>
            <span className='login' onClick={handleLogout}>Sign Out</span>
          </div>
        ) : (
          <div className='sign'>
            <Link to="/signin" className='login'>Login</Link>
            <span>|</span>
            <Link to="/register" className='login'>Register</Link>
          </div>
        )}
      </section>
    </>
  );
}
