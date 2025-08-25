"use client";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-light py-4 ">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left section */}
          <Col md={4} className="mb-3 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-2">
              <a href="#" className="text-light"><FaFacebookF /></a>
              <a href="#" className="text-light"><FaTwitter /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
              <a href="#" className="text-light"><FaPinterestP /></a>
              <a href="#" className="text-light"><FaYoutube /></a>
            </div>
            <p className="mb-0 small">
              © 2020 - All Rights Reserved.
            </p>
          </Col>

          {/* Middle section */}
          <Col md={4} className="mb-3 mb-md-0 border-start border-end">
            <ul className="list-unstyled mb-0 text-center">
              <li><Link href="#" className="text-light text-decoration-none">About</Link></li>
              <li><Link href="#" className="text-light text-decoration-none">Privacy</Link></li>
              <li><Link href="#" className="text-light text-decoration-none">Terms</Link></li>
              <li><Link href="#" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </Col>

          {/* Right section */}
          <Col md={4}>
            <ul className="list-unstyled mb-0 text-center text-md-start">
              <li><Link href="#" className="text-light text-decoration-none">Business</Link></li>
              <li><Link href="#" className="text-light text-decoration-none">Politics</Link></li>
              <li><Link href="#" className="text-light text-decoration-none">Technology</Link></li>
              <li><Link href="#" className="text-light text-decoration-none">Science</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
