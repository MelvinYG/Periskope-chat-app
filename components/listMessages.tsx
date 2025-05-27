'use client';

import React from "react";

// type Message = {
//   id: string;
//   text: string;
//   created_at: string;
//   send_by: string;
//   users: {
//     id: string;
//     display_name: string;
//     email: string;
//     avatar_url: string;
//   };
// };

export default function ListMessages() {

  return (
    <div className="w-full h-[calc(100%-134px)]">
      <div
        className="w-full h-full bg-cover bg-center flex flex-col px-2"
        style={{ backgroundImage: "url('/bgImg.jpg')" }}
      >
        {/* other content */}
        <div className="flex gap-x-4">
          <div className="h-10 w-10 rounded-full bg-green-400"></div>

          <div className="flex justify-start my-2">
            <div className="bg-white text-sm p-3 rounded-lg shadow max-w-xs">
              <div className="font-semibold text-green-600">Roshnag Airtel</div>
              <p className="text-gray-900">Hello, South Euna!</p>
              <div className="text-xs text-gray-500 text-right mt-1">08:01</div>
            </div>
          </div>
        </div>
        {/* my msg */}
        <div className="flex justify-end px-4 my-2">
          <div className="bg-green-100 text-sm p-3 rounded-lg shadow max-w-xs">
            <div className="font-semibold text-green-600">Periskope</div>
            <p className="text-gray-900">testing</p>
            <div className="text-xs text-gray-500 text-right mt-1">09:49</div>
          </div>
        </div>
        {/* date separator */}
        <div className="text-center text-xs text-gray-500 my-4">
          <span className="bg-gray-200 px-2 py-1 rounded">23-01-2025</span>
        </div>
      </div>
    </div>
  );
}
