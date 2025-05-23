import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSideBar from "@/components/leftSideBar";
import Header from "@/components/header";
import RightSideBar from "@/components/rightSideBar";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
        className={`${inter.variable} antialiased flex flex-1 items-center justify-center overflow-hidden`}
      >
        <div className='flex w-full h-screen overflow-hidden relative'>
          <LeftSideBar />
          <main className='w-full'>
            <Header />
            <div className='flex flex-1 h-full max-h-full w-full overflow-hidden'>
              <div className='flex flex-1 flex-col overflow-hidden'>{children}</div>
              <RightSideBar />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
