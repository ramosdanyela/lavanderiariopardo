"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    id: 1,
    title: "Escolha a Tinta Perfeita para Sua Casa",
    href: "#",
    description:
      "Como acertar na cor e no tipo de tinta para transformar seus ambientes.",
    imageUrl: "/blog/artigo1.webp",
    date: "Jan 05, 2025",
    datetime: "2020-03-16",
    category: { title: "Paredes", href: "#" },
    author: {
      name: "Portal Tintas",
      role: "",
      href: "#",
      imageUrl: "/icons/favicon2.png",
    },
  },
  {
    id: 2,
    title: "Como Cuidar da Sua Pintura para Manter a Parede Sempre Bonita",
    href: "#",
    description:
      "Dicas práticas para conservar suas paredes pintadas por mais tempo.",
    imageUrl: "/blog/artigo2.webp",
    date: "Jan 05, 2025",
    datetime: "2020-03-16",
    category: { title: "Paredes", href: "#" },
    author: {
      name: "Portal Tintas",
      role: "",
      href: "#",
      imageUrl: "/icons/favicon2.png",
    },
  },
  {
    id: 3,
    title:
      "Cores Tendência para 2025: As Paletas que Irão Transformar Seu Espaço",
    href: "#",
    description:
      "Descubra as cores que estarão em alta no próximo ano e como aplicá-las em sua decoração.",
    imageUrl: "/blog/artigo3.webp",
    date: "Jan 05, 2025",
    datetime: "2020-03-16",
    category: { title: "Paredes", href: "#" },
    author: {
      name: "Portal Tintas",
      role: "",
      href: "#",
      imageUrl: "/icons/favicon2.png",
    },
  },
  {
    id: 4,
    title:
      "Guia Completo para Renovação de Ambientes com Tintas de Alta Qualidade",
    href: "#",
    description:
      "Descubra como transformar seus espaços com dicas avançadas e produtos de alta performance.",
    imageUrl: "/blog/artigo1.webp",
    date: "Jan 05, 2025",
    datetime: "2020-03-16",
    category: { title: "Renovação", href: "#" },
    author: {
      name: "Portal Tintas",
      role: "",
      href: "#",
      imageUrl: "/icons/favicon2.png",
    },
  },
  {
    id: 5,
    title:
      "Tendências de Cores para 2025: Inspire-se para Transformar Sua Casa",
    href: "#",
    description:
      "Conheça as cores que vão dominar o mercado e como aplicá-las para renovar seus ambientes com estilo.",
    imageUrl: "/blog/artigo2.webp",
    date: "Jan 05, 2025",
    datetime: "2020-03-16",
    category: { title: "Tendências", href: "#" },
    author: {
      name: "Portal Tintas",
      role: "",
      href: "#",
      imageUrl: "/icons/favicon2.png",
    },
  },
  {
    id: 6,
    title: "Passo a Passo para Pintura Profissional: Dicas de Especialistas",
    href: "#",
    description:
      "Aprenda técnicas e segredos dos especialistas para obter um acabamento impecável em suas pinturas.",
    imageUrl: "/blog/artigo3.webp",
    date: "Jan 05, 2025",
    datetime: "2020-03-16",
    category: { title: "Tutoriais", href: "#" },
    author: {
      name: "Portal Tintas",
      role: "",
      href: "#",
      imageUrl: "/icons/favicon2.png",
    },
  },
  {
    id: 7,
    title: "Cuidados Essenciais na Aplicação de Tinta: Evite Erros Comuns",
    href: "#",
    description:
      "Dicas práticas para evitar os erros mais comuns na hora de pintar e garantir um acabamento de qualidade.",
    imageUrl: "/blog/artigo1.webp",
    date: "Jan 05, 2025",
    datetime: "2020-03-16",
    category: { title: "Dicas", href: "#" },
    author: {
      name: "Portal Tintas",
      role: "",
      href: "#",
      imageUrl: "/icons/favicon2.png",
    },
  },
];

const slugify = (text) =>
  text
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
    .toLowerCase()
    .replace(/\s+/g, "-") // Substitui espaços por "-"
    .replace(/[^\w-]+/g, ""); // Remove caracteres especiais

export default function Example() {
  const flexboxRef1 = useRef(null);
  const flexboxRef2 = useRef(null);

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
    animateSection(flexboxRef2);
  }, []);

  return (
    <div className="bg-[#f9fcfd] pt-[8rem] sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={flexboxRef1}
          className="opacity-0 translate-y-10 mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Dicas da Nossa Lavanderia
          </h2>
          <p className="mt-2 text-lg/8 font-semibold text-[#23c5ed]">
            Tudo o que você precisa saber para acertar na pintura.
          </p>
        </div>
        <div
          ref={flexboxRef2}
          className="opacity-0 translate-y-10 mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${slugify(post.title)}`}
              className="block w-full"
            >
              <article className="flex flex-col items-start justify-between cursor-pointer hover:bg-gray-100 p-4 rounded-2xl transition">
                <div className="relative w-full">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                      {post.category.title}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={post.author.imageUrl}
                      className="size-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
