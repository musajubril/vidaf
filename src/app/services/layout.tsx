"use client"

import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
         <div
      className="bg-no-repeat bg-center bg-cover rounded-[10px] h-[450px]"
      style={{
        backgroundImage: `url(/img/wwd.jpg)`,
      }}
    >
      <div className="h-full w-full bg-black/80 py-[60px] lg:px-[137px] flex flex-col justify-center items-center text-white gap-[30px] text-center max-mobile:px-6">
        <div className="text-d1 max-mobile:text-h1 max-mobile:w-dvw text-wrap">
          Services
        </div>
        <div className="text-md">Home / services</div>
      </div>
    </div>
    <div className="pt-24">
        {children}
    </div>
        </div>
  )
}
