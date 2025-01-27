import type { Metadata } from "next";
import { Geist_Mono, Rubik_Mono_One } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const rubikMonoOne = Rubik_Mono_One({
  variable: "--font-rubik-mono-one",
  weight: '400',
  style: 'normal',
  subsets: ["cyrillic", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono-one",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hector Martinez",
  description: "Hector Martinez Portfolio showcasing my projects and experience as a Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} ${rubikMonoOne.variable} antialiased`}
      >
        <Header/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
