import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SimoWorld",
  description: "El buscador de eventos para Simracers de habla hispana",
};

const RootLayout = ({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) => {
  return (
    <>
      <html lang="es">
        <body className={inter.className}>
          <main>
            {children}
            {authModal}
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
