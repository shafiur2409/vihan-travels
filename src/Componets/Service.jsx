import React from "react";

export const Service = ({ title, description }) => {
  return (
    <div 
      className="service-text" 
      style={{
        padding: "16px",
        maxWidth: "345px",
        border: "1px solid #ccc",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s",
        margin: "0 auto",
        textAlign: "center",
        background: "linear-gradient(145deg, #FFB6C1, #FF69B4)",
        color: "#333"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)")}
    >
      <div className="service-content">
        <h3 style={{ margin: "0 0 8px 0", fontSize: "1.25rem", color: "#4B0082" }}>{title}</h3>
        <p style={{ margin: "0", color: "#444", fontSize: "0.9rem" }}>{description}</p>
      </div>
    </div>
  );
};

export default Service;

