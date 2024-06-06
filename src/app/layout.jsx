import "@/styles/globals.css";
import { Gabarito } from "next/font/google";
import React, { lazy } from "react";

const Navbar = lazy(() => import("@/components/Fragments/Navbar"));
const Footer = lazy(() => import("@/components/Fragments/Footer"));

const gabarito = Gabarito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Anime",
  description: "List anime Indonesian",
};

export const dynamic = "force-static";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark relative min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
