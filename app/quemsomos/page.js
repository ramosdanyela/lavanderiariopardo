"use client";

import {
  UserGroupIcon,
  StarIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";
import { FaTruck } from "react-icons/fa";
import GenWppBtn from "@/components/GenWppBtn";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CarouselPaint } from "@/components/CarouselPaint";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

gsap.registerPlugin(ScrollTrigger);

const equipamentosImgs = [
  "bg/maquina-lavar.jpeg",
  "bg/maquina-secar.jpeg",
  "bg/calandra.jpeg",
];

export default function QuemSomos() {
  const flexboxRef1 = useRef(null);
  const flexboxRef2 = useRef(null);
  const flexboxRef3 = useRef(null);
  const flexboxRef4 = useRef(null);
  const flexboxRef5 = useRef(null);
  const [equipamentoIdx, setEquipamentoIdx] = useState(0);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

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
              start: "top 95%", // Mudança: agora ativa quando o topo do elemento está a 95% da viewport (5% de scroll)
              end: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    };

    animateSection(flexboxRef1);
    animateSection(flexboxRef2);
    animateSection(flexboxRef3);
    animateSection(flexboxRef4);
    animateSection(flexboxRef5);
  }, []);

  // Carrossel simples de imagens
  useEffect(() => {
    const interval = setInterval(() => {
      setEquipamentoIdx((prev) => (prev + 1) % equipamentosImgs.length);
    }, 3000); // Troca a cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col bg-[#f9fcfd]">
      <div
        ref={flexboxRef1}
        className="container-hero flex flex-col md:flex-row pt-8 md:pt-[8rem] lg:pt-[10rem] lg:flex-row"
      >
        {/* Coluna da Esquerda - Descrição */}
        <div className="flex flex-col px-4 md:px-8  w-full  lg:w-[55%]">
          <h2 className="text-lg lg:text-2xl font-medium text-[#23c5ed] tracking-wide">
            Higiene e cuidado que faz a diferença
          </h2>
          <p className="mt-4 text-pretty text-4xl leading-tight font-bold text-gray-900 lg:text-6xl">
            Lavanderia Rio Pardo
          </p>
          <p className="mt-8 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            A Lavanderia Rio Pardo tem 5 anos de existência no mercado,
            oferecendo um serviço de qualidade a preços econômicos. Estamos aqui
            para facilitar e otimizar o tempo de nossos clientes no cuidado de
            suas peças.
          </p>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Temos como objetivo de representar a simplicidade realçando a
            essência da marca, além de transmitir segurança, proteção e
            sobretudo a humanização da marca.
          </p>
          <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Nesses 5 anos alcançamos um grande público, com destaque para as as
            empresas instaladas na nossa cidade para o Projeto Cerrado, empresas
            que vem sendo clientes fiéis em nossa jornada.
          </p>
        </div>

        {/* Coluna Direita - Imagem */}
        <div className="flex px-4 h-[500px] lg:px-8 lg:w-[45%]">
          <img
            alt="Product screenshot"
            src="/idv-lavanderia/fachada-loja.png"
            className="w-full h-full object-cover object-top transform  rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Seção 1: Equipamentos */}
      <div
        ref={flexboxRef2}
        className="opacity-0 translate-y-10 flex flex-col lg:mt-20 mt-6 mb-6 lg:my-6 md:flex-col lg:flex-row gap-x-16 items-center justify-between px-6 lg:px-12"
      >
        {/* Carrossel com borda azul */}
        <div className="lg:w-1/2 bg-[#23c5ed] rounded-2xl shadow-xl overflow-hidden flex items-center justify-center order-2 lg:order-1">
          <div className="w-full h-full p-2 flex items-center justify-center">
            <div
              className="embla w-full h-[350px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden"
              ref={emblaRef}
            >
              <div className="embla__container flex h-full">
                {equipamentosImgs.map((src, idx) => (
                  <div
                    className="embla__slide flex-[0_0_100%] h-full flex items-center justify-center"
                    key={idx}
                  >
                    <img
                      src={src}
                      alt={`Equipamento ${idx + 1}`}
                      className="w-full h-full object-cover rounded-xl transition-all duration-700"
                      style={{ objectPosition: "center" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center md:items-center lg:items-start max-w-2xl lg:mx-0 h-full my-8 lg:my-2 gap-y-6 w-full lg:px-8 order-1 lg:order-2">
          <p className="flex mt-2 lg:mt-0 text-center md:text-center lg:text-left text-pretty text-2xl md:text-3xl lg:text-4xl leading-tight font-bold text-gray-900 gap-3">
            <StarIcon className="inline-block w-8 h-8 text-[#23c5ed]" />
            Equipamentos de última geração
          </p>
          <p className="text-lg md:text-xl text-center lg:text-left lg:text-2xl text-gray-600 leading-relaxed">
            Nossa estrutura conta com equipamentos de última geração, que
            garantem a qualidade da lavagem e secagem das suas peças com padrão
            de qualidade industrial.
          </p>
          <div className="flex-col items-center w-full mt-4">
            <GenWppBtn />
          </div>
        </div>
      </div>

      {/* Seção 2: Equipe especializada */}
      <div
        ref={flexboxRef3}
        className="opacity-0 translate-y-10 flex flex-col lg:my-8 mt-6 mb-6 md:flex-col lg:flex-row gap-x-16 items-center justify-between px-6 lg:px-12"
      >
        <div className="flex flex-col flex-1 items-center md:items-center lg:items-start max-w-2xl lg:mx-0 h-full my-8 gap-y-6 w-full lg:px-8 order-1">
          <p className="flex mt-2 lg:mt-0 text-center md:text-center lg:text-left text-pretty text-2xl md:text-3xl lg:text-4xl leading-tight font-bold text-gray-900 gap-3">
            <UserGroupIcon className="inline-block w-8 h-8 text-[#23c5ed]" />
            Equipe especializada
          </p>
          <p className="text-lg md:text-xl text-center lg:text-left lg:text-2xl text-gray-600 leading-relaxed">
            Nosso time de profissionais especializados garante a qualidade do
            serviço, com mais de 20 anos de experiência na área.
          </p>
          <div className="flex-col items-center w-full mt-4">
            <GenWppBtn />
          </div>
        </div>

        <div className="lg:w-1/2 bg-[#23c5ed] -scale-x-100 rounded-2xl shadow-xl overflow-hidden order-2">
          <img
            alt="Equipe especializada"
            src="/equipe/lavanderia.png"
            className="w-full h-full object-cover rounded-xl p-2 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Seção 3: Coleta e Entrega */}
      <div
        ref={flexboxRef4}
        className="opacity-0 translate-y-10 flex flex-col lg:my-8 mt-6 mb-6 md:flex-col lg:flex-row gap-x-16 items-center justify-between px-6 lg:px-12"
      >
        <div className="lg:w-1/2 bg-[#23c5ed] rounded-2xl shadow-xl overflow-hidden order-2">
          <img
            alt="Equipamentos de última geração"
            src="/bg/entrega.png"
            className="w-full h-full object-cover rounded-xl p-2 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col flex-1 items-center md:items-center lg:items-start max-w-2xl lg:mx-0 h-full my-8 gap-y-6 w-full lg:px-8 order-1">
          <p className="flex mt-2 lg:mt-0 text-center md:text-center lg:text-left text-pretty text-2xl md:text-3xl lg:text-4xl leading-tight font-bold text-gray-900 gap-3">
            <FaTruck className="inline-block w-8 h-8 text-[#23c5ed]" />
            Coleta e entrega
          </p>
          <p className="text-lg md:text-xl text-center lg:text-left lg:text-2xl text-gray-600 leading-relaxed">
            Contamos com frota dedicada e equipe treinada para coletar e
            entregar seus materiais com segurança e pontualidade, seja na sua
            empresa ou na sua casa.
          </p>
          <div className="flex-col items-center w-full mt-4">
            <GenWppBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
