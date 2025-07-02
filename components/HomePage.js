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
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
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
      name: "Coleta e entrega de materiais em sua empresa ou casa",
      description:
        "Contamos com frota dedicada e equipe treinada para coletar e entregar seus materiais com segurança e pontualidade, seja na sua empresa ou na sua casa.",
      icon: FaTruck,
    },
    {
      name: "Marcas de Confiança",
      description:
        " Trabalhamos com fabricantes renomados, reconhecidos nacional einternacionalmente, para garantir a qualidade dos nossos serviços.",
      icon: FaHandshake,
    },
    {
      name: "Produtos de Alta Performance",
      description:
        " Utilizamos apenas produtos de alta performance, cuidadosamente selecionados para resultados superiores e preservação das suas peças.",
      icon: FaStar,
    },
    {
      name: "Soluções Inovadoras",
      description:
        "Nossas parcerias nos permitem oferecer soluções inovadoras, eficientes e seguras para todos os tipos de peças e necessidades.",
      icon: FaLightbulb,
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

  const phoneNumber = "5567999242050";

  // Serviços para o carrossel
  const serviceCards = [
    {
      icon: <FaTruck className="w-12 h-12 text-white" />,
      title: "Retirada do Material",
      description: (
        <>
          Realizamos a retirada e entrega do material conforme sua necessidade,
          em horários e prazos pré-determinados. Fornecemos tickets com
          descrição detalhada e contagem prévia das peças.
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaCircleCheck className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">
                Coleta na sua empresa
              </span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaCircleCheck className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">Entrega pontual</span>
            </div>
          </div>
        </>
      ),
      image: (
        <div className="text-center text-white">
          <FaTruck className="w-20 h-20 mx-auto mb-4 opacity-80" />
          <p className="text-lg font-semibold">Veículo de Coleta</p>
          <p className="text-sm opacity-90">Frota dedicada e equipe treinada</p>
        </div>
      ),
      bg: "from-[#23c5ed] to-[#1ba3c2]",
    },
    {
      icon: <FaShirt className="w-12 h-12 text-white" />,
      title: "Peças que Lavamos",
      description: (
        <>
          Lavamos diversos tipos de peças, desde roupas do dia a dia até itens
          de cama, mesa e banho, sempre com cuidado e produtos de alta
          performance.
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <div className="flex items-center">
              <FaSocks className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700">Meias e Roupas Íntimas</span>
            </div>
            <div className="flex items-center">
              <FaShirt className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700">Toalhas de Banho e Rosto</span>
            </div>
            <div className="flex items-center">
              <FaBed className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700">Lençóis e Fronhas</span>
            </div>
            <div className="flex items-center">
              <FaShirt className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700">Camisas e Camisetas</span>
            </div>
          </div>
        </>
      ),
      image: (
        <div className="text-center text-white">
          <FaShirt className="w-20 h-20 mx-auto mb-4 opacity-80" />
          <p className="text-lg font-semibold">Roupas e Enxoval</p>
          <p className="text-sm opacity-90">Cuidado para cada tipo de peça</p>
        </div>
      ),
      bg: "from-[#23c5ed] to-[#1ba3c2]",
    },
    {
      icon: <FaShield className="w-12 h-12 text-white" />,
      title: "EPI e Higienização",
      description: (
        <>
          Realizamos a lavagem e higienização de Roupas de Proteção EPI em
          geral, utilizando produtos profissionais e de alta performance para
          manter a originalidade das suas peças.
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaCircleCheck className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">
                Higienização Profissional
              </span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaCircleCheck className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">
                Preservação do EPI
              </span>
            </div>
          </div>
        </>
      ),
      image: (
        <div className="text-center text-white">
          <FaShield className="w-20 h-20 mx-auto mb-4 opacity-80" />
          <p className="text-lg font-semibold">Equipamentos de Proteção</p>
          <p className="text-sm opacity-90">
            Segurança e cuidado especializado
          </p>
        </div>
      ),
      bg: "from-[#23c5ed] to-[#1ba3c2]",
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
    <div className="flexbox-master flex flex-col w-full bg-[#ffff]">
      {/* Hero card */}
      <div
        className="herocard hero-bg items-center flex flex-col bg-cover md:mb-4 gap-4 lg:gap-12 pt-20 pb-24 md:py-16 lg:pt-40"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full max-w-xl px-4 backdrop-blur-sm">
          <h1 className="text-center whitespace-nowrap text-white font-bold tracking-tight text-3xl md:text-7xl lg:text-[80px] leading-tight">
            Sua roupa, nosso cuidado
          </h1>
          <p className="mt-4 text-center text-white text-lg md:text-2xl font-normal">
            Oferecemos serviços profissionais de lavanderia com foco em
            qualidade e conveniência. Agende seu serviço hoje e experimente a
            diferença.
          </p>
          <a
            href="#orcamento"
            className="mt-8 px-8 py-3 lg:mt-22 lg:mb-24 bg-[#23c5ed] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-[#1ba3c2] transition"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>

      {/* Features Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2 mx-6 bg-white rounded-xl">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-50 cursor-pointer group"
          >
            <div className="mb-2 transform transition-transform duration-300 group-hover:scale-110">
              <feature.icon
                aria-hidden="true"
                className="w-16 h-16 text-[#23c5ed]"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
              {feature.name}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* 1st container*/}
      <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between gap-4 p-8 md:p-12 lg:p-16 my-3 md:my-4 lg:my-2 bg-[#23c5ed]">
        {/* Coluna Esquerda - Texto + Logos */}
        <div className="flex flex-col lg:w-[45%] justify-center">
          <p className="text-white pb-2 leading-relaxed lg:text-4xl md:text-3xl text-2xl font-bold text-center md:text-center lg:text-left">
            O melhor cuidado para suas peças
          </p>
          <p className="lg:text-lg/8 md:text-md sm:text-sm text-white pt-4 ">
            A Lavanderia Rio Pardo tem 4 anos de existência no mercado,
            oferecendo um <b>serviço de qualidade</b> a preços econômicos.
            Estamos aqui para <b>facilitar</b> e otimizar o tempo de nossos
            clientes no cuidado de suas peças. Temos como objetivo de
            representar a simplicidade realçando a essência da marca, além de
            transmitir <b>segurança</b>, proteção e sobretudo a humanização da
            marca.
          </p>

          <p className="lg:text-lg/8 md:text-md text-sm text-white">
            {" "}
            Nossa equipe de especialistas está pronta para oferecer um{" "}
            <b>atendimento personalizado</b> a preços econômicos.
          </p>

          <p className="lg:text-lg/8 md:text-md text-sm text-white pt-2 ">
            Nossa missão é otimizar seu tempo e garantir a manutenção da
            qualidade e higiene das suas peças.{" "}
            <b>Conte com a Lavanderia Rio Pardo!</b>{" "}
          </p>

          <div className="flex flex-col items-center">
            <Link
              href="/quemsomos"
              className="flex hover:bg-gray-300 rounded-full p-2 text-bold mt-6 text-white gap-1 hover:underline"
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
        <div className="rounded-xl flex justify-center lg:w-[50%] lg:h-[50%] items-center">
          <img
            src="/idv-portal/fachada-loja.png"
            alt="Fachada"
            className="w-full h-full bg-cover rounded-xl"
          />
        </div>
      </div>

      {/* Flexbox2 - Nossos serviços */}
      <div
        ref={flexboxRef3}
        className="flex flex-col gap-8 p-8 bg-white w-full mx-6 md:mx-8 lg:mx-8 rounded-xl"
      >
        {/* Título */}
        <div className="text-center">
          <h2 className="text-gray-800 lg:text-4xl md:text-3xl text-3xl font-bold">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Qualidade e profissionalismo em cada peça
          </p>
        </div>

        {/* Carrossel de Serviços */}
        <div className="relative w-full">
          <div className="embla overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="embla__container flex">
              {serviceCards.map((card, idx) => (
                <div key={idx} className="embla__slide flex-[0_0_100%] px-2">
                  <div className="bg-gradient-to-br rounded-3xl shadow-xl p-8 flex flex-col lg:flex-row items-center lg:items-start gap-8 min-h-[400px] from-white to-gray-50">
                    {/* Lado esquerdo - Conteúdo */}
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start mb-6">
                        <div className="bg-[#23c5ed] p-4 rounded-2xl shadow-lg">
                          {card.icon}
                        </div>
                        <h3 className="ml-4 text-2xl lg:text-3xl font-bold text-gray-900">
                          {card.title}
                        </h3>
                      </div>
                      <div className="text-gray-600 text-lg leading-relaxed mb-6">
                        {card.description}
                      </div>
                    </div>
                    {/* Lado direito - Imagem */}
                    <div
                      className={`w-full lg:w-80 h-64 lg:h-80 bg-gradient-to-br ${card.bg} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      {card.image}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores de navegação */}
          <div className="flex justify-center mt-6 space-x-3">
            {serviceCards.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

        <div className="flex flex-col items-center">
          <Link
            href="/servicos"
            className="flex hover:bg-gray-300 rounded-full p-1 text-bold mt-2 lg:mt-6 text-[#23c5ed] gap-1 hover:underline"
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

      {/* Flexbox2 - Dicas*/}
      <div
        className="dicas flex flex-col bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #23c5ed 0%, #1ba3c2 50%, #011F4B 100%)",
          backgroundColor: "rgba(35, 197, 237, 0.1)",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Container principal respeitando os limites da imagem */}
        <div className="flex flex-col lg:w-[60%] lg:h-full lg:pt-4 lg:p-10 backdrop-blur-lg gap-1 md:gap-2 lg:gap-2 py-2 md:py-4 lg:py-8">
          {/* Título */}
          <h2 className="text-white lg:text-4xl md:text-3xl text-3xl font-bold lg:text-left md:text-center text-center ">
            Dicas
          </h2>
          <p className=" text-lg text-white font-bold text-center md:text-center lg:text-left">
            Tudo o que você precisa saber para cuidar das suas peças
          </p>

          {/* Embla Carousel */}

          <Carousel />

          <div className="flex flex-col items-center">
            <Link
              href="/blog"
              className="flex hover:bg-white hover:text-[#23c5ed] rounded-full p-2 text-bold  text-white gap-1  hover:underline transition-colors duration-300"
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
      </div>

      {/* Venha nos visitar */}
      <div
        ref={flexboxRef4}
        className="flex flex-col md:flex-col lg:flex-row lg:justify-between gap-4 p-8 my-3 md:my-4 lg:my-8 mx-6 md:mx-8 lg:mx-16 opacity-0 translate-y-10 bg-white rounded-xl"
      >
        <div className="flexbox-left md:flex-col lg:flex-row items-start gap-4 lg:w-[50%]">
          <p className="text-gray-900 font-bold opacity-100 lg:text-4xl md:text-3xl text-3xl  text-center md:text-center lg:text-left">
            Venha nos visitar
          </p>
          <p className=" text-lg text-gray-600  text-center md:text-center lg:text-left">
            Estamos te esperando para um cafézinho ☕
          </p>
          <div className="w-full mt-4 mb-4 flex bg-white opacity-100 rounded-lg overflow-hidden ">
            <GoogleMap />{" "}
          </div>
        </div>
        <div className="flex flex-col items-center lg:m-6 lg:mt-12 lg:items-center lg:justify-start">
          <div className="flex rounded-2xl bg-gray-50 lg:m-6 lg:p-4 m-2 p-1 items-center flex-col">
            <h3 className="text-md md:text-xl lg:text-2xl text-center font-semibold text-gray-900">
              Horário de Funcionamento
            </h3>
            <address className="lg:mt-3 space-y-1 mt-1 text-center justify-end text-md md:text-xl lg:text-2xl not-italic text-gray-600">
              <p>Segunda à Sexta 07:30 - 18:00</p>
              <p>Sábado 08:00 - 12:00</p>
            </address>
          </div>
          <div className="flex-col rounded-2xl bg-gray-50 lg:m-6 lg:p-4 mt-4 items-center">
            <h3 className=" text-md md:text-xl lg:text-2xl text-center font-semibold text-gray-900">
              Nosso endereço
            </h3>
            <address className="flex-col mt-2 space-y-1 items-center text-center text-md md:text-xl lg:text-2xl not-italic text-gray-600">
              <p>Rua Projetada Quadra 01 Lote 07 - Núcleo Industrial</p>
              <p>Ribas do Rio Pardo - MS</p>
            </address>
          </div>
        </div>
      </div>

      {/* Seção de Contato */}
      <div className="contato flex flex-col md:flex-col lg:flex-row mt-3 md:mt-4 lg:mt-8 bg-white h-full w-full">
        {/* Conteúdo */}
        <div className="left-side flex flex-col my-auto items-center lg:items-end lg:text-right lg:justify-center p-4 h-full w-full lg:w-1/2">
          <h2 className="text-[#011F4B] lg:text-4xl md:text-3xl text-3xl font-bold">
            Contato
          </h2>

          {/* WhatsApp */}
          <div className="flex items-center lg:items-end gap-3 lg:mt-4">
            <span className="text-[#011F4B] font-bold sm:text-2xl md:text-xl lg:text-2xl">
              Faça seu orçamento:
            </span>
          </div>
          <div className="flex items-center gap-3 mt-4 lg:p-2 rounded-full hover:bg-gray-300">
            <img
              src="/icons/wpp-icon.gif"
              alt="WhatsApp"
              className="w-8 h-8 rounded-full"
            />
            <a href={`https://wa.me/${phoneNumber}`}>
              <span className="text-[#011F4B] text-2xl cursor-pointer">
                (067) 99924-2050
              </span>
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 mt-3">
            <img src="/icons/email-icon.svg" alt="Email" className="w-8 h-8" />
            <span className="text-[#011F4B] sm: lg:text-2xl">
              lavanderiariopardo@gmail.com.br
            </span>
          </div>
        </div>

        <div className="flex object-cover mt-2 h-full w-full lg:w-1/2 right-side">
          <img
            alt="painter"
            src="bg/bg5.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
