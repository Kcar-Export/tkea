"use client";

import React from "react";

const FloatingWhatsappButton = () => {
  const whatsappNumber = "821068659685"; // WhatsApp format without + symbol
  const message = "Hello! I'm interested in your products. Can you help me?";

  const handleWhatsappClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsappClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
      title="Chat with us on WhatsApp"
      aria-label="WhatsApp Button"
    >
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.52 3.98C18.44 1.9 15.54 0.78 12.51 0.78C6.38 0.77 1.35 5.8 1.35 11.93C1.35 13.87 1.85 15.78 2.78 17.45L1.41 22.98L7.1 21.66C8.71 22.5 10.54 23 12.51 23C18.64 23 23.67 18 23.67 11.86C23.67 8.84 22.56 5.95 20.52 3.98ZM12.51 21.24C10.83 21.24 9.2 20.8 7.78 19.99L7.46 19.81L3.55 20.78L4.54 17.03L4.35 16.71C3.44 15.24 2.94 13.52 2.94 11.93C2.94 6.63 7.26 2.36 12.51 2.36C15.08 2.36 17.48 3.3 19.3 5.12C21.12 6.94 22.08 9.35 22.08 11.86C22.08 17.16 17.76 21.24 12.51 21.24ZM17.68 14.59C17.4 14.46 16.05 13.81 15.8 13.71C15.54 13.62 15.37 13.57 15.2 13.85C15.02 14.14 14.47 14.75 14.32 14.92C14.17 15.09 14.02 15.11 13.73 14.98C12.38 14.31 11.45 13.82 10.51 12.24C10.18 11.71 10.6 11.76 11.01 10.85C11.11 10.65 11.05 10.48 10.91 10.35C10.78 10.22 10.21 8.95 9.97 8.4C9.75 7.89 9.51 7.96 9.33 7.95H8.81C8.64 7.95 8.38 8.02 8.16 8.3L8.05 8.43C7.84 8.67 7.2 9.33 7.2 10.59C7.2 11.86 8.11 13.08 8.25 13.25C8.38 13.41 10.16 16.11 13.01 17.31C14.01 17.72 14.89 17.97 15.65 18.15C16.65 18.4 17.57 17.98 17.88 17.1C18.08 16.52 18.16 16.07 18.22 15.73C18.28 15.38 18.26 15.11 18.2 15.02C18.14 14.92 18.0 14.88 17.71 14.75C17.71 14.75 17.68 14.59 17.68 14.59Z" />
      </svg>
    </button>
  );
};

export default FloatingWhatsappButton;
