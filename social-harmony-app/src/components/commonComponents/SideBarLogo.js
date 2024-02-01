import '../../styles/Logo.scss';

const SideBarLogo = ({ logo, align, logoWidth }) => {
  // Use inline styles to set the alignment based on the 'align' prop
  const logoStyle = {
    textAlign: align || 'center', // Use 'center' by default if 'align' prop is not provided
  };

  return (
    <div className="SideBarLogo" style={logoStyle}>
      <img src={logo} className={`Logo-image-${logoWidth}`} alt="logo" />
    </div>
  );
};

export default SideBarLogo;
