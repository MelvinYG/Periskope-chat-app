'use client';

import React, { Dispatch, JSX, SetStateAction, useState } from 'react'
import { IoIosClose } from "react-icons/io";
import { FaPaperPlane } from "react-icons/fa";

type NewChatProps = {
  open: boolean;
  closeAddChat: () => void;
};

export default function NewChat({ open , closeAddChat } : NewChatProps) : JSX.Element {
    const [inputValue, setInputValue] : [string, Dispatch<SetStateAction<string>>] = useState("");
  const isValid : boolean = inputValue.trim().length > 0;

  return (
    <div className="fixed top-1/2 left-1/2 w-[400px]  -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 shadow-lg transition-all rounded-lg">
        <div className="flex justify-between items-center border-b border-gray-200 p-4">
            <span className='text-sm font-medium text-gray-600'>New Chat</span>
            <button className="bg-white hover:border-gray-100 border border-white hover:bg-gray-100 py-1.5 px-3 text-xs rounded transition !p-1 text-gray-400 focus:outline-none cursor-pointer" onClick={closeAddChat}>
                <IoIosClose />
            </button>
        </div>
        <div className="p-4 text-gray-600">
            <div className="flex flex-col gap-y-4">
                <div className="h-10 w-full">
                    <div className="relative">
                         <input placeholder="Enter name or number (with country code e.g. +91)" className="w-full p-2 rounded-md border border-gray-200  text-[13.28px] focus:outline-none focus:border-green-700  focus:ring-green-700" type="text" 
                         value={inputValue}
                         onChange={(e) => setInputValue(e.target.value)}/>
                         {isValid === true ?
                            <ul className='absolute w-full max-h-48 z-10 overflow-auto bg-white px-1 py-1 shadow-md no-scrollbar text-xs text-gray-400'>
                                <li>
                                    <div className='flex justify-between gap-y-0.5 rounded-md px-2 py-2 hover:bg-gray-100 cursor-pointer transition-all'>Add {inputValue}</div>
                                </li>
                            </ul> :
                            <></>
                         }
                    </div>
                </div>
                <div className="flex justify-between items-center gap-x-2">
                    <button className="p-1.5 text-sm text-gray-400">
                        No phones available
                    </button>
                    <button className="flex items-center justify-center gap-x-2 bg-green-700 border-green-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 text-white hover:bg-green-700/90 shadow-sm  border py-1.5 px-3 text-xs rounded transition font-medium" disabled={!isValid}>
                        Start Chat
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
