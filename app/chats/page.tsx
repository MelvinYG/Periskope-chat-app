'use client';

import React, { Dispatch, JSX, SetStateAction, useState } from 'react'
import { TbMessageCirclePlus } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { RiFolderDownloadFill } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import { LuTextSearch } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { BsArchiveFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import NewChat from '@/components/newChat';

export default function Chats() : JSX.Element {
  const [filterActive, setFilterActive] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [addChat, setAddChat] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

  const [addNewChat, setAddNewChat] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

  const [addNewGroupChat, setAddNewGroupChat] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

  const toggleMap : Record<string, Dispatch<SetStateAction<boolean>>> = {
    filterActive: setFilterActive,
    addChat: setAddChat,
    addNewChat: setAddNewChat,
    addNewGroupChat: setAddNewGroupChat,
  }

  const toggleButton = (buttonName : keyof typeof toggleMap) => {
    toggleMap[buttonName](prev => !prev); 
  }

  return (
    <div className='flex w-full flex-1 flex-col bg-gray-50 no-scrollbar'>
      <div className="flex flex-1 w-full overflow-hidden">
        <div className="relative flex flex-col h-[calc(100%-48px)] border-r border-gray-200 bg-gray-50 lg:w-96">
          <div className="flex items-center justify-between !h-12 w-full border-b border-gray-200 gap-x-2 px-2 py-2">
              <div className="">
                <button>
                  <div className="flex items-center justify-center w-full">
                    <div className="flex items-center h-7 w-40 gap-x-1.5 !border-none !bg-transparent !px-1 !shadow-none text-gray-600">
                      <RiFolderDownloadFill />
                      <span className='text-[13.28px] font-semibold'>Inbox</span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="flex">
                      <button className="flex items-center bg-white hover:bg-gray-100 border-gray-200 text-gray-800  shadow-sm border py-1.5 px-3 gap-x-1 text-xs rounded transition max-lg:!px-2 cursor-pointer ">
                        <IoIosSearch fontSize={16}/>
                        <span>Search</span>
                      </button>
              </div>
              <div className="flex">
                      <button className="relative flex items-center bg-white hover:bg-gray-100 border-gray-200 text-gray-800  shadow-sm border py-1.5 px-3 gap-x-1 text-xs rounded transition max-lg:!px-2 cursor-pointer " onClick={() => toggleButton('filterActive')}>
                        <IoFilterOutline fontSize={16}/>
                        <span>Filter</span>
                        {filterActive === true ? 
                          <div className="absolute left-0 top-[110%] w-48 min-h-full max-h-[70vh] z-10 bg-white rounded-md block overflow-y-auto p-2">
                            <div className="flex justify-between items-center gap-x-2 pb-1 text-gray-500 text-xs">
                              <div className="flex items-center gap-x-1">
                                <div className="flex">
                                  <FiInfo />
                                </div>
                                <div className="">
                                  Filter Condition
                                </div>
                              </div>
                              <div className="" onClick={() => toggleButton('filterActive')}>
                                <IoIosCloseCircleOutline/>
                              </div>
                            </div>
                            <div className="cursor-pointer">
                              <div className="flex items-center justify-between rounded-md p-2 text-xs text-gray-600 hover:bg-gray-100">
                                <div className="flex items-center gap-x-2">
                                  <LuTextSearch />
                                <div className="">Keywords</div>
                                </div>
                              </div>
                            </div>
                            <div className="cursor-pointer">
                              <div className="flex items-center justify-between rounded-md p-2 text-xs text-gray-600 hover:bg-gray-100">
                                <div className="flex items-center gap-x-2">
                                  <FaCircleUser />
                                <div className="">Assigned to</div>
                                </div>
                              </div>
                            </div>
                            <div className="cursor-pointer">
                              <div className="flex items-center justify-between rounded-md p-2 text-xs text-gray-600 hover:bg-gray-100">
                                <div className="flex items-center gap-x-2">
                                  <FaCircleUser />
                                <div className="">Chat access</div>
                                </div>
                              </div>
                            </div>
                            <div className="cursor-pointer">
                              <div className="flex items-center justify-between rounded-md p-2 text-xs text-gray-600 hover:bg-gray-100">
                                <div className="flex items-center gap-x-2">
                                  <BsArchiveFill />
                                <div className="">Archive</div>
                                </div>
                              </div>
                            </div>
                          </div> : 
                          <></>
                        }
                      </button>
              </div>
              </div>
          </div>

          <div className="absolute bottom-4 right-4 scale-100">
            <div className="relative">
              <button className='cursor-pointer' onClick={() => toggleButton('addChat')}>
                <div className="flex items-center justify-center h-10 w-10 bg-green-700 transition-all hover:scale-105 rounded-full">
                  < TbMessageCirclePlus color='white'/>
                </div>
              </button>
              {addChat === true ? 
                <div className="absolute right-0 bottom-[110%] z-40 w-30 flex flex-col rounded-md bg-white p-1 border-gray-200 shadow-md transform opacity-100 scale-100 transition-all">
                  <div className="w-full">
                    <div>
                      <button className='w-full bg-white border-white text-gray-800 hover:bg-gray-100 hover:border-gray-100 py-1 px-2 text-xs pr-4 rounded transition' onClick={() => toggleButton('addNewChat')}>
                        <div className="flex items-center gap-x-2 cursor-pointer">
                          <FaCircleUser color='gray'/>
                          <span>New chat</span>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="w-full">
                    <div>
                      <button className='w-full bg-white border-white text-gray-800 hover:bg-gray-100 hover:border-gray-100 py-1 px-2 text-xs pr-4 rounded transition' onClick={() => toggleButton('addNewGroupChat')}>
                        <div className="flex items-center gap-x-2 cursor-pointer">
                          <HiUserGroup color='gray'/>
                          <span>New Group</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div> : 
                <></>
              }
            </div>
          </div>
            
          {addNewChat || addNewGroupChat ? 
            <div className="fixed top-0 right-0 w-[100vw] h-[100vh] bg-white opacity-70">
              {addNewChat === true ? <NewChat open={addNewChat} closeAddChat={() => setAddNewChat(false)} /> : <></> }
            </div>
            : 
            <></>
          }
        </div>
        <main className='flex flex-col flex-1 items-center justify-between h-full py-4 text-xs text-gray-400'></main>
      </div>
    </div>
  )
}
