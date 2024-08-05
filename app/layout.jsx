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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <Banner />
        {children}
        <GoogleTagManager gtmId="GTM-PT92V8R5" />
      </body>
    </html>
  );
}
