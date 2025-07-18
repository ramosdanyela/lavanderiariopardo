"use client";

import GoogleMap from "@/components/GoogleMap";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navigation = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1Cmf69Spsd/",
      icon: (props) => (
        <svg fill="#1877F2" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/lavanderiariopardo",
      icon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
          <defs>
            <linearGradient
              id="instagram-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#405DE6" />
              <stop offset="25%" stopColor="#5851DB" />
              <stop offset="50%" stopColor="#833AB4" />
              <stop offset="75%" stopColor="#C13584" />
              <stop offset="100%" stopColor="#E1306C" />
            </linearGradient>
          </defs>
          <path
            fill="url(#instagram-gradient)"
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Contato() {
  const flexboxRef1 = useRef(null);
  const phoneNumber = "67992412050"; // Número do WhatsApp sem formatação

  useEffect(() => {
    const animateSection = (ref) => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 }, // Estado inicial
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

    animateSection(flexboxRef1);
  }, []);

  return (
    <div className="bg-white pt-24 md:pt-32 lg:pt-40">
      <div
        ref={flexboxRef1}
        className="opacity-0 translate-y-10 mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div>
              <h2 className="text-pretty text-4xl text-center md:text-center lg:text-left font-semibold tracking-tight text-gray-900">
                Fale conosco diretamente
              </h2>
              <p className="mt-4 text-xl text-center md:text-center lg:text-left font-bold text-[#23c5ed]">
                Faça seu orçamento hoje mesmo
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-4">
              <div className="flex flex-col justify-center rounded-2xl bg-gray-50 p-10 lg:p-6 text-center md:text-center lg:text-left">
                <h3 className="text-lg pb-4  lg:text-xl font-semibold text-gray-900">
                  Contato Comercial
                </h3>
                <div className="mt-3 space-y-1 text-md lg:text-base/6 text-gray-600">
                  <div className="text-md pb-2 lg:text-xl text-gray-600 text-center md:text-center lg:text-left">
                    <a
                      href="mailto:lavanderiariopardo@gmail.com.br"
                      className="flex items-center justify-center md:justify-center lg:justify-start gap-2 hover:bg-blue-100 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                      <span>lavanderiariopardo@gmail.com.br</span>
                    </a>
                  </div>
                  <a
                    href={`https://wa.me/${phoneNumber}`}
                    className="mt-1 flex text-lg lg:text-xl items-center justify-center md:justify-center lg:justify-start gap-2 hover:bg-green-100 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
                  >
                    <img
                      src="icons/wpp-icon.gif"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                    <span>(67) 99241-2050</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-2xl bg-gray-50 p-10 lg:p-6 text-center md:text-center lg:text-left">
                <h3 className="text-lg pb-4 lg:text-xl font-semibold text-gray-900">
                  Acompanhe nossas Redes Sociais
                </h3>
                <div className="mt-2 flex flex-col  space-y-2 justify-center gap-x-10">
                  {navigation.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 flex flex-row justify-center md:justify-center lg:justify-start hover:text-gray-800 text-lg lg:text-xl hover:bg-gray-100 hover:rounded-full hover:px-4 hover:py-2 transition-all duration-300 ease-in-out"
                    >
                      <item.icon aria-hidden="true" className="size-6" />
                      <span className="font-normal">{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-3 text-center md:text-center lg:text-left">
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900">
                Localização
              </h2>
              <p className="mt-4 whitespace-pre-line font-bold text-xl text-[#23c5ed]">
                Visite a nossa loja!
                <span className="block mt-2 ">
                  Estamos te esperando para um cafézinho ☕
                </span>
              </p>
            </div>
            <div className="flex-row gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-4 lg:p-10">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                  Horário de Funcionamento
                </h3>
                <address className="mt-2 text-lg space-y-1 lg:text-xl not-italic text-gray-600">
                  <p>Segunda à Sexta 07:30 - 18:00</p>
                  <p>Sábado 08:00 - 12:00</p>
                </address>
              </div>
              <div className="rounded-2xl mt-4 bg-gray-50 p-4 lg:p-10">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">
                  Endereço
                </h3>
                <div className="mt-2 space-y-1 text-lg lg:text-xl text-gray-600">
                  <p>
                    Rua Projetada A, Quadra 01
                    <br />
                    Lote 07 - Núcleo Industrial
                    <br />
                    Ribas do Rio Pardo - MS
                  </p>
                  <div className="pt-4 w-full h-64 md:h-80 lg:h-96">
                    <GoogleMap />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
