"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { BsList, BsSearch, BsX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="border-bottom mobile-sticky bg-white with100 position-relative">
        {/* Top Row */}
        <div className="d-flex justify-content-between align-items-center py-2 px-3">
          {/* Left Icons */}
          <div className="d-flex align-items-center gap-3">
            <BsList 
              size={20} 
              className="cursor-pointer" 
              onClick={toggleMenu}
              style={{ cursor: 'pointer' }}
            />
            <BsSearch size={18} style={{ cursor: 'pointer' }} />
          </div>

          {/* Logo */}
          <div className="d-flex flex-column align-items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                width={300}
                height={35}
                alt="logo"
                className="logo mx-auto d-block"
              />
            </Link>
            <small
              className="text-uppercase text-muted d-none d-lg-block"
              style={{ fontSize: "11px", letterSpacing: "1px" }}
            >
              Breaking News, World, Politics, Opinion
            </small>
          </div>

          {/* Social Icons */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <FaFacebookF size={16} style={{ cursor: 'pointer' }} />
            <FaTwitter size={16} style={{ cursor: 'pointer' }} />
            <FaInstagram size={16} style={{ cursor: 'pointer' }} />
            <FaPinterestP size={16} style={{ cursor: 'pointer' }} />
            <FaYoutube size={16} style={{ cursor: 'pointer' }} />
          </div>
        </div>

        {/* Desktop Nav Menu */}
        <nav className="border-top border-bottom d-none d-lg-block desktop-sticky">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link href="/" className="nav-link text-dark">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/business" className="nav-link text-dark">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/politics" className="nav-link text-dark">
                Politics
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/technology" className="nav-link text-dark">
                Technology
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/science" className="nav-link text-dark">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/health" className="nav-link text-dark">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sports" className="nav-link text-dark">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/entertainment" className="nav-link text-dark">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/lifestyle" className="nav-link text-dark">
                Lifestyle
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" 
          style={{ zIndex: 1040 }}
          onClick={closeMenu}
        />
      )}

      {/* Slide-out Menu */}
      <div 
        className={`position-fixed top-0 start-0 h-100 bg-white shadow-lg transition-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-n100'
        }`}
        style={{ 
          width: '280px', 
          zIndex: 1050,
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        {/* Menu Header */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <h5 className="mb-0 fw-bold">Menu</h5>
          <BsX 
            size={24} 
            style={{ cursor: 'pointer' }}
            onClick={closeMenu}
          />
        </div>

        {/* Menu Items */}
        <nav className="p-0">
          <ul className="nav flex-column">
            <li className="nav-item border-bottom">
              <Link 
                href="/" 
                className="nav-link text-dark py-3 px-3 d-flex align-items-center"
                onClick={closeMenu}
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item border-bottom">
              <Link 
                href="/business" 
                className="nav-link text-dark py-3 px-3 d-flex align-items-center"
                onClick={closeMenu}
              >
                <span>Business</span>
              </Link>
            </li>
            <li className="nav-item border-bottom">
              <Link 
                href="/politics" 
                className="nav-link text-dark py-3 px-3 d-flex align-items-center"
                onClick={closeMenu}
              >
                <span>Politics</span>
              </Link>
            </li>
            <li className="nav-item border-bottom">
              <Link 
                href="/technology" 
                className="nav-link text-dark py-3 px-3 d-flex align-items-center"
                onClick={closeMenu}
              >
                <span>Technology</span>
              </Link>
            </li>
            <li className="nav-item border-bottom">
              <Link 
                href="/science" 
                className="nav-link text-dark py-3 px-3 d-flex align-items-center"
                onClick={closeMenu}
              >
                <span>Science</span>
              </Link>
            </li>
            <li className="nav-item border-bottom">
              <Link 
                href="/health" 
                className="nav-link text-dark py-3 px-3 d-flex align-items-center"
                onClick={closeMenu}
              >
                <span>Health</span>
              </Link>
            </li>
            <li className="nav-item border-bottom">
              <Link 
                href="/sports" 
                className="nav-link text-dark py-3 px-3 d-flex align-items-center"
                onClick={closeMenu}
              >
                <span>Sports</span>
              </Link>
            </li>
            <li className="nav-item border-bottom">
              <Link 
                href="/entertainment" 
                className="nav-link text-dark py-3 px-3 d-flex align-items-center"
                onClick={closeMenu}
              >
                <span>Entertainment</span>
              </Link>
            </li>
            <li className="nav-item border-bottom">
              <Link 
                href="/lifestyle" 
                className="nav-link text-dark py-3 px-3 d-flex align-items-center"
                onClick={closeMenu}
              >
                <span>Lifestyle</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Icons in Mobile Menu */}
        <div className="p-3 border-top mt-auto">
          <h6 className="text-muted mb-3">Follow Us</h6>
          <div className="d-flex gap-3">
            <FaFacebookF size={18} style={{ cursor: 'pointer' }} />
            <FaTwitter size={18} style={{ cursor: 'pointer' }} />
            <FaInstagram size={18} style={{ cursor: 'pointer' }} />
            <FaPinterestP size={18} style={{ cursor: 'pointer' }} />
            <FaYoutube size={18} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .translate-x-0 {
          transform: translateX(0) !important;
        }
        .translate-x-n100 {
          transform: translateX(-100%) !important;
        }
        .transition-transform {
          transition: transform 0.3s ease-in-out !important;
        }
        .nav-link:hover {
          background-color: #f8f9fa !important;
        }
      `}</style>
    </>
  );
};

export default Header;