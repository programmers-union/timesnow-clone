'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { BsList, BsSearch } from 'react-icons/bs';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="border-bottom  mobile-sticky bg-white   ">
      {/* Top Row */}
      <div className="d-flex justify-content-between align-items-center py-2 px-3">
        {/* Left Icons */}
        <div className="d-flex align-items-center gap-3">
          <BsList size={20} />
          <BsSearch size={18} />
        </div>

        {/* Logo */}
        <div className="d-flex flex-column align-items-center">

          <Image
          src="/logo.png"
          width={300}
          height={35}
          alt='logo'
          className='logo mx-auto d-block'
          />
          <small className="text-uppercase text-muted d-none d-lg-block" style={{ fontSize: '11px', letterSpacing: '1px' }}>
            Breaking News, World, Politics, Opinion
          </small>
        </div>

        {/* Social Icons */}
        <div className="d-none d-lg-block align-items-center gap-3 ">
          <FaFacebookF size={16} />
          <FaTwitter size={16} />
          <FaInstagram size={16} />
          <FaPinterestP size={16} />
          <FaYoutube size={16} />
        </div>
      </div>

      {/* Nav Menu */}
      <nav className="border-top border-bottom d-none d-lg-block  desktop-sticky ">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a href="#" className="nav-link text-dark fw-bold">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Pages</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">About</a></li>
              <li><a className="dropdown-item" href="#">Contact</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Business</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Markets</a></li>
              <li><a className="dropdown-item" href="#">Finance</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Arts</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Culture</a></li>
              <li><a className="dropdown-item" href="#">Design</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">World</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Asia</a></li>
              <li><a className="dropdown-item" href="#">Europe</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Politics</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Elections</a></li>
              <li><a className="dropdown-item" href="#">Government</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" data-bs-toggle="dropdown">Opinion</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Editorial</a></li>
              <li><a className="dropdown-item" href="#">Columns</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
