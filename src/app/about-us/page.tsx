"use client"
import React from 'react'
import Header from './components/header'
import { FaCheckCircle } from 'react-icons/fa'
import Services from '@/components/Services'
import Partners from '@/components/Partners'
import Team from '@/components/Team'

export default function page() {
  const businessAreas = [
    " Integrated Energy (focusing on: Oil, Gas, Power and Alternative Energy",
    " Infrastructure (Focusing on: Air ports, Sea Ports, Coastal Terminals , Rail systems, Refineries, rail, road and other human comfort-promoting structures)",
    "Investment/Business  Advisory Services (Focusing on: Oil, Gas, Aviation, Energy and Safety)."
]

const values = [
  {letter: "V", details: "Value-driven"},
  {letter: "I", details: "Integrity"},
  {letter: "D", details: "Dependable"},
  {letter: "A", details: "Accountable and"},
  {letter: "F", details: "Fidelity in our quest to making customers the main focus of our business"},
]

  return (
    <div className='pb-24'>
        <Header />
        <div className="px-[120px] max-mobile:px-6 pt-24">
        <div className="grid grid-cols-2 gap-20 max-mobile:grid-cols-1">
          <div className="">
            <img src="/img/about-us.jpg" className='rounded-xl' alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">
              / about us /
            </div>
            <div className=" text-h3">
            VIDAF Develpment Company Limited
            </div>
            <div className="">
            VIDAF Development company Limited is an incorporated company with core business areas of:
            </div>
            <div className="">
                     We create value-adding products, projects and services for all-round human comfort by meeting all stakeholders’ expectations with safe and sustainably good environmental practices
                          <br />
                          <br />
                          VIDAF Development company Limited is an incorporated company with core business areas of:
                <p />
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
                        <div className=" text-gray-500 pb-5">
                        VIDAF seek to leverage on: Core expertise of her main promoters, depth of their professional experiences, contacts/networks and social capital to gradually explore areas of the companies’ unique comparative advantages.
                        </div>
            <div className="grid grid-cols-2 max-mobile:grid-cols-1 gap-5">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <div className="text-black text-h2">
                    Vision
                  </div>
                  <div className="text-medium text-dark-grey">
                  To become a global business that is treasured for her people, process and products.
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-black text-h2">
                    Mission
                  </div>
                  <div className="text-medium text-dark-grey">
                  To create value-adding  products, projects and services for  all-round human comfort  by meeting all stakeholders’ expectations with safe and sustainably good environmental practices
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-black text-h2">Core Values</div>
                <div className="text-medium text-dark-grey flex flex-col gap-2">
                  {
                    values.map((value, index) => (
                      <div key={index} className='flex items-center gap-2'>
                        <div className="text-black font-bold">{value.letter}</div>
                        <div className="">-</div>
                        <div className="text-sm">{value.details}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
                          </div>
          </div>
        </div>
          <Services />
          <Partners />
          <Team />
        </div>
  )
}
 