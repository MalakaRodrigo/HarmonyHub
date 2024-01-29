// src/components/Logo.js
import React from 'react';
import '../../styles/Logo.scss';

const Logo = ({ logo, align, logoWidth }) => {
  // Use inline styles to set the alignment based on the 'align' prop
  const logoStyle = {
    textAlign: align || 'center', // Use 'center' by default if 'align' prop is not provided
  };

  return (
    <div className="Logo" style={logoStyle}>
      <img src={logo} className={`Logo-image-${logoWidth}`} alt="logo" />
    </div>
  );
};

export default Logo;
