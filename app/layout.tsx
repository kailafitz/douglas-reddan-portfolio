import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
// import Footer from "@/components/custom/footer";
// import Navigation from "@/components/custom/navigation";

const inter = Inter({ subsets: ["latin"] });

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
    <html className="scroll-smooth relative" lang="en">
      <body className={inter.className}>
        {/* {pathname.includes("draft") && <Navigation />} */}
        {children}
        {/* {pathname.includes("draft") && <Footer />} */}
      </body>
    </html>
  );
}
