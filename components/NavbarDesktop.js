"use client";
import Link from "next/link";

const NavbarDesktop = () => {
  // Lista de itens do menu
  const menuItems = [
    { name: "Quem Somos", link: "/quemsomos" },
    { name: "Nossos Serviços", link: "/servicos" },
    { name: "Contato", link: "/contato" },
  ];

  return (
    <nav className="bg-white hidden lg:flex justify-between fixed w-full px-4 z-50 items-center max-w-screen-sm md:max-screen-md lg:max-w-screen-xl py-4">
      {/* LOGO */}
      <div className="flex">
        <Link href="/">
          <img
            src="/idv-portal/logo.png"
            alt="Logo"
            className="w-45 h-20 object-cover cursor-pointer"
          />
        </Link>
      </div>
      {/* MENU */}
      <ul className="flex lg:gap-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="hover:bg-[#223569] hover:text-white hover:scale-105 hover:shadow-lg text-gray-700 lg:text-2xl rounded-full lg:p-3 text-bold transition-all duration-300 transform"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarDesktop;
