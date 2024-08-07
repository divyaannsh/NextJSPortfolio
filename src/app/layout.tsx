import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from "./components/main/StarBackground";
import StarsCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divyansh Portfolio",
  description: " This is  my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden'}
      >
        <StarsCanvas/>
         <Navbar />
        {children}
        </body>
    </html>
  );
}
