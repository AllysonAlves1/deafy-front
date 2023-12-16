import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/bar/sideBar";
import NavBar from "./components/bar/navBar";
import Providers from "./Providers/providers";
import HeaderHome from "./components/header/header";
import { AuthProvider } from "./Providers/AuthContext";
import ProtectedRoute from "./Providers/ProtectedRoute";
import { ModalProvider } from "./Providers/ModalContext";

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
          <AuthProvider>
            <ProtectedRoute>
              <Providers>
                <ModalProvider>
                  <HeaderHome />
                  <SideBar>
                    {children}
                    <NavBar />
                  </SideBar>
                </ModalProvider>
              </Providers>
            </ProtectedRoute>
          </AuthProvider>
        </body>
      </html>
    );
    //Children é a página que vai ser renderizada, no caso o layout ele renderiza por cima da página em questão
  } else {
    return (
      <html>
        <body>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    );
  }
}
