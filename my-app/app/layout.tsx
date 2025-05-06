import type { Metadata } from "next";
import { Space_Grotesk  } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from 'react-toastify';
const SpaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "HELMY DEV | PORTFOLIO ",
  description: "Explore the professional frontend portfolio of Helmy Dev — expert in React, TypeScript, Next.js, and modern web technologies.",
  keywords: ["Frontend Developer", 'Helmy Dev', '@moohilmy' , 'moohilmy', 'moohelmy', 'Hilmy dev', 'حلمي للتطوير', "React Developer", "Next.js Portfolio", "TypeScript Developer", "Web Developer Portfolio", 'egyptian developer', 'web developer', 'frontend developer', 'software engineer', 'web designer', 'مطور واجهات أمامية', 'مطور ويب', 'مطور تطبيقات ويب', 'مطور تطبيقات الويب', 'مطور تطبيقات الويب في مصر', 'مطور واجهات أمامية في مصر', 'مطور واجهات أمامية في القاهرة', 'مطور واجهات أمامية في الإسكندرية'],
  authors: [{ name: "Helmy Dev", url: "https://official-portfolio-ecru.vercel.app" }],
  creator: "Helmy Dev",
  themeColor: "#1e73be",
  openGraph: {
    title: "HELMY DEV",
    description: "Explore the professional frontend portfolio of Helmy Dev — expert in React, TypeScript, Next.js, and modern web technologies.",
    url: "https://official-portfolio-ecru.vercel.app",
    siteName: "HELMY DEV"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SpaceGrotesk.className} antialiased`}
      >
        <Header/>
        <ToastContainer />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
