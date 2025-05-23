'use client';

import React, { Dispatch, SetStateAction, useState, JSX } from 'react';
import { IoIosClose } from 'react-icons/io';
import { HiUserGroup } from "react-icons/hi";
import Image from 'next/image';

type NewGroupChatProp = {
    closeAddChat : () => void;
};

export default function NewGroupChat({ closeAddChat } : NewGroupChatProp ) : JSX.Element {
  const [inputValue, setInputValue] : [string, Dispatch<SetStateAction<string>>] = useState("");
  const isValid : boolean = inputValue.trim().length > 0;
  const [groupImage, setGroupImage] : [string, Dispatch<SetStateAction<string>>] = useState("");
  const [groupName, setGroupName] : [string, Dispatch<SetStateAction<string>>] = useState("");

  const handleImageChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        setGroupImage(imageURL);
    }
  }

  const handleGroupNameChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  }
    return (
      <div className="fixed top-1/2 left-1/2 w-[400px] min-h-[400px] -translate-x-1/2 -translate-y-1/2 !bg-white border border-gray-200 shadow-lg transition-all rounded-lg flex flex-col z-50">
          <div className="flex justify-between items-center border-b border-gray-200 p-4">
              <span className='text-sm font-medium text-gray-600'>New Group</span>
              <button className="bg-white hover:border-gray-100 border border-white hover:bg-gray-100 py-1.5 px-3 text-xs rounded transition !p-1 text-gray-400 focus:outline-none cursor-pointer" onClick={closeAddChat}>
                  <IoIosClose />
              </button>
          </div>
          <div className="p-4 bg-white text-gray-600">
              <div className="flex flex-col gap-y-4">
                  <div className="">
                    <div className="flex items-center justify-between gap-x-2">
                        <div className="overflow-hidden rounded-full cursor-pointer transition-all shrink-0 h-11 w-11 hover:scale-110 ">
                            <label className="relative h-11 w-11">
                                <div className="h-11 w-11 overflow-hidden rounded-full">
                                    <figure className="relative flex h-11 w-11 items-center shrink-0 justify-center rounded-full border overflow-hidden" style={{backgroundColor: "rgb(209, 213, 219)"}}>
                                        {groupImage ? (
                                            <Image src={groupImage} alt="Group" className="object-cover rounded-full" fill/>
                                            ) : (
                                        <HiUserGroup className="text-gray-500" size={24} />
                                        )}
                                    </figure>
                                </div>
                                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                    <div className="cursor-pointer text-center text-xs11 font-medium leading-tight text-white">
                                        Upload Image
                                    </div>
                                </div>
                                <input accept="image/*" className="invisible absolute left-0 top-0 z-50 h-full w-full" type="file" name="image" 
                                onChange={handleImageChange} />
                            </label>
                        </div>
                        <div className="flex w-full flex-col gap-1">
                            <div className="relative">
                                <input className="w-full py-3 px-4 border border-gray-200 bg-white rounded-md text-sm disabled:bg-gray-10 focus:border-green-700 focus:ring-green-700" placeholder="Group Name" value={groupName} onChange={handleGroupNameChange}/>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="h-10 w-full">
                      <div className="relative">
                           <input placeholder="Search contact by name or number" className="w-full p-2 rounded-md border border-gray-200  text-[13.28px] focus:outline-none focus:border-green-700  focus:ring-green-700" type="text" 
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
                  {/* All Group members added */}
                  <div className="h-72 w-full">
                    <div className="flex p-4 border border-gray-200 h-full w-full"></div>
                  </div>
                  <div className="flex justify-between items-center gap-x-2">
                      <button className="p-1.5 text-sm text-gray-400">
                          No phones available
                      </button>
                      <button className="flex items-center justify-center gap-x-2 bg-green-700 border-green-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400 text-white hover:bg-green-700/90 shadow-sm  border py-1.5 px-3 text-xs rounded transition font-medium disabled:cursor-not-allowed" disabled={!isValid}>
                          Create Group
                      </button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
