'use client';

import React, { Dispatch, SetStateAction, useState } from 'react'
import { HiUserGroup } from 'react-icons/hi2';
import { BsStars } from 'react-icons/bs';
import { IoIosSearch, IoMdSend } from "react-icons/io";
import { GrAttachment } from "react-icons/gr";
import { CiFaceSmile } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaMicrophone } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";
import { supabaseBrowser } from '@/lib/supabase/browser';
import ChatMessagesWrapper from './ChatMessagesWrapper';

export default function OpenChat() {
    const supabase = supabaseBrowser();
    const [inputMsg, setInputMsg] : [string, Dispatch<SetStateAction<string>>] = useState("");

    const handleSendMessage = async (text : string) => {
        console.log(text);
        const { error } =  await supabase.from("messages").insert({text});
        if(error){
            console.log("Error sending msg");
        }
    }
  return (
    <div className="flex flex-col flex-1 items-center justify-between w-full">
        <div className="flex h-12 w-full border-b border-gray-200 bg-white px-2">
            <div className="flex items-center justify-between w-full">
                <div className="flex gap-x-2">
                    <div className="flex items-center justify-center">
                        <HiUserGroup color='gray' fontSize={28}/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <div className="font-bold text-gray-900">Group Name</div>
                        <div className="">
                            Name1, Name2, Name3, Name4, Name5
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-x-2 text-gray-800">
                    <div className="flex items-center justify-center cursor-pointer">
                        <BsStars fontSize={20}/>
                    </div>
                    <div className="flex items-center justify-center cursor-pointer">
                        <IoIosSearch fontSize={20}/>
                    </div>
                </div>
            </div>
        </div>
        {/* main chats display */}
        <ChatMessagesWrapper />
        {/* inputs */}
        <div className="h-24 border-t border-gray-200 w-full bg-white">
            <div className="flex flex-col h-full w-full gap-y-2">
                <div className="flex items-center w-full h-1/2 px-2">
                    <div className="flex items-center w-full">
                        <input type="text"
                            placeholder='Message...'
                            className='outline-0 bg-white px-2 py-2 w-full'
                            onKeyDown={(e) => {
                                if(e.key === "Enter"){
                                    handleSendMessage(e.currentTarget.value);
                                    e.currentTarget.value = "";
                                }
                            }}
                            onChange={(e) => {
                                setInputMsg(e.target.value);
                            }}
                            value={inputMsg}
                            />
                    </div>
                    <div className="flex items-center">
                        <button className='cursor-pointer flex items-center'
                            onClick={() => {
                                handleSendMessage(inputMsg);
                                setInputMsg("");
                            }}>
                            <IoMdSend fontSize={20} color='green'/>
                        </button>
                    </div>
                </div>
                <div className="w-full h-1/2">
                    <div className="flex items-center gap-x-4 px-4 text-gray-800">
                        <div className="flex items-center justify-center">
                            <button className='cursor-pointer'>
                                <GrAttachment fontSize={16} />
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className='cursor-pointer'>
                                <CiFaceSmile  fontSize={16}/>
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className='cursor-pointer'>
                                <MdOutlineAccessTime fontSize={16} />
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className='cursor-pointer'>
                                <PiClockClockwiseBold fontSize={16} />
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className='cursor-pointer'>
                                <BsStars fontSize={16} />
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className='cursor-pointer'>
                                <FaFileLines fontSize={16} />
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className='cursor-pointer'>
                                <FaMicrophone fontSize={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
