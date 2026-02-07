import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi mujer",
  description: "Con mucho amor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.className} antialiased min-h-dvh`} style={{ backgroundImage: 'url(/heart-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
