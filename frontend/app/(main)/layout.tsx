"use client"

import Header from "@/components/Header";
import "../globals.css";
import { ThemeProvider } from 'next-themes';
import Footer from "@/components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="dark:bg-darkPrimary">
          <ThemeProvider enableSystem={true} attribute="class">
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
