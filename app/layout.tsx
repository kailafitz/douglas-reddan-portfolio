import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/custom/footer";
import Navigation from "@/components/custom/navigation";
// import {
//   Bellota_Text as Main,
//   Red_Hat_Display as Serif,
// } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

// const serif = Serif({
//   subsets: ["latin"],
//   variable: "--font-serif",
// });

export const metadata: Metadata = {
  title: "Douglas Reddan | Portfolio",
  description:
    "Creative Portfolio of Douglas Reddan, director and choreographer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
