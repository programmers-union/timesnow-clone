"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { BsList, BsSearch } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="border-bottom  mobile-sticky bg-white with100  ">
      {/* Top Row */}
      <div className="d-flex justify-content-between align-items-center py-2 px-3">
        {/* Left Icons */}
        <div className="d-flex align-items-center gap-3`">
          <BsList size={20} />
          <BsSearch size={18} />
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
            <a href="/" className="nav-link text-dark ">
              Home
            </a>
          </li>
          <li className="nav-item">
            <Link href="/business" className="nav-link text-dark ">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/politics" className="nav-link text-dark ">
              Politics
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/technology" className="nav-link text-dark ">
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/science" className="nav-link text-dark ">
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/health" className="nav-link text-dark ">
              Health
            </Link>
          </li>
                    <li className="nav-item">
            <Link href="/sports" className="nav-link text-dark ">
              Sports  
            </Link>
            </li>
                      <li className="nav-item">
            <Link href="/entertainment" className="nav-link text-dark ">
              Entertainment
            </Link>
          </li>
                    <li className="nav-item">
            <Link href="/lifestyle" className="nav-link text-dark ">
              Lifestyle
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
