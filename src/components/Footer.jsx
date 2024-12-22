import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3 mt-3">
      <div className="container mx-auto text-center space-y-1">
        {/* Footer Links */}
        <div className="flex justify-center space-x-6">
          <NavLink
            to="/privacy-policy"
            className="hover:underline"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/terms-of-service"
            className="hover:underline"
          >
            Terms of Service
          </NavLink>
          <NavLink
            to="/help"
            className="hover:underline"
          >
            Help
          </NavLink>
        </div>

        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Book Buddy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
