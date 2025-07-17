import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";
import WhatsAppBtn from "@/components/WhatsAppBtn";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Lavanderia Rio Pardo",
  description: "Higiene e cuidado que faz a diferença",
  keywords: "lavanderia rio pardo, lavanderia industrial, lavanderia",
  icons: "/icons/favicon2.png",
  openGraph: {
    title: "Lavanderia Rio Pardo",
    description:
      "Lavanderia Industrial - Higiene e cuidado que faz a diferença",
    url: "https://www.lavanderiariopardo.com.br",
    siteName: "Lavanderia Rio Pardo",
    images: "https://www.lavanderiariopardo.com.br/icons/favicon2.png",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`${plusJakartaSans.className} antialiased bg-white`}>
        <div className="flex flex-col items-center max-w-screen-sm mx-auto md:max-screen-md lg:max-w-screen-xl">
          <Navbar />

          {children}

          <Footer />
        </div>

        <WhatsAppBtn />
      </body>
    </html>
  );
}
