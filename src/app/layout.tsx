"use client"; // Mark this file as a Client Component

import React, { useRef, useEffect } from 'react'; // Import React and useRef
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer"; // Ensure this path is correct

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden h-screen flex flex-col`}
        style={{ overflowY: 'hidden' }} // Ensure no vertical scrolling
      >
        {/* Main content */}
        <div className="flex-grow flex flex-col justify-center items-center">
          {children}
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
