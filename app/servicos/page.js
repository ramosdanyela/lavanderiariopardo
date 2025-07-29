"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaTruck,
  FaShirt,
  FaSocks,
  FaBed,
  FaShield,
  FaCircleCheck,
  FaClock,
} from "react-icons/fa6";

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
      image: "/bg/entrega.png",
      description: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Realizamos a retirada e entrega do material conforme sua
            necessidade, em horários e prazos pré-determinados. Fornecemos
            tickets com descrição detalhada e contagem prévia das peças. Todo
            material é embalado em sacos plásticos fornecidos por nós e
            recolhidos pelo motorista conforme itinerário combinado.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaCircleCheck className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">
                Coleta na sua empresa
              </span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaClock className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">Entrega pontual</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <FaShield className="w-12 h-12 text-[#23c5ed]" />,
      title: "Higienização de EPIs",
      image: "/bg/epis.png",
      description: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Realizamos a lavagem e higienização de Roupas de Proteção EPI em
            geral, utilizando produtos profissionais e de alta performance para
            manter a originalidade das suas peças.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
        </div>
      ),
    },
    {
      icon: <FaShirt className="w-12 h-12 text-[#23c5ed]" />,
      title: "Uniformes Industriais",
      image: "/bg/uniformes.png",
      description: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Oferecemos lavagem especializada para uniformes industriais,
            incluindo macacões, jalecos, calças e camisas de trabalho.
            Utilizamos produtos específicos para manter a durabilidade e
            resistência das peças, garantindo que seus funcionários tenham
            sempre uniformes limpos e em perfeito estado.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaCircleCheck className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">
                Lavagem Especializada
              </span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaCircleCheck className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">
                Durabilidade Garantida
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <FaBed className="w-12 h-12 text-[#23c5ed]" />,
      title: "Pacotes para Hotelaria e Alojamentos",
      image: "/bg/cama-mesa.jpg",
      description: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Oferecemos soluções completas para hotéis, pousadas e alojamentos,
            com planos personalizados para grandes volumes de peças, garantindo
            praticidade, economia e qualidade.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaCircleCheck className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">
                Coleta e entrega programada
              </span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
              <FaCircleCheck className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700 font-medium">
                Higienização de enxoval
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <FaShirt className="w-12 h-12 text-[#23c5ed]" />,
      title: "Peças Pessoais",
      image: "/bg/roupas-coloridas.jpg",
      description: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Lavamos diversos tipos de peças, desde roupas do dia a dia até itens
            de cama, mesa e banho, sempre com cuidado e produtos de alta
            performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
            <div className="flex items-center">
              <FaShirt className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700">Calças e Bermudas</span>
            </div>
            <div className="flex items-center">
              <FaBed className="text-[#23c5ed] w-5 h-5 mr-2" />
              <span className="text-gray-700">
                Mantas, Cobertores e Edredons
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
    <Head>
    <title>Lavanderia Rio Pardo</title>
    <meta name="description" content="Lavanderia industrial em Ribas do Rio Pardo." />
    <link rel="canonical" href="https://lavanderiariopardo.com.br/servicos" />
  </Head>
  <main>
    <div className="min-h-screen bg-[#f9fcfd]">
      <div className="max-w-7xl mx-auto px-4 pt-24 md:pt-32 lg:pt-40 pb-8 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-8 lg:mb-16 opacity-0">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl text-[#23c5ed] font-semibold">
            Qualidade e profissionalismo em cada peça
          </p>
        </div>

        <div ref={servicesRef} className="space-y-16 opacity-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row  items-center">
                {/* Imagem */}
                <div className="lg:w-1/4 h-64 lg:h-80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col justify-center items-center text-center lg:text-left lg:items-start lg:w-2/3 p-8 lg:p-12 lg:h-80">
                  <div className="flex items-center justify-center lg:justify-start text-center lg:text-left mb-6">
                    <div className="hidden lg:block">{service.icon}</div>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 lg:ml-4">
                      {service.title}
                    </h2>
                  </div>

                  <div className="text-gray-600 lg:text-lg leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></main>
    </>
  );
}
