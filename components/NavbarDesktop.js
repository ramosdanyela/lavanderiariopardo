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
              className="hover:bg-gray-300 text-gray-700 lg:text-2xl rounded-full lg:p-2 text-bold"
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
