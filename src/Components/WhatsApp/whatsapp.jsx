import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./whatsapp.css"; // 👉 import CSS

const WhatsAppButton = () => {
  const phoneNumber = "91XXXXXXXXXX"; // Replace with your number
  const message = "Hi! I'm interested in your products.";

  return (
    <div className="whatsapp-container">
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
        <span className="whatsapp-text">WhatsApp Us</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
