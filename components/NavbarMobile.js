"use client";
import Link from "next/link";
import { useState } from "react";

const NavbarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Lista de itens do menu
  const menuItems = [
    { name: "Quem Somos", link: "/quemsomos" },
    { name: "Marcas & Produtos", link: "/marcaseprodutos" },
    { name: "Contato", link: "/contato" },
  ];

  return (
    <nav className="bg-[#f9fcfd] flex lg:hidden justify-center fixed w-full z-50 shadow-2xl items-center max-w-screen-sm px-4 relative">
      {/* LOGO */}
      <div className="flex justify-center">
        <Link href="/">
          <img
            src="/idv-portal/logo.png"
            alt="Logo"
            className="w-36 h-16 object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Hamburger button*/}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Alternar menu"
        aria-expanded={menuOpen}
        className="absolute right-4 p-2 rounded-2xl bg-gray-50 focus:outline-none"
      >
        {menuOpen ? (
          // Ícone de fechar (X)
          <svg
            className="w-8 h-8 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Ícone Hamburger
          <svg
            className="w-10 h-10 text-gray-900 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Dropdown do Menu Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#f9fcfd] shadow-lg">
          <ul className="flex flex-col">
            {menuItems.map((item, index) => (
              <li key={index} className="border-b border-gray-200">
                <Link
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-300 font-bold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
