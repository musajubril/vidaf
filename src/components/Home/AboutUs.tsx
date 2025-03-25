"use client"
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
    const businessAreas = [
        " Integrated Energy (focusing on: Oil, Gas, Power and Alternative Energy",
        " Infrastructure (Focusing on: Air ports, Sea Ports, Coastal Terminals , Rail systems, Refineries, rail, road and other human comfort-promoting structures)",
        "Investment/Business  Advisory Services (Focusing on: Oil, Gas, Aviation, Energy and Safety)."
    ]
  return (
    <div className="px-[120px] max-mobile:px-6 py-24 relative grid grid-cols-2 max-mobile:grid-cols-1 gap-10">
        <div className="">
            <img src="/img/global.jpg" alt="" className='rounded' />
        </div>
        <div className="">
        <div className="pb-3 text-primary">
                About us
            </div>
        <div className="relative">
          <div className="">
            {/* <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Security Services</h2> */}
            <p className="mx-auto mt-3 text-xl text-gray-500 sm:mt-4">
            <div>
            <b className="text-4xl font-extrabold text-gray-700">VIDAF Development Company Limited.</b> <br /> <br />
            We create value-adding products, projects and services for all-round human comfort by meeting all stakeholders’ expectations with safe and sustainably good environmental practices
            <br />
            <br />
            VIDAF Development company Limited is an incorporated company with core business areas of:
  <p />
</div>

            </p>
          </div>
          <div className="flex flex-col my-5 gap-4">
            {businessAreas.map((area, index) => (
                 <div key={index}>
                 <div className="flex items-start gap-5">
                   <div className="text-primary font-bold">
                     <FaCheckCircle size={24} className="text-primary"/>
                   </div>
                   <div className="text-sm">{area}</div>
                 </div>
               </div>
            ))}
          </div>
          <div className="text-xl text-gray-500">
          VIDAF seek to leverage on: Core expertise of her main promoters, depth of their professional experiences, contacts/networks and social capital to gradually explore areas of the companies’ unique comparative advantages.
          </div>
        </div>
            </div>
      </div>
  )
}
