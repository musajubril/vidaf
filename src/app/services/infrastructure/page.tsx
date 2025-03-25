"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";

export default function page() {
  const businessAreas = [
    `Pre-project and project preliminary studies`,
    `Projects conceptualization`,
    `Engineering Design`,
    `Procurement`,
    `Construction`,
    `Project management`,
    `Commissioning`,
    `Operations`,
    `Public-private partnerships`,
    `Post-construction and Operability studies`,
    `Valuation`,
    `Maintenance`,
  ];

  const values = [
    { letter: "V", details: "Value-driven" },
    { letter: "I", details: "Integrity" },
    { letter: "D", details: "Dependable" },
    { letter: "A", details: "Accountable and" },
    {
      letter: "F",
      details:
        "Fidelity in our quest to making customers the main focus of our business",
    },
  ];
  return (
    <div className="px-[120px] max-mobile:px-6">
      <div className="grid grid-cols-2 gap-20 max-mobile:grid-cols-1">
        <div className="">
          <img src="/img/infrastructure.jpg" className="rounded-xl" alt="" />
        </div>
        <div className="flex flex-col">
          <div className=" text-h3">
            Infrastructure
          </div>
          <div className="">
            <br />
            In today's fast-paced digital world, a robust infrastructure is the foundation of any successful business. Our Infrastructure Services provide high-performance, scalable, and secure solutions tailored to your organization's needs, ensuring uninterrupted operations and optimal efficiency.
            <br />
            <br />
            We have expertise and capabilities for the following on
            Infrastructural projects:
          </div>
          <div className="">
            <p />
          </div>
          <div className="flex flex-col my-5 gap-4">
            {businessAreas.map((area, index) => (
              <div key={index}>
                <div className="flex items-start gap-5">
                  <div className="text-primary font-bold">
                    <FaCheckCircle size={24} className="text-primary" />
                  </div>
                  <div className="text-sm">{area}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
