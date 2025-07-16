"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GenWppBtn() {
  const buttonRef = useRef(null);

  useEffect(() => {
    const animateSection = (ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            clipPath: "circle(0% at 50% 50%)", // Começa totalmente oculto
            scale: 1,
          },
          {
            opacity: 1,
            clipPath: "circle(100% at 50% 50%)", // Expande a máscara do centro para as bordas
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 90%",
              end: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    };
    animateSection(buttonRef); // Chama a animação ao montar o componente
  }, []);

  const phoneNumber = "5567992412050"; // Coloque o número no formato internacional

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      className="opacity-0 flex text-center m-2 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 items-center justify-center "
    >
      <div className="bg-green-500 text-white gap-1 font-bold rounded-full flex items-center text-lg hover:bg-green-600 transition-all duration-300">
        <FaWhatsapp className="items-center flex  lg:w-14 lg:h-14" />
        <p className="lg:text-2xl">Fale com nosso time agora!</p>
      </div>
    </a>
  );
}
