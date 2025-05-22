'use client';

import React, { JSX } from 'react';
import LeftSideScrollBar from './leftSideScrollBar';
import Image from 'next/image';
import { TbStarsFilled, TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";

export default function LeftSideBar() : JSX.Element {
  return (
    <aside className='flex-col gap-y-2 lg:flex w-14 border-r border-gray-200'>
      <div className='flex flex-1 flex-col gap-y-2 h-full overflow-hidden'>
        <div className='flex h-14 items-center justify-center px-2'>
          <div className='relative hover:bg-gray-200/50 rounded-md px-2 py-1.5'>
            <Image src="/logo.jpeg" alt="logo" width={36} height={36} />
            <div className='absolute bottom-[4px] right-[6px] h-2.5 w-2.5 flex items-center justify-center bg-white'>
              <div className='text-[10px] font-bold text-green-700'>2</div>
            </div>
          </div>
        </div>
        <div className='flex min-h-0 flex-1 flex-col justify-between text-[20px] font-medium text-gray-600 px-2 no-scrollbar'>
          <LeftSideScrollBar />
          <div className='flex flex-col sticky bottom-0 gap-y-1.5 bg-white pb-2 pt-3'>
            <div className="flex cursor-pointer items-center gap-x-3 rounded-md px-2 py-1.5 hover:bg-gray-200/50">
              <TbStarsFilled />
            </div>
            <div className="flex cursor-pointer items-center gap-x-3 rounded-md px-2 py-1.5 hover:bg-gray-200/50">
              <TbLayoutSidebarRightCollapseFilled />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
