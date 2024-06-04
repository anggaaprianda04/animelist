import "@/styles/globals.css";
import { Gabarito } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Fragments/Navbar"));
const Footer = dynamic(() => import("@/components/Fragments/Footer"));

const gabarito = Gabarito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Anime",
  description: "List anime Indonesian",
};

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
