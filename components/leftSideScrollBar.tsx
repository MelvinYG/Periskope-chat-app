'use client';

import React from 'react'
import { AiFillHome } from "react-icons/ai";

import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoTicket } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";

import { FaListUl } from "react-icons/fa";
import { HiMegaphone } from "react-icons/hi2";
import { PiGitMerge } from "react-icons/pi";
import { BsStars } from "react-icons/bs";

import { RiContactsBookFill } from "react-icons/ri";
import { RiFolderImageFill } from "react-icons/ri";

import { MdChecklist } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

export default function LeftSideScrollBar() {
  return (
    <div className='overflow-auto flex h-[calc(100%-124px)] flex-col gap-y-1.5 no-scrollbar'>
        <a href='/dashboard' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <AiFillHome />
            </div>
        </a>

        <hr className='m-0 h-0 text-gray-200 border-t-1'/>

        <a href='/chats' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <IoChatbubbleEllipsesSharp />
            </div>
        </a>
        <a href='/tickets' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <IoTicket />
            </div>
        </a>
        <a href='/analytics' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <BsGraphUp fontWeight={900}/>
            </div>
        </a>

        <hr className='m-0 h-0 text-gray-200 border-t-1'/>

        <a href='/list' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <FaListUl />
            </div>
        </a>
        <a href='/broadcast' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <HiMegaphone />
            </div>
        </a>
        <a href='/rules' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="relative">
                <PiGitMerge/>
                <div className="absolute top-[-4px] right-[-6px] text-[12px] text-[#ebb305]">
                    <BsStars/>
                </div>
            </div>
        </a>

        <hr className='m-0 h-0 text-gray-200 border-t-1'/>

        <a href='/contacts' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <RiContactsBookFill />
            </div>
        </a>
        <a href='/media' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <RiFolderImageFill />
            </div>
        </a>

        <hr className='m-0 h-0 text-gray-200 border-t-1'/>

        <a href='/logs' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <MdChecklist />
            </div>
        </a>
        <a href='/settings' className='flex items-center justify-between hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <div className="">
                <IoIosSettings />
            </div>
        </a>
    </div>
  )
}
