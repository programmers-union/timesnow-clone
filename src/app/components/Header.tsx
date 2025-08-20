"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

   const categories = [
  
  { name: "Business", slug: "/business" },
  { name: "Politics", slug: "/politics" },
  { name: "Technology", slug: "/technology" },
  { name: "Science", slug: "/science" },
  { name: "Sports", slug: "/sports" },
  { name: "Health", slug: "/health" },
  { name: "Entertainment", slug: "/entertainment" },
  { name: "Lifestyle", slug: "/lifestyle" }
];
const handleSearch = () => {
  if (!searchQuery.trim()) return;

  const match = categories.find(
    (cat) => cat.name.toLowerCase() === searchQuery.toLowerCase()
  );

  if (match) {
    router.push(match.slug.toLowerCase());
    // fallback if router fails in production
    setTimeout(() => {
      if (window.location.pathname !== match.slug.toLowerCase()) {
        window.location.href = match.slug.toLowerCase();
      }
    }, 100);
  } else {
    window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
  }

  setIsSearchOpen(false);
  setSearchQuery("");
};


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

 

  return (
    <>
      <header className="border-bottom mobile-sticky bg-white with100 ">
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
            <BsSearch 
            size={18}
             style={{ cursor: 'pointer' }}
             onClick={toggleSearch}
             />
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

        {/* Search Overlay */}
      {isSearchOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex flex-column" 
          style={{ zIndex: 1060 }}
        >
          {/* Search Header */}
          <div className="d-flex justify-content-end align-items-center p-3 p-md-4">
            <BsX 
              size={32} 
              style={{ cursor: 'pointer' }}
              onClick={closeSearch}
              className="text-dark"
            />
          </div>

          {/* Search Content */}
          <div className="flex-grow-1 d-flex flex-column justify-content-start align-items-center px-3 px-md-5">
            {/* Search Input */}
            <div className="w-100" style={{ maxWidth: '600px' }}>
              <div className="position-relative">
                <input
  type="text"
  className="form-control border-0 border-bottom rounded-0 py-3 px-0"
  placeholder="Search For The Categories"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }}
  style={{ 
    fontSize: "1.25rem",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottomWidth: "2px",
    borderBottomColor: "#dee2e6"
  }}
  autoFocus
/>

                <BsSearch 
                  size={20} 
                  className="position-absolute top-50 end-0 translate-middle-y text-muted"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Suggestions */}
            <div className="w-100 mt-4 mt-md-5" style={{ maxWidth: '600px' }}>
              <h6 className="text-muted mb-3" style={{ fontSize: '0.9rem', fontWeight: '400' }}>
                Suggestions
              </h6>
              
              <div className="d-flex flex-wrap gap-3 gap-md-4">
                <Link 
                  href="/business" 
                  className="text-decoration-none text-dark"
                  onClick={closeSearch}
                  style={{ fontSize: '1.1rem', fontWeight: '400' }}
                >
                  Business
                </Link>
                <span className="text-muted">·</span>
                <Link 
                  href="/politics" 
                  className="text-decoration-none text-dark"
                  onClick={closeSearch}
                  style={{ fontSize: '1.1rem', fontWeight: '400' }}
                >
                  Politics
                </Link>
                <span className="text-muted">·</span>
                <Link 
                  href="/entertainment" 
                  className="text-decoration-none text-dark"
                  onClick={closeSearch}
                  style={{ fontSize: '1.1rem', fontWeight: '400' }}
                >
                  Entertainment
                </Link>
                <span className="text-muted">·</span>
                <Link 
                  href="/sports" 
                  className="text-decoration-none text-dark"
                  onClick={closeSearch}
                  style={{ fontSize: '1.1rem', fontWeight: '400' }}
                >
                  Sports
                </Link>
                <span className="text-muted">·</span>
                <Link 
                  href="/lifestyle" 
                  className="text-decoration-none text-dark"
                  onClick={closeSearch}
                  style={{ fontSize: '1.1rem', fontWeight: '400' }}
                >
                  Lifestyle
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

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
           .form-control:focus {
          border-color: #6c757d !important;
          box-shadow: none !important;
        }
      `}</style>
    </>
  );
};

export default Header;