import React from 'react'

import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";
import { FiEdit3 } from "react-icons/fi";
import { BsListNested } from "react-icons/bs";
import { RiListCheck2, RiFolderImageFill, RiListSettingsLine } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaHubspot } from "react-icons/fa";

export default function RightSideBar() {
  return (
    <aside className='flex flex-col bg-white border-l border-gray-200 py-4 w-14'>
      <div className="flex flex-col items-center gap-y-8 px-4 py-2.5 text-[18px]">
        <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <TbLayoutSidebarLeftCollapseFilled />
        </div>

        <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <LuRefreshCw />
        </div>

        <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <FiEdit3 />
        </div>

        <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <BsListNested />
        </div>

        <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <RiListCheck2 />
        </div>

        <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <FaHubspot />
        </div>

        <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <HiUserGroup />
        </div>

        <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <MdOutlineAlternateEmail />
        </div>

         <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <RiFolderImageFill />
        </div>

        <div className="flex bg-transparent text-gray-400 hover:text-gray-600 cursor-pointer">
          <RiListSettingsLine />
        </div>
      </div>
    </aside>
  )
}
