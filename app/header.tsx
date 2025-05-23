'use client';

import React, { JSX } from 'react'

import { AiFillHome } from 'react-icons/ai';
import { IoChatbubbleEllipsesSharp, IoTicket } from 'react-icons/io5';
import { BsGraphUp, BsStars } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';
import { HiMegaphone } from 'react-icons/hi2';
import { TiFlowMerge } from "react-icons/ti";
import { RiContactsBookFill, RiFolderImageFill } from 'react-icons/ri';
import { MdChecklist } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { TbRefreshDot } from "react-icons/tb";
import { IoHelpCircleOutline } from "react-icons/io5";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { VscDesktopDownload } from "react-icons/vsc";
import { IoMdNotificationsOff } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";

import { usePathname } from 'next/navigation';
import { supabaseBrowser } from '@/lib/supabase/browser';
import { useRouter } from 'next/navigation';

type RouteMeta = {
  [key: string]: {
    title: string;
    icon: React.ReactNode;
  };
};


const routeMeta : RouteMeta = {
  '/dashboard': { title: 'Dashboard', icon: <AiFillHome /> },
  '/chats': { title: 'Chats', icon: <IoChatbubbleEllipsesSharp /> },
  '/tickets': { title: 'Tickets', icon: <IoTicket/> },
  '/analytics': { title: 'Analytics', icon: <BsGraphUp  /> },
  '/list': { title: 'Chat list', icon: <FaListUl /> },
  '/broadcast' : {title: 'Broadcast', icon: <HiMegaphone /> },
  '/rules': {title: 'Automation', icon: (
          <div className="relative">
            <TiFlowMerge />
            <div className="absolute top-[-4px] right-[-6px] text-[12px] text-[#ebb305]">
              <BsStars />
            </div>
          </div>
        ),} ,
  '/contacts': {title: 'Contacts', icon: <RiContactsBookFill /> },
   '/media' : { title: 'Media', icon: <RiFolderImageFill /> },
    '/logs' : { title: 'Logs', icon: <MdChecklist /> },
    '/settings':{ title: 'Settings', icon: <IoIosSettings /> }
};

export default function Header(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();
  const { title, icon } = routeMeta[pathname] || { title: 'App', icon: null };

  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <div className="flex h-12 items-center justify-between gap-x-4 border-b border-gray-200 px-4 py-3 bg-white text-gray-500 text-[12px] font-medium ">
        <div className="flex items-center gap-x-3">
            {icon}
            <h1 className="font-semibold">{title.toLowerCase()}</h1>
        </div>
        <div className="flex items-center lg:gap-x-3">
            <div className="flex">
                <button className='flex items-center bg-green-700 hover:bg-green-500 border-gray-200 text-gray-50  shadow-sm border py-1.5 px-3 gap-x-1 text-xs rounded transition max-lg:!px-2 cursor-pointer '
                onClick={handleLogout}>
                    <span>Logout</span>
                </button>
            </div>
            <div className="flex">
                <button className='flex items-center bg-white hover:bg-gray-100 border-gray-200 text-gray-800  shadow-sm border py-1.5 px-3 gap-x-1 text-xs rounded transition max-lg:!px-2 cursor-pointer '>
                    <TbRefreshDot fontSize={18}/>
                    <span>Refresh</span>
                </button>
            </div>
            <div className="flex">
                <button className='flex items-center bg-white hover:bg-gray-100 border-gray-200 text-gray-800  shadow-sm border py-1.5 px-3 gap-x-1 text-xs rounded transition max-lg:!px-2 cursor-pointer '>
                    <IoHelpCircleOutline fontSize={18}/>
                    <span>Help</span>
                </button>
            </div>
            <div className="flex">
                <button className='flex items-center bg-white hover:bg-gray-100 border-gray-200 text-gray-800  shadow-sm border py-1.5 px-3 gap-x-1 text-xs rounded transition max-lg:!px-2 cursor-pointer '>
                    <div className="relative w-2 h-2 rounded-full bg-[#ffdc00]">
                        <div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse" style={{boxShadow: 'rgba(255,220,0, 0.314) 0px 0px 4px 4px'}}>
                        </div>
                    </div>
                    <span>5 / 6 phones</span>
                    <HiOutlineChevronUpDown />
                </button>
            </div>
            <div className="flex">
                <button className='flex items-center bg-white hover:bg-gray-100 border-gray-200 text-gray-800  shadow-sm border py-1.5 px-3 gap-x-1 text-xs rounded transition max-lg:!px-2 cursor-pointer '>
                    <VscDesktopDownload fontSize={16}/>
                </button>
            </div>
            <div className="flex">
                <button className='flex items-center bg-white hover:bg-gray-100 border-gray-200 text-gray-800  shadow-sm border py-1.5 px-3 gap-x-1 text-xs rounded transition max-lg:!px-2 cursor-pointer '>
                    <IoMdNotificationsOff fontSize={16}/>
                </button>
            </div>

            <div className="flex">
                <button className='flex items-center bg-white hover:bg-gray-100 border-gray-200 text-gray-800  shadow-sm border py-1.5 px-3 gap-x-1 text-xs rounded transition max-lg:!px-2 cursor-pointer '>
                    <BsStars fontSize={16} color='#ebb305'/>
                    <CiCircleList fontSize={16}/>
                </button>
            </div>
        </div>
    </div>
  );
}
