import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/bar/sideBar";
import NavBar from "./components/bar/navBar";
import Providers from "./Providers/providers";
import HeaderHome from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function rootLayout({
  children,
  layoutProps, //Propriedade true or false para dizer se o layout vai ser renderizado ou não
}: {
  children: React.ReactNode;
  layoutProps: boolean;
}) {
  if (layoutProps == true) {
    // Depedendo de qual página tiver mudar o icone de acordo com a página
    return (
      <html lang="pt-br">
        <body className={inter.className}>
          <Providers>
            <HeaderHome />
            <SideBar>
            {children}
            <NavBar />
            </SideBar>
          </Providers>
        </body>
      </html>
    );
    //Children é a página que vai ser renderizada, no caso o layout ele renderiza por cima da página em questão
  } else {
    return (
      <html>
        <body>{children}</body>
      </html>
    );
  }
}
