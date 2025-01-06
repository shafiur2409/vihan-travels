import React from "react";

const Footer = () => {
  return (
    <div className="footer" style={{ textAlign: "center", padding: "20px", backgroundColor: "#ffebcd" }}>
      <p className="contact-text">Email: <a href="mailto:vihanatravels14@gmail.com">vihanatravels14@gmail.com</a></p>
      <p style={{color:"black"}}>Phone: <a href="tel:+91710855844">9710855844</a> , <a href="tel:+91710855844">9080000045</a></p>
      <p style={{color:"black"}}>&copy; 2024 Vihana Travels. All rights reserved.</p>
    </div>
  );
};

export default Footer;
