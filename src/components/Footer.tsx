// Footer.tsx
import React from 'react';
//import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Task Management System</p>
    </footer>
  );
};

export default Footer;
