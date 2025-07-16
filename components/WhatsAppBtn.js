"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatsAppBtn() {
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power2.out",
      transformOrigin: "center",
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 95%", // Inicia quando o Flexbox entra 80% na tela
        toggleActions: "play none none none", // Executa apenas uma vez
      },
    });
  }, []);

  const phoneNumber = "5567992412050"; // Coloque o número no formato internacional

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      className="flex lg:flex-col fixed z-50 max-w-screen-sm md:max-screen-md lg:max-w-screen-xl bottom-20 lg:bottom-10 lg:right-[310px] items-center lg:justify-end transform"
    >
      <div className="flex lg:flex-col lg:items-center lg:justify-center lg:p-1 lg:gap-1 lg:bg-green-500 lg:border-green-500  lg:border-2 lg:rounded-xl lg:shadow-lg ">
        <img
          src="/idv-portal/qrwpp.png"
          alt="qrcode"
          className="lg:flex md:hidden hidden md:rounded-md lg:rounded-md  w-full lg:w-[100px] object-contain"
        />
        <div className="flex lg:flex-row gap-1 font-bold text-base text-white  rounded-full lg:shadow-none shadow-lg p-2 lg:p-0 hover:bg-green-600  bg-green-500 transition-all duration-300">
          {" "}
          <FaWhatsapp className="w-6 h-6" />
          <p>WhatsApp</p>{" "}
        </div>
      </div>
    </a>
  );
}
