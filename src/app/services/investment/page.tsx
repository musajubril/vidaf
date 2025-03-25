"use client"

import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaCircleMinus } from 'react-icons/fa6'

export default function page() {
  const businessAreas = [
    "  Investment, Business Process  and consultancy services for Aviation  support resources and utilities supplies.",
    " Investment Advisory Services for Energy Projects.",
    " Safety, safety portfolio and safety management systems consultancy services."
]

const values = [
  {letter: "V", details: "Value-driven"},
  {letter: "I", details: "Integrity"},
  {letter: "D", details: "Dependable"},
  {letter: "A", details: "Accountable and"},
  {letter: "F", details: "Fidelity in our quest to making customers the main focus of our business"},
]
  return (
    <div className="px-[120px] max-mobile:px-6">
            <div className="grid grid-cols-2 gap-20 max-mobile:grid-cols-1">
              <div className="">
                <img src="/img/investment.jpg" className='rounded-xl' alt="" />
              </div>
              <div className="flex flex-col">
                <div className=" text-h3">
                Investment/Business Advisory Services (Focusing on: Oil, Gas, Aviation, Energy and Safety).

                </div>
                <div className="">
                <br />
                At VIDAF Develpment Company Limited, we provide expert investment and business advisory services tailored to the unique needs of the oil, gas, aviation, energy, and safety sectors. With years of industry experience, we empower businesses and investors with strategic insights, risk assessments, and financial guidance to optimize opportunities and ensure sustainable growth.
                <br />
                <br />
                We have expertise and capabilities for the following on Investment/Business Advisory services:
                </div>
                <div className="">
                              
                    <p />
                  </div>
                                   <div className="flex items-start gap-5">
                                     <div className="text-primary font-bold">
                                       <FaCheckCircle size={24} className="text-primary"/>
                                     </div>
                                     <div className="text-sm">Business, Professional  advisory and consultancy services for complete oil and gas systems Value chain from refineries through Intermediate terminal to:</div>
                                   </div>
                                   <div className="flex flex-col pl-10 py-4 gap-3">
                              {[' Supply forecourts (petroleum retail stations  and to consumers', 'Lubricant blending plants and to end-users', 'Airport terminals  and to the aircrafts'].map((area, index) => (
                                <div key={index}>
                                   <div className="flex items-start gap-5">
                                     <div className="text-primary font-bold">
                                       <FaCircleMinus size={24} className="text-primary"/>
                                     </div>
                                     <div className="text-sm">{area}</div>
                                   </div>
                                 </div>
                              ))}
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
                              </div>
              </div>
            </div>
  )
}
