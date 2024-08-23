import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Provider } from "./provider";
import { montserratFont } from "./components/ui/fonts";

export const metadata: Metadata = {
  title: "Odin`s",
  description: "Odin`s - сайт-каталог",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={montserratFont.className}>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
