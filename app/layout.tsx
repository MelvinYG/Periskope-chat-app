import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSideBar from "@/components/leftSideBar";
import Header from "@/app/header";
import RightSideBar from "@/components/rightSideBar";
import { supabaseServer } from "@/lib/supabase/server";
import InitUser from "@/lib/store/initUser";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Chat App",
  description: "Created by @MelvinYG",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = supabaseServer();
  const { data } = await (await supabase).auth.getSession();

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
        <InitUser user={data.session?.user}/>
      </body>
    </html>
  );
}
