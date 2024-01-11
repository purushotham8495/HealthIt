// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const headerStyle = {
  padding: '2rem 9%',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: '0 .5rem 1.5rem rgba(0, 0, 0, .1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#fff',
};

const logoStyle = {
  fontSize: '2.5rem',
  color: 'var(--black)',
};

const iconStyle = {
  color: 'var(--green)',
};

const navbarLinkStyle = {
  fontSize: '1.7rem',
  color: 'var(--light-color)',
  marginLeft: '2rem',
};

const navbarLinkHoverStyle = {
  color: 'var(--green)',
};

const menuBtnStyle = {
  fontSize: '2.5rem',
  borderRadius: '.5rem',
  background: '#eee',
  color: 'var(--green)',
  padding: '1rem 1.5rem',
  cursor: 'pointer',
  display: 'none',
};

function Navbar() {
  return (
    <div style={headerStyle}>
      <Link to="/" style={logoStyle}><i style={iconStyle} className="fas fa-heartbeat"></i>Healthrek</Link>
      <nav className="navbar">
        <Link to="/" style={navbarLinkStyle}>Home</Link>
        <Link to="/files" style={navbarLinkStyle}>Files</Link>
        <Link to="/about" style={navbarLinkStyle}>About</Link>
        <Link to="/doctors" style={navbarLinkStyle}>Doctors</Link>
        <Link to="/apps" style={navbarLinkStyle}>Medicines</Link>
        <Link to="/review" style={navbarLinkStyle}>Review</Link>
        <Link to="/blogs" style={navbarLinkStyle}>Blogs</Link>
        <Link to="/logout" style={navbarLinkStyle}>Log Out</Link>
      </nav>
      <div id="menu-btn" className="fas fa-bars" style={menuBtnStyle}></div>
    </div>
  );
}

export default Navbar;


