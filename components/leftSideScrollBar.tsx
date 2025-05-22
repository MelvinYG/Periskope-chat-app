'use client';

import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoChatbubbleEllipsesSharp, IoTicket } from 'react-icons/io5';
import { BsGraphUp, BsStars } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';
import { HiMegaphone } from 'react-icons/hi2';
import { PiGitMerge } from 'react-icons/pi';
import { RiContactsBookFill, RiFolderImageFill } from 'react-icons/ri';
import { MdChecklist } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LeftSideScrollBar() {
  const pathname = usePathname();
  const links = [
    { id: 'dashboard', icon: <AiFillHome /> },
    { divider: true },
    { id: 'chats', icon: <IoChatbubbleEllipsesSharp /> },
    { id: 'tickets', icon: <IoTicket /> },
    { id: 'analytics', icon: <BsGraphUp /> },
    { divider: true },
    { id: 'list', icon: <FaListUl /> },
    { id: 'broadcast', icon: <HiMegaphone /> },
    {
      id: 'rules',
      icon: (
        <div className="relative">
          <PiGitMerge />
          <div className="absolute top-[-4px] right-[-6px] text-[12px] text-[#ebb305]">
            <BsStars />
          </div>
        </div>
      ),
    },
    { divider: true },
    { id: 'contacts', icon: <RiContactsBookFill /> },
    { id: 'media', icon: <RiFolderImageFill /> },
    { divider: true },
    { id: 'logs', icon: <MdChecklist /> },
    { id: 'settings', icon: <IoIosSettings /> },
  ];

  return (
    <div className='overflow-auto flex flex-col h-[calc(100%-124px)] gap-y-1.5 no-scrollbar'>
      {links.map((link, i) => {
        if (link.divider) {
          return <hr key={i} className='m-0 h-0 text-gray-200 border-t-1' />;
        }

        const isActive = pathname === '/' + link.id;

        return (
          <Link
            key={link.id}
            href={"/" + link.id}
            className={`flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-gray-200/50 ${
              isActive ? 'text-green-700 font-bold' : 'text-gray-700'
            }`}
          >
            <div>{link.icon}</div>
          </Link>
        );
      })}
    </div>
  );
}
