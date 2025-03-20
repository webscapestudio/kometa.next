import type { Metadata } from "next";
import "./globals.scss";
import { Footer, Header } from "@/components/widgets";
import localFont from "next/font/local";

const involveFont = localFont({
  src: [
    {
      path: "../public/fonts/Involve-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Involve-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Involve-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Involve-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${involveFont.className} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
