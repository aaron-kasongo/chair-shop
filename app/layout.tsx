import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../contexts/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chair — Modern Furniture | Timeless Design",
  description: "Sculptural furniture for modern living. Designed with conscience, built to last.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#FEFCF5]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
