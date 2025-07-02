"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTruck, FaShirt, FaSocks, FaBed } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Servicos() {
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const animateSection = (ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    };

    animateSection(sectionRef);
    animateSection(servicesRef);
  }, []);

  const services = [
    {
      icon: <FaTruck className="w-12 h-12 text-[#23c5ed]" />,
      title: "Retirada do Material",
      description:
        "Realizamos a retirada e entrega do material conforme sua necessidade, em horários e prazos pré-determinados. Fornecemos tickets com descrição detalhada e contagem prévia das peças. Todo material é embalado em sacos plásticos fornecidos por nós e recolhidos pelo motorista conforme itinerário combinado.",
    },
    {
      icon: <FaShirt className="w-12 h-12 text-[#23c5ed]" />,
      title: "Peças que Lavamos",
      items: [
        { icon: <FaSocks />, text: "Meias e Roupas Íntimas" },
        { icon: <FaShirt />, text: "Toalhas de Banho e Rosto" },
        { icon: <FaBed />, text: "Lençóis e Fronhas" },
        { icon: <FaBed />, text: "Mantas, Cobertores e Edredons" },
        { icon: <FaShirt />, text: "Camisas e Camisetas" },
        { icon: <FaShirt />, text: "Calças e Bermudas" },
      ],
    },
    {
      icon: <FaShirt className="w-12 h-12 text-[#23c5ed]" />,
      title: "EPI e Higienização",
      description:
        "Realizamos a lavagem e higienização de Roupas de Proteção EPI em geral, utilizando produtos profissionais e de alta performance para manter a originalidade das suas peças.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9fcfd]">
      <div className="max-w-7xl mx-auto mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16 opacity-0">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl text-[#23c5ed] font-semibold">
            Qualidade e profissionalismo em cada peça
          </p>
        </div>

        <div ref={servicesRef} className="space-y-16 opacity-0">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                {service.icon}
                <h2 className="ml-4 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h2>
              </div>

              {service.description && (
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              )}

              {service.items && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-[#23c5ed]">{item.icon}</span>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
