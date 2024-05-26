import "../styles/globals.css";
import { Gabarito } from "next/font/google";
import Navbar from "@/components/Fragments/Navbar";
import Footer from "@/components/Fragments/Footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Anime",
  description: "List anime Indonesian",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
