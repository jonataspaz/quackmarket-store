import "./globals.css";
import type { Metadata } from "next";
import { Urbanist, Barlow } from "next/font/google";
import Footer from "@/components/Footer";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuackMarket",
  description:
    "Our mission is to provide the best experience for buying and selling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
