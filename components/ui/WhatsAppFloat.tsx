"use client";

import React from "react";

export function WhatsAppFloat() {
  const handleClick = () => {
    const phoneNumber = "919000000000"; // replace with Breaxo Tech official number if configured
    const message = encodeURIComponent(
      "Hello Breaxo Tech team, I would like to discuss an engineering project with you."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      className="whatsapp-float"
      id="whatsappBtn"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      onClick={handleClick}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
        <path d="M16.004 0C7.176 0 .002 7.174.002 16.002c0 2.822.737 5.578 2.138 8.005L0 32l8.188-2.148A15.94 15.94 0 0 0 16.004 32C24.832 32 32 24.826 32 16.002 32 7.174 24.832 0 16.004 0zm0 29.318a13.28 13.28 0 0 1-7.176-2.096l-.514-.306-5.33 1.398 1.424-5.2-.336-.534a13.21 13.21 0 0 1-2.03-7.058c0-7.334 5.97-13.304 13.304-13.304h.006c7.33 0 13.296 5.97 13.296 13.304 0 7.33-5.966 13.3-13.302 13.3l-.342-.004zm7.296-9.958c-.4-.2-2.366-1.168-2.732-1.302-.366-.132-.632-.2-.898.2-.266.4-1.032 1.302-1.266 1.568-.232.266-.466.3-.866.1-.4-.2-1.688-.622-3.216-1.984-1.188-1.06-1.99-2.37-2.224-2.77-.232-.4-.024-.616.176-.814.18-.18.4-.466.6-.7.2-.232.266-.4.4-.666.132-.266.066-.5-.034-.7-.1-.2-.898-2.166-1.232-2.966-.324-.778-.654-.672-.898-.686l-.766-.012c-.266 0-.698.1-1.064.5-.366.4-1.398 1.366-1.398 3.332 0 1.966 1.432 3.866 1.632 4.132.2.266 2.82 4.304 6.832 6.034.954.412 1.7.658 2.28.842.958.304 1.832.262 2.522.158.77-.114 2.366-.968 2.7-1.902.332-.932.332-1.732.232-1.9-.1-.166-.366-.266-.766-.466z" />
      </svg>
    </button>
  );
}
