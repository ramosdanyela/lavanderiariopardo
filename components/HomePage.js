import GoogleMap from "@/components/GoogleMap";
import {
  UserGroupIcon,
  PaintBrushIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useRef } from "react";
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
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const flexboxRef1 = useRef(null);
  const flexboxRef2 = useRef(null);
  const flexboxRef3 = useRef(null);
  const flexboxRef4 = useRef(null);
  const flexboxRef5 = useRef(null);

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
  ];

  const phoneNumber = "5567999242050";

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
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 p-2   mx-6 bg-white rounded-xl">
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
      <div className="flex flex-col md:flex-col lg:flex-row lg:justify-between gap-4 p-4 my-3 md:my-4 lg:my-2 mx-6 md:mx-8 lg:mx-8 bg-[#23c5ed] rounded-xl">
        {/* Coluna Esquerda - Texto + Logos */}
        <div className="flex flex-col lg:w-[45%]">
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
        className="flex flex-col md:flex-col lg:flex-row lg:justify-between gap-4 p-8 bg-white"
      >
        {/* Coluna Esquerda - Texto + Logos */}
        <div className="flex flex-col lg:w-[45%]">
          <p className="text-gray-800 lg:text-4xl md:text-3xl text-3xl font-bold text-center md:text-center lg:text-left">
            Nossos Serviços
          </p>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <div key="marcas" className="flex items-start gap-4">
              <FaHandshake className="w-8 h-8 text-gray-600 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-600">
                  Marcas de Confiança
                </div>
                <div className="text-gray-600">
                  Trabalhamos com fabricantes renomados, reconhecidos nacional e
                  internacionalmente, para garantir a qualidade dos nossos
                  serviços.
                </div>
              </div>
            </div>
            <div key="produtos" className="flex items-start gap-4">
              <FaStar className="w-8 h-8 text-gray-600 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-600">
                  Produtos de Alta Performance
                </div>
                <div className="text-gray-600">
                  Utilizamos apenas produtos de alta performance, cuidadosamente
                  selecionados para resultados superiores e preservação das suas
                  peças.
                </div>
              </div>
            </div>
            <div key="solucoes" className="flex items-start gap-4">
              <FaLightbulb className="w-8 h-8 text-gray-600 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-600">
                  Soluções Inovadoras
                </div>
                <div className="text-gray-600">
                  Nossas parcerias nos permitem oferecer soluções inovadoras,
                  eficientes e seguras para todos os tipos de peças e
                  necessidades.
                </div>
              </div>
            </div>
            <div key="seguranca" className="flex items-start gap-4">
              <FaShield className="w-8 h-8 text-gray-600 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-600">
                  Segurança e Preservação
                </div>
                <div className="text-gray-600">
                  Priorizamos a segurança e a preservação das suas peças, com
                  fornecedores avaliados constantemente para manter o padrão de
                  excelência.
                </div>
              </div>
            </div>
            <div
              key="compromisso"
              className="flex items-start gap-4 md:col-span-2"
            >
              <FaCircleCheck className="w-8 h-8 text-gray-600 mt-1" />
              <div>
                <div className="font-bold text-lg text-gray-600">
                  Compromisso com a Qualidade
                </div>
                <div className="text-gray-600">
                  Conte com a nossa experiência e com a força das melhores
                  marcas do setor para garantir tranquilidade, segurança e
                  qualidade em cada serviço prestado.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href="/servicos"
              className="flex hover:bg-gray-300 rounded-full p-1 text-bold mt-2 lg:mt-6 text-white gap-1 hover:underline"
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

        {/* Coluna Direita - Imagem do Rolo de Pintura preenchendo altura */}
        <div className="hidden lg:relative md:hidden lg:items-end lg:block lg:w-[55%]">
          <img
            src="bg/hero.png"
            alt="Rolo de Pintura"
            className="w-full lg:flex lg:absolute h-full object-cover lg:inset-0 rounded-full"
          />
        </div>
      </div>

      {/* Flexbox2 - Dicas*/}
      <div
        className="dicas flex flex-col bg-cover"
        style={{
          backgroundImage: "url('bg/hero.png')",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Branco com 90% de opacidade
          backgroundBlendMode: "overlay", // Mistura a cor branca com a imagem
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
              className="flex hover:bg-gray-600 hover:text-gray-200 rounded-full p-2 text-bold  text-[#f9fcfd] gap-1  hover:underline"
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
