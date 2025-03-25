"use client"
import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className='bg-[#E1E8FF] w-full flex px-[120px] max-mobile:px-6 py-[18px]'>
        <div className="flex gap-2 items-center">
            <div className="">
                Home
            </div>
            <div className="">
            <IoChevronForwardSharp />
            </div>
            <div className="">
                About Us
            </div>
        </div>
    </div>
  )
}
