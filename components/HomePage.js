import GoogleMap from "@/components/GoogleMap";
import {
  UserGroupIcon,
  PaintBrushIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel } from "@/components/Carousel";
import Link from "next/link";
import {
  FaTruck,
  FaHandshake,
  FaStar,
  FaLightbulb,
  FaShield,
  FaCircleCheck,
  FaShirt,
  FaSocks,
  FaBed,
  FaClock,
} from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const flexboxRef1 = useRef(null);
  const flexboxRef2 = useRef(null);
  const flexboxRef3 = useRef(null);
  const flexboxRef4 = useRef(null);
  const flexboxRef5 = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);

  useEffect(() => {
    // Verificar se é dispositivo móvel
    const isMobile = window.innerWidth < 768;

    // Se for mobile, não aplicar animações
    if (isMobile) {
      return;
    }

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
            scrollTrigger: {
              trigger: ref.current,
              start: "top 95%", // 5% do box visível
              end: "top 20%",
              toggleActions: "play none none reverse",
              markers: false,
            },
          }
        );
      }
    };

    // Animate each section
    animateSection(flexboxRef1);
    animateSection(flexboxRef2);
    animateSection(flexboxRef3);
    animateSection(flexboxRef4);
    animateSection(flexboxRef5);

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const features = [
    {
      name: "Equipamentos de última geração",
      description:
        "Nossa estrutura conta com equipamentos de última geração, que garantem a qualidade da lavagem e secagem das suas peças, com padrão de qualidade industrial.",
      icon: StarIcon,
    },
    {
      name: "Equipe especializada",
      description:
        "Nosso time de profissionais especializados garante a qualidade do serviço, com mais de 20 anos de experiência na área.",
      icon: UserGroupIcon,
    },
    {
      name: "Coleta e entrega em sua empresa",
      description:
        "Contamos com frota dedicada e equipe treinada para coletar e entregar seus materiais com segurança e pontualidade, seja na sua empresa ou na sua casa.",
      icon: FaTruck,
    },
    {
      name: "Produtos de Alta Performance",
      description:
        " Utilizamos apenas produtos de alta performance, cuidadosamente selecionados para resultados superiores e preservação das suas peças.",
      icon: FaStar,
    },
    {
      name: "Segurança e Preservação",
      description:
        "Priorizamos a segurança e a preservação das suas peças, com fornecedores avaliados constantemente para manter o padrão de excelência.",
      icon: FaShield,
    },
    {
      name: "Compromisso com a Qualidade",
      description:
        "Conte com a nossa experiência e com a força das melhores marcas do setor para garantir tranquilidade, segurança e qualidade em cada serviço prestado.",
      icon: FaHandshake,
    },
  ];

  const phoneNumber = "5567992412050";

  // Refatore o array serviceCards para incluir as imagens e pills como dados
  const serviceCards = [
    {
      title: "Retirada do Material",
      image: {
        src: "/bg/entrega.png",
        alt: "Carro de entrega",
      },
      description:
        "Realizamos a retirada e entrega do material conforme sua necessidade, em horários e prazos pré-determinados. Fornecemos tickets com descrição detalhada e contagem prévia das peças.",
      pills: [
        {
          icon: (
            <FaCircleCheck className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Coleta na sua empresa",
        },
        {
          icon: (
            <FaClock className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Entrega pontual",
        },
      ],
    },
    {
      title: "Higienização de EPIs",
      image: {
        src: "/bg/epis.png",
        alt: "EPIs e Higienização",
      },
      description:
        "Realizamos a lavagem e higienização de Roupas de Proteção EPI em geral, utilizando produtos profissionais e de alta performance para manter a originalidade das suas peças.",
      pills: [
        {
          icon: (
            <FaCircleCheck className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Higienização Profissional",
        },
        {
          icon: (
            <FaCircleCheck className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Preservação do EPI",
        },
      ],
    },
    {
      title: "Uniformes Industriais",
      image: {
        src: "/bg/uniformes.png",
        alt: "Uniformes Industriais",
      },
      description:
        "Oferecemos lavagem especializada para uniformes industriais, incluindo macacões, jalecos, calças e camisas de trabalho.",
      pills: [
        {
          icon: (
            <FaCircleCheck className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Lavagem Especializada",
        },
        {
          icon: (
            <FaCircleCheck className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Durabilidade Garantida",
        },
      ],
    },
    {
      title: "Pacotes para Hotelaria e Alojamentos",
      image: {
        src: "/bg/cama-mesa.jpg",
        alt: "Pacotes para Hotelaria e Alojamentos",
      },
      description:
        "Oferecemos soluções completas para hotéis, pousadas e alojamentos, com planos personalizados para grandes volumes de peças, garantindo praticidade, economia e qualidade.",
      pills: [
        {
          icon: (
            <FaCircleCheck className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Coleta e entrega programada",
        },
        {
          icon: (
            <FaCircleCheck className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Higienização de enxoval",
        },
      ],
    },
    {
      title: "Peças pessoais",
      image: {
        src: "/bg/roupas-coloridas.jpg",
        alt: "Peças pessoais",
      },
      description:
        "Lavamos diversos tipos de peças, desde roupas do dia a dia até itens de cama, mesa e banho, sempre com cuidado e produtos de alta performance.",
      pills: [
        {
          icon: (
            <FaSocks className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Roupas Íntimas",
        },
        {
          icon: (
            <FaShirt className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Toalhas de Banho e Rosto",
        },
        {
          icon: <FaBed className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />,
          text: "Lençóis e Fronhas",
        },
        {
          icon: (
            <FaShirt className="text-[#23c5ed] w-4 h-4 md:w-5 md:h-5 mr-2" />
          ),
          text: "Camisas e Camisetas",
        },
      ],
    },
  ];

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  // Função para atualizar o índice selecionado
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Função para navegar para um slide específico
  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      className="flexbox-master flex flex-col w-full"
      style={{ backgroundColor: "#f1fbff" }}
    >
      {/* Hero card */}
      <div
        className="herocard hero-bg items-center flex flex-col bg-cover md:mb-4 gap-4 lg:gap-12 pt-24 pb-20 md:py-8 lg:pt-36"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-xl px-4 backdrop-blur-xs lg:backdrop-blur-sm">
          <h1 className="text-center whitespace-nowrap text-white font-bold tracking-tight text-3xl md:text-7xl lg:text-[80px] leading-tight">
            Sua roupa, nosso cuidado
          </h1>
          <p className="mt-4 mb-10 text-center text-white text-lg md:text-2xl font-normal">
            Oferecemos serviços profissionais de lavanderia com foco em
            qualidade e conveniência. Agende seu serviço hoje e experimente a
            diferença.
          </p>
          <a
            href="https://wa.me/5567992412050"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-4 lg:mt-12 lg:mb-12 lg:px-12 lg:py-6 bg-[#23c5ed] text-white text-xl lg:text-3xl font-bold rounded-lg shadow-lg hover:bg-[#223569] hover:scale-105 hover:shadow-xl transition-all duration-300 transform"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* Features Container */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 rounded-xl"
        style={{ backgroundColor: "#f1fbff" }}
      >
        {features.map((feature, idx) => (
          <div
            key={feature.name}
            className={
              `flex flex-col items-center justify-center rounded-xl transition-all duration-300 cursor-pointer group ` +
              `bg-white hover:scale-105 hover:shadow-lg ` +
              `p-2 sm:p-3 md:p-6 ` +
              (expandedFeature === idx ? "z-10 shadow-2xl" : "")
            }
            onClick={() => {
              if (window.innerWidth < 768)
                setExpandedFeature(expandedFeature === idx ? null : idx);
            }}
          >
            <div className="mb-1 sm:mb-2 transform transition-transform duration-300 group-hover:scale-110">
              <feature.icon
                aria-hidden="true"
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-[#23c5ed] group-hover:text-[#223569]"
              />
            </div>
            <h3 className="text-sm sm:text-base md:text-xl font-semibold text-gray-800 text-center mb-1 sm:mb-2">
              {feature.name}
            </h3>
            {/* Mobile: mostra descrição só se expandido. Desktop: sempre mostra */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                expandedFeature === idx
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              } md:max-h-full md:opacity-100 md:mt-0`}
            >
              <p className="text-xs sm:text-sm text-gray-600 text-center md:block">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 1st container*/}
      <div
        className="flex flex-col md:flex-col lg:flex-row gap-4 p-8 h-full md:min-h-fit"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #23c5ed 0%, #1ba3c2 50%, #011F4B 100%)",
        }}
      >
        {/* Coluna Esquerda - Texto + Logos */}
        <div className="flex flex-col lg:w-[45%] justify-center items-center lg:items-start lg:justify-evenly">
          <p className="text-white pb-2 leading-relaxed text-xl md:text-3xl lg:text-5xl font-bold text-center md:text-center lg:text-left">
            O melhor cuidado para suas peças
          </p>
          <p className="text-sm lg:text-xl text-white pt-4">
            A Lavanderia Rio Pardo tem 5 anos de existência no mercado,
            oferecendo um <b>serviço de qualidade</b> a preços econômicos.
          </p>
          <p className="text-sm lg:text-xl text-white pt-4">
            Estamos aqui para <b>facilitar</b> e otimizar o tempo de nossos
            clientes no cuidado de suas peças. Temos como objetivo de
            representar a simplicidade realçando a essência da marca, além de
            transmitir <b>segurança</b>, proteção e sobretudo a humanização da
            marca.
          </p>

          <p className="text-sm lg:text-xl text-white pt-4">
            {" "}
            Nossa equipe de especialistas está pronta para oferecer um{" "}
            <b>atendimento personalizado</b> a preços econômicos.
          </p>

          <p className="text-sm lg:text-xl text-white pt-2">
            Nossa missão é otimizar seu tempo e garantir a manutenção da
            qualidade e higiene das suas peças.{" "}
            <b>Conte com a Lavanderia Rio Pardo!</b>{" "}
          </p>

          <div className="flex flex-col items-center">
            <Link
              href="/quemsomos"
              className="flex hover:bg-[#223569] hover:text-white lg:text-xl rounded-full p-2 text-bold mt-6 text-white gap-1 hover:underline transition-colors duration-300"
            >
              Veja mais
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Coluna Direita - Imagem da fachada*/}
        <div className="rounded-xl flex justify-center lg:w-[55%] lg:h-full items-center">
          <img
            src="/idv-lavanderia/fachada-loja.png"
            alt="Fachada"
            className="w-full h-full bg-cover rounded-xl"
          />
        </div>
      </div>

      {/* Flexbox2 - Nossos serviços */}
      <div
        ref={flexboxRef3}
        className="flex flex-col w-full p-4 lg:p-10 md:min-h-fit"
        style={{ backgroundColor: "#f1fbff" }}
      >
        {/* Título */}
        <div className="text-center lg:text-center">
          <h2 className="text-[#011F4B] lg:text-5xl md:text-3xl text-3xl font-bold">
            Nossos Serviços
          </h2>
          <p className="text-md text-[#011F4B] mt-2 mb-6">
            Qualidade e profissionalismo em cada peça
          </p>
        </div>

        {/* Carrossel de Serviços */}
        <div className="relative w-full shadow-none -mt-4 md:mt-0">
          <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="embla__container flex">
              {serviceCards.map((card, idx) => (
                <div key={idx} className="embla__slide flex-[0_0_100%] px-2">
                  <div
                    className="rounded-3xl p-4 md:p-8 flex flex-col lg:flex-row items-center lg:items-start gap-4 md:gap-8 min-h-[400px] lg:h-full"
                    style={{ backgroundColor: "#f1fbff" }}
                  >
                    {/* Lado esquerdo - Imagem */}
                    <div className="w-full lg:w-80 h-40 lg:h-80 rounded-2xl overflow-hidden flex items-center justify-center p-0 m-0">
                      <img
                        src={card.image.src}
                        alt={card.image.alt}
                        className={`w-full h-full object-cover rounded-2xl ${
                          card.image.src === "/bg/entrega.png"
                            ? "object-[center_30%]"
                            : "object-center"
                        }`}
                      />
                    </div>
                    {/* Lado direito - Conteúdo */}
                    <div className="flex-1 lg:h-80 flex flex-col justify-between h-64">
                      <div className="flex flex-col h-full justify-evenly">
                        <h3 className="text-xl lg:text-left text-center lg:text-3xl font-bold text-gray-900">
                          {card.title}
                        </h3>

                        <div className="text-gray-600 text-sm md:text-lg lg:text-xl text-center p-2 lg:p-0 lg:text-left leading-relaxed md:leading-relaxed">
                          {card.description}
                        </div>

                        <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
                          {card.pills.map((pill, pillIdx) => (
                            <div
                              key={pillIdx}
                              className="flex items-center bg-white px-2 py-1 md:px-4 md:py-2 rounded-full shadow-md"
                            >
                              {pill.icon}
                              <span className="text-gray-700 font-medium text-xs md:text-base lg:text-xl">
                                {pill.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de navegação */}
          <div className="flex justify-center mt-2 lg:mt-0 space-x-2 md:space-x-3">
            {serviceCards.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-[#23c5ed] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:mt-4">
          <Link
            href="/servicos"
            className="flex hover:bg-[#223569] hover:text-white rounded-full p-1 text-bold mt-0 text-[#23c5ed] text-sm lg:text-xl gap-1 hover:underline"
          >
            Veja mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Venha nos visitar */}
      <div
        ref={flexboxRef4}
        className={`flex flex-col md:flex-col lg:flex-row lg:justify-between gap-4 p-8 min-h-screen md:min-h-fit ${
          window.innerWidth < 768
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(135deg, #23c5ed 0%, #1ba3c2 50%, #011F4B 100%)",
        }}
      >
        <div className="flexbox-left md:flex-col lg:flex-row items-start gap-4 lg:w-[50%] text-white">
          <p className="font-bold opacity-100 lg:text-5xl md:text-3xl text-3xl  text-center md:text-center lg:text-left">
            Venha nos visitar
          </p>
          <p className=" text-lg text-center md:text-center lg:text-left">
            Estamos te esperando para um cafézinho ☕
          </p>
          <div className="w-full mt-4 mb-4 flex bg-white opacity-100 rounded-lg overflow-hidden h-[300px] md:h-[500px]">
            <GoogleMap />{" "}
          </div>
        </div>
        <div className="flex flex-col items-center lg:m-6 lg:mt-12 lg:items-center lg:justify-start">
          <div
            className="flex rounded-2xl lg:m-6 lg:p-4 m-2 p-1 items-center flex-col lg:mt-4"
            style={{ backgroundColor: "#f5f0e4" }}
          >
            <div
              className="w-full h-full shadow-lg rounded-2xl p-4 flex flex-col items-center"
              style={{ backgroundColor: "#f5f0e4" }}
            >
              <h3 className="text-md md:text-xl lg:text-2xl text-center font-semibold text-gray-900">
                Horário de Funcionamento
              </h3>
              <address className="lg:mt-3 space-y-1 mt-1 text-center justify-end text-md md:text-xl lg:text-2xl not-italic text-gray-600">
                <p>Segunda à Sexta 07:30 - 18:00</p>
                <p>Sábado 08:00 - 12:00</p>
              </address>
            </div>
          </div>
          <div
            className="flex rounded-2xl lg:m-6 lg:p-4 m-2 p-1 items-center flex-col lg:mt-auto"
            style={{ backgroundColor: "#f5f0e4" }}
          >
            <div
              className="w-full h-full shadow-lg rounded-2xl p-4 flex flex-col items-center"
              style={{ backgroundColor: "#f5f0e4" }}
            >
              <h3 className=" text-md md:text-xl lg:text-2xl text-center font-semibold text-gray-900">
                Nosso endereço
              </h3>
              <address className="flex-col mt-2 space-y-1 items-center text-center text-md md:text-xl lg:text-2xl not-italic text-gray-600">
                <p>Rua Projetada, Quadra 01 </p>
                <p>
                  <span className="whitespace-nowrap">
                    Lote 07 - Núcleo Industrial
                  </span>
                </p>
                <p>Ribas do Rio Pardo - MS</p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Contato */}
      <div
        className="contato flex flex-col md:flex-col lg:flex-row h-full w-full p-8 md:min-h-fit"
        style={{ backgroundColor: "#f1fbff" }}
      >
        {/* Conteúdo */}
        <div className="left-side flex flex-col my-auto items-center lg:items-end lg:text-right lg:justify-center p-4 h-full w-full lg:w-1/2">
          <h2 className="text-[#011F4B] lg:text-4xl md:text-3xl text-3xl font-bold">
            Contato
          </h2>

          {/* WhatsApp */}
          <div className="flex items-center gap-3 mt-4 lg:p-2 rounded-full hover:bg-[#223569] hover:text-white">
            <img
              src="/icons/wpp-icon.gif"
              alt="WhatsApp"
              className="w-8 h-8 rounded-full"
            />
            <a href={`https://wa.me/${phoneNumber}`}>
              <span className="text-[#011F4B] text-2xl cursor-pointer hover:text-[#223569]">
                (067) 99241-2050
              </span>
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mt-3 hover:bg-[#223569] hover:text-white rounded-full p-2">
            <img src="/icons/email-icon.svg" alt="Email" className="w-8 h-8" />
            <span className="text-[#011F4B] sm: lg:text-2xl hover:text-[#223569]">
              lavanderiariopardo@gmail.com.br
            </span>
          </div>
        </div>

        <div className="flex object-cover mt-2 h-full w-full lg:w-1/2 right-side">
          <img
            alt="painter"
            src="bg/bg5.png"
            className="w-full h-full object-cover lg:w-2/3"
          />
        </div>
      </div>
    </div>
  );
}
