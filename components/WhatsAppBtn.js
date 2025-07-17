"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatsAppBtn() {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animação inicial simples sem ScrollTrigger
    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      ease: "power2.out",
      transformOrigin: "center",
      delay: 0.5, // Pequeno delay para garantir que a página carregou
    });
  }, []);

  const phoneNumber = "5567992412050";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      className="fixed z-50 bottom-20 lg:bottom-10 lg:right-1/2 lg:transform lg:translate-x-1/2 transform"
    >
      <div className="flex lg:flex-row gap-1 font-bold text-base justify-center items-center lg:text-2xl text-white rounded-full lg:rounded-full shadow-lg p-2 lg:p-3 hover:bg-green-600 hover:scale-110 bg-green-500 transition-all duration-300 transform">
        <FaWhatsapp className="w-6 h-6 lg:w-10 lg:h-10" />
        <p>WhatsApp</p>
      </div>
    </a>
  );
}
