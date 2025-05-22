import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LeftSideBar from "@/components/leftSideBar";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chat App",
  description: "Created by @MelvinYG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex h-full w-full">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-1 items-center justify-center overflow-hidden`}
      >
        <div className='flex w-full h-screen overflow-hidden relative'>
          <LeftSideBar />
          <main className='w-full'>
            <Header />
            <section className='flex w-full'>
              <div className='w-[95%]'>{children}</div>
              <aside className='w-[5%] flex flex-col items-center'>right</aside>
            </section>
          </main>
        </div>
      </body>
    </html>
  );
}
