import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "91XXXXXXXXXX"; // 👉 Replace with your number
  const message = "Hi there! I'm interested in your products.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
