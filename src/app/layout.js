import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "~/components/cores/Navbar";
import Footer from "~/components/cores/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JIWA GROUP",
  description: "Jiwa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen relative top-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
