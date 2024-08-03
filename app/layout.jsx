import { Inter } from "next/font/google";
import "./globals.css";
import Banner from "./components/Banner";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noticias | Fernanda Familiar",
  description: "Últimas noticias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Banner />
        {children}
        <GoogleTagManager gtmId="GTM-PT92V8R5" />
      </body>
    </html>
  );
}
