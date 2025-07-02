import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";

// Função para gerar slugs (URL amigável)
const slugify = (text) =>
  text
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove diacríticos
    .toLowerCase()
    .replace(/\s+/g, "-") // Substitui espaços por "-"
    .replace(/[^\w-]+/g, ""); // Remove caracteres especiais

// Array de posts
const posts = [
  {
    id: 1,
    title: "Escolha a Tinta Perfeita para Sua Casa",
    description:
      "Como acertar na cor e no tipo de tinta para transformar seus ambientes.",
    imageUrl: "/blog/artigo1.webp",
    date: "Jan 05, 2025",
    category: "Paredes",
  },
  {
    id: 2,
    title: "Como Cuidar da Sua Pintura para Manter a Parede Sempre Bonita",
    description:
      "Dicas práticas para conservar suas paredes pintadas por mais tempo.",
    imageUrl: "/blog/artigo2.webp",
    date: "Jan 05, 2025",
    category: "Paredes",
  },
  {
    id: 3,
    title:
      "Cores Tendência para 2025: As Paletas que Irão Transformar Seu Espaço",
    description:
      "Descubra as cores que estarão em alta no próximo ano e como aplicá-las em sua decoração.",
    imageUrl: "/blog/artigo3.webp",
    date: "Jan 05, 2025",
    category: "Decoração",
  },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="flex embla w-full h-full items-start">
      <div className="flex embla__viewport overflow-hidden" ref={emblaRef}>
        {/* Contêiner do Carousel */}
        <div className="flex items-start lg:gap-16 mt-4 lg:mt-6 ">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${slugify(post.title)}`}
              className="embla__slide"
            >
              <article className=" md:w-full w-full flex flex-col md:flex-col lg:flex-row lg:gap-6 bg-white/70 shadow-lg rounded-xl p-4 md:p-6 lg:p-6 border border-gray-200 items-center cursor-pointer transition hover:bg-gray-100">
                {/* Imagem */}
                <img
                  alt={post.title}
                  src={post.imageUrl}
                  className="flex rounded-2xl lg:h-[250px] lg:w-[300px] w-[300px] h-[300px] object-cover"
                />
                {/* Texto do post */}
                <div className="flex flex-col justify-center">
                  <div className="flex-col mt-4">
                    <h3 className="lg:text-xl font-semibold text-gray-900 group-hover:text-gray-600">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm lg:text-lg text-gray-600">
                      {post.description}
                    </p>
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
