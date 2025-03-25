"use client"
import React from 'react'
import { WhatWeDo } from '../../wwd'

export default function Services() {
  return (
    <div className='px-[120px] max-mobile:px-6 flex flex-col gap-[30px] items-center py-24'>
        <div className="grid grid-cols-3 max-mobile:grid-cols-1 gap-[30px]">
            {WhatWeDo.map((topic, index) => (
                <div key={index} className="flex flex-col gap-6 border rounded-[20px] p-10">
                  <div className=" bg-primary text-white w-[100px] h-[100px] rounded-full flex justify-center items-center">
                    <topic.icon className='w-[45px] h-[45px]' />
                  </div>
                    <div className="font-bold text-xl text-[#034833]">{topic.title}</div>
                    <div className="text-gray-700 text-base leading-7 font-normal">{topic.subtitle}</div>
                </div>
            ))}
        </div>
        {/* <div className="grid grid-cols-2 max-mobile:grid-cols-1 gap-[30px] max-w-[820px] w-full mx-auto">
            {topics.slice(3,5).map((topic, index) => (
                <div key={index} className="flex flex-col gap-6 border rounded-[20px] p-10">
                  <div className=" bg-primary text-white w-[100px] h-[100px] rounded-full flex justify-center items-center">
                    <topic.icon className='w-[45px] h-[45px]' />
                  </div>
                    <div className="font-bold text-xl text-[#034833]">{topic.title}</div>
                    <div className="text-gray-700 text-base leading-7 font-normal">{topic.description.slice(0,165)}</div>
                </div>
            ))}
        </div> */}
    </div>
  )
}
